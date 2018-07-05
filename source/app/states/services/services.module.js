
'use strict';

angular

    .module('layout.services', [

    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout.services', {
            url: '/services',
            templateUrl: 'app/states/services/services.html',
            controller: 'servicesController',
            resolve: {}
        });
    });
