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
            prevImg: prevImg,
            nextImg: nextImg,
            openModal: open
        };

        var projects = [];

        projectsService

            .getProjectList()

            .then(function (success) {
                    projects = success;
                    (function normalizeInput(projects) {
                        if(projects.length != 0) {
                            //check is there are any projects?
                            for(var i in projects) {
                                projects[i].currPlatform = {}; //will be set as selected by default platform to preview
                                if(projects[i].tags.indexOf('web') != -1)
                                    vm.webProjectsCount++;
                                if(projects[i].tags.indexOf('obile') != -1)
                                    vm.mobileProjectsCount++;

                                if(projects[i].platforms.length != 0) {
                                    //check is there are any platforms? and if it is -> setting the first as currPlatform
                                    for(var n in projects[i].platforms) {
                                        projects[i].platforms[n].currImg = ''; //will be shown on the device screen

                                        if((projects[i].platforms[n].images.length != 0)&&(projects[i].platforms[n].frame.length!=0)) { ///??
                                            //check is there are any images + frames? and if it is -> setting the first as currImg
                                            projects[i].platforms[n].currImg = projects[i].platforms[n].images[0];
                                        }
                                        else if(projects[i].platforms[n].frame.length==0) { ///??
                                            projects[i].platforms[n].frame = null;
                                        }
                                        else {
                                            //ELSE currImg = null
                                            projects[i].platforms[n].currImg = null;
                                        }
                                    }

                                    projects[i].currPlatform = projects[i].platforms[0];
                                }
                                else {
                                    //ELSE currPlatform = null
                                    projects[i].currPlatform = null;
                                }
                            }
                        }
                        else {
                            //and if it isn't -> setting project = null
                            projects = null;
                        }
                    })(projects);

                    vm.projects = projects;
                })

            .catch(function(failReason) {
                console.log(failReason);
            });



        vm.totalProjectsCount = vm.projects.length;

        function prevImg(curr, clicked) {
            var i = curr.images.indexOf(curr.currImg);
            if (i == 0) {
                curr.currImg = curr.images[curr.images.length - 1];
            } else {
                curr.currImg = curr.images[i-1];
            }
            $timeout(function(){clicked.prev = false;}, 500);
        }

        function nextImg(curr, clicked) {
            var i = curr.images.indexOf(curr.currImg);
            if(i == curr.images.length-1)  curr.currImg = curr.images[0];
            else {
                curr.currImg = curr.images[i+1];
            }
            $timeout(function(){clicked.next = false;}, 500);
        }

        function open (currPlatform) {
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
                .then(function ( success ) {
                    console.log('modal success', success);
                })
                .catch(function ( error ) {
                    console.log('modal error', error);
                });
        }

    });
