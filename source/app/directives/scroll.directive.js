'use strict';


angular

    .module('app')

    .directive('scroll', function ( $window, lodash ) {
        return {
            restrict: 'A',
            scope: {
                offset: '@',
                scrollClass: '@'
            },
            /**
             * Toggle class on the element.
             * @param {obj} scope Scope.
             * @param {obj} elem Element.
             * @returns {void}
             */
            link: function (scope, elem) {
                angular
                    .element($window)
                    .on('scroll', lodash.debounce( function () {
                        elem.toggleClass(scope.scrollClass, (this.pageYOffset >= scope.offset));
                        console.log('ndskds');
                    }, 0));
            }
        };
    });
