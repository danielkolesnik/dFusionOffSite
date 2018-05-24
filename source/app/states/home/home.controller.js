
'use strict';

angular

    .module('layout.home')

    .controller('homeController', function ( $scope, tabs, ApiService ) {

        // NOTE "vm" means a "visual model" the data which will use by view rendering
        var vm = $scope.vm = {
            pricesList: tabs,
            data: null,
        };

        ApiService.getData()
            .then(function ( success ) {
                console.info('ApiService.getData', success);
                vm.data = success;
            })
            .catch(function ( error ) {
                console.error('ApiService.getData', error);
            });

    });
