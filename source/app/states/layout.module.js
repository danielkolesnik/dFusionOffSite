
'use strict';

angular
    /**
     * default bootstraping of angular application
     * structure dependencies application
     */
    .module('app.layout', [
        'layout.home',
        'layout.other',
        'layout.services',
        'layout.about',
        'layout.portfolio'
    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout', {
            url: '/layout',
            abstract: true,
            views: {
                'main': {
                    templateUrl: 'app/states/layout.html',
                    controller: 'layoutController'
                },
                'footer': {
                    templateUrl: 'app/states/footer/footer.html',
                    controller: 'footerController'
                }
            },
            resolve: {
                /**
                 * Return promise object
                 *
                 * @param { Object } $q
                 * @param { Object } $timeout
                 * @returns { Promise }
                 */
                action: function ( $q, $timeout ){
                    var deferred = $q.defer();
                    $timeout(function () {
                        // some async action which executed before the application start
                        deferred.resolve({fake: 'data'});
                    }, 1 * 1000);
                    return deferred.promise;
                },

            }
        });

    });
