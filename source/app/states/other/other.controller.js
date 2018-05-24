'use strict';

angular

    .module('layout.other')

    .controller('otherController', function ( $scope, tabs ) {

        var vm = $scope.vm = {
            tabs: tabs,
        };
        // no-unused-vars =)
        vm;

    });
