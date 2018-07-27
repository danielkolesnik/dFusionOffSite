
'use strict';

angular

    .module('layout.services')

    .controller('servicesController', function ( $scope, TechnologiesService ) {
        // NOTE "vm" means a "visual model" the data which will use by view rendering
        var vm = $scope.vm = {
            technologies: [],
            newContact: {
                gender: '',
                name: '',
                email: '',
                company: '',
                phone: '',
                message: '',
                captcha: ''
            },
            submit: function () {
                console.warn(this.newContact);
            }
        };

        TechnologiesService

            .getTechList()

            .then(function ( success ) {

                for(var i in success) {
                    if(success[i].skills.length !== 0) {
                        var left = 0;
                        //right = 0;
                        success[i].leftRow = [];
                        success[i].rightRow = [];

                        if(success[i].skills.length % 2 === 1) {
                            // skills in left row will include greater half
                            left = Math.round(success[i].skills.length / 2);
                            // skills in right row will include lesser half
                            //right = math.round(success[i].skills.length / 2 - 1);
                        } else {
                            left /*= right*/ = success[i].skills.length / 2;
                        }
                        for(var n in success[i].skills) {
                            if(n < left) {
                                success[i].leftRow.push(success[i].skills[n]);
                            } else {
                                success[i].rightRow.push(success[i].skills[n]);
                            }
                        }
                    }
                }

                vm.technologies = success;
            })

            .catch(function ( failReason ) {
                console.warn(failReason);
            });

    });
