'use strict';


angular

    .module('app')

    .directive('scroll', function ( $window ) {
        return {
            link: function (scope, elem) {
                angular.element($window).on('scroll', function () {
                    elem
                        .toggleClass('navbarFixed', (this.pageYOffset >= 40));
                    // if (this.pageYOffset >= 40) {
                    //     scope.root.scrollReady = true;
                    //     console.log("yes", scope.root.scrollReady);
                    // } else {
                    //     scope.root.scrollReady = false;
                    //     console.log("no", scope.root.scrollReady);
                    // }
                });
            }
        };
    });
