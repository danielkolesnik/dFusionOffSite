'use strict';

angular

    .module('layout.portfolio')

    .controller('portfolioController', function ($scope, $timeout, $uibModal, projectsService) {


        var vm = $scope.vm = {
            projects: [],
            totalProjectsCount: 0,
            webProjectsCount: 0,
            mobileProjectsCount: 0,
            filterBy: 'all',
            prevImg: function prevImg(curr, clicked) {
                var i = curr.images.indexOf(curr.currImg);
                if (i == 0) {
                    curr.currImg = curr.images[curr.images.length - 1];
                } else {
                    curr.currImg = curr.images[i-1];
                }
                $timeout(function(){clicked.prev = false;}, 500);
            },
            nextImg: function nextImg(curr, clicked) {
                var i = curr.images.indexOf(curr.currImg);
                if(i == curr.images.length-1) {
                    curr.currImg = curr.images[0];
                }
                else {
                    curr.currImg = curr.images[i+1];
                }
                $timeout(function(){
                    clicked.next = false;
                }, 500);
            },
            openModal: function open (currPlatform) {
                $uibModal.open({
                    animation: true,
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: 'app/states/portfolio/modal.html',
                    controller: 'modalInstanceController',
                    size: 'lg',
                    resolve: {
                        currPlatform: function () {
                            return currPlatform;
                        }
                    }
                }).result
                    .then(function ( /*success*/ ) {
                        // console.log('modal success', success);
                    })
                    .catch(function ( /*error*/ ) {
                        // console.log('modal error', error);
                    });
            }
        };

        projectsService

            .getProjectList()

            .then( function ( success ) {
                //check is there are any projects?
                if(success.length !== 0) {
                    for(var i in success) {
                        //will be set as selected by default platform to preview
                        success[i].currPlatform = {};
                        //count web projects
                        if(success[i].tags.indexOf('web') !== -1) {
                            vm.webProjectsCount++;
                        }
                        //count mobile projects
                        if(success[i].tags.indexOf('mobile') !== -1) {
                            vm.mobileProjectsCount++;
                        }
                        //check is there are any platforms? and if it is -> setting the first as currPlatform
                        if(success[i].platforms.length !== 0) {
                            for(var n in success[i].platforms) {
                                //will be shown on the device screen
                                success[i].platforms[n].currImg = '';
                                //check is there are any images + frames? and if it is -> setting the first as currImg
                                if((success[i].platforms[n].images.length !== 0)&&(success[i].platforms[n].frame.length !== 0)) { ///??
                                    success[i].platforms[n].currImg = success[i].platforms[n].images[0];
                                }
                                else if(success[i].platforms[n].frame.length === 0) { ///??
                                    success[i].platforms[n].frame = null;
                                }
                                else {
                                    //ELSE currImg = null
                                    success[i].platforms[n].currImg = null;
                                }
                            }

                            success[i].currPlatform = success[i].platforms[0];
                        }
                        else {
                            //ELSE currPlatform = null
                            success[i].currPlatform = null;
                        }
                    }
                }
                //and if it isn't -> setting project = null
                else {
                    success = null;
                }

                vm.projects = success;
                //total projects count
                vm.totalProjectsCount = vm.projects.length;
            })

            .catch(function( failReason ) {
                console.warn(failReason);
            });

    });
