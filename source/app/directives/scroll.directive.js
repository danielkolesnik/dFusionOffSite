'use strict';


angular

    .module('app')

    .directive('scroll', function ( $window ) {
        return {
            restrict: 'A',
            /**
             * Toggle class on the element.
             * @param {obj} scope Scope.
             * @param {obj} elem Element.
             * @returns {void}
             */
            link: function (scope, elem) {
                angular.element($window).on('scroll', function () {
                    elem
                        .toggleClass('navbarFixed', (this.pageYOffset >= 40));
                });
            }
        };
    });
