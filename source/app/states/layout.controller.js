
'use strict';

angular
    /**
     * root controller
     */
    .module('app.layout')

    .controller('layoutController', function ( $scope, toastr, action, $location, $anchorScroll ) {
        // NOTE "root" means a "root visual model" the data which will use by view rendering and in nested views too
        var root = $scope.root = {
            action: action,
            /**
             * wrapped toastr to show messages from view
             *
             */
            sayNo: function () {
                toastr.warning('Это действие не реализовано.', 'Предупреждение');
            },

            goTo: function () {
                // console.log($location);
                $anchorScroll();
            }
        };
        // no-unused-vars =)
        root;

    });
