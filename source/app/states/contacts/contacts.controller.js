
'use strict';

angular

    .module('layout.contacts')

    .controller('contactsController', function ( $scope ) {

        var vm = $scope.vm = {
            newContact: {
                gender: 'man',
                name: '',
                email: '',
                company: '',
                phone: '',
                message: '',
                captcha: ''
            }
        };

        vm;//no unused var's
    });
