
'use strict';

angular

    .module('layout.other', [

    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout.other', {
            url: '/other',
            templateUrl: 'app/states/other/other.html',
            controller: 'otherController',
            resolve: {}
        });
    });
