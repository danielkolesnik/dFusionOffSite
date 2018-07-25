
'use strict';

angular

    .module('app')

    .controller('footerController', function ( $scope, toastr ) {
        // NOTE "vm" means a "visual model" the data which will use by view rendering
        var vm = $scope.vm = {

            sayNo: function () {
                toastr.warning('Это действие не реализовано.', 'Предупреждение');
            }
        };

        // no-unused-vars =)
        vm;

    });
