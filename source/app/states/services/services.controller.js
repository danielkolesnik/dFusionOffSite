
'use strict';

angular

    .module('layout.services')

    .controller('servicesController', function ( $scope ) {
        // NOTE "vm" means a "visual model" the data which will use by view rendering
        var vm = $scope.vm = {
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
                console.log(this.newContact);
            }
        };
        // no-unused-vars =)
        vm;

    });
