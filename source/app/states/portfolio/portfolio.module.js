
'use strict';

angular

    .module('layout.portfolio', [

    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout.portfolio', {
            url: '/portfolio',
            templateUrl: 'app/states/portfolio/portfolio.html',
            controller: 'portfolioController',
            resolve: {}
        });
    });
