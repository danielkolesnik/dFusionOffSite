
'use strict';

angular

    .module('layout.other')

    .controller('otherController', function ( $scope, tabs ) {

        // NOTE "vm" means a "visual model" the data which will use by view rendering
        var vm = $scope.vm = {
            tabs: tabs,
        };
        // no-unused-vars =)
        vm;

    });
