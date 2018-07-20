
'use strict';

angular

    .module('layout.about', [

    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout.about', {
            url: '/about',
            templateUrl: 'app/states/about/about.html',
            controller: 'aboutController',
            resolve: {}
        });
    });
