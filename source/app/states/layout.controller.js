
'use strict';

angular
    /**
     * root controller
     */
    .module('app.layout')

    .controller('layoutController', function ( $scope, toastr, action ) {

        var root = $scope.root = {
            action: action,
            /**
             * wrapped toastr to show messages from view
             *
             */
            sayNo: function () {
                toastr.warning('Это действие не реализовано.', 'Предупреждение');
            }
        };
        // no-unused-vars =)
        root;

    });
