
'use strict';

angular

    .module('layout.home')

    .controller('homeController', function ( $scope, TestimonialsService ) {

        // NOTE "vm" means a "visual model" the data which will use by view rendering
        var vm = $scope.vm = {
            slides: []
        };

        vm.myInterval = 10000;
        vm.noWrapSlides = false;
        vm.active = 0;

        TestimonialsService

            .getTestimList()

            .then(function ( success ) {
                vm.slides = success;
            })

            .catch(function ( failReason ) {
                console.warn(failReason);
            });


    });
