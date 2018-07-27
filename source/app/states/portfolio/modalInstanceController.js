
angular

    .module('layout.portfolio')

    .controller('modalInstanceController', function ( $uibModalInstance, $scope, currPlatform ) {

        var vm = $scope.vm = {
            test: 'test',
            currPlatform: currPlatform,
            next: function next() {
                var curr = vm.currPlatform;
                var i = curr.images.indexOf(curr.currImg);
                if(i == curr.images.length-1) {
                    curr.currImg = curr.images[0];
                }
                else {
                    curr.currImg = curr.images[i+1];
                }
            },
            prev: function prev() {
                var curr = vm.currPlatform;
                var i = curr.images.indexOf(curr.currImg);
                if(i == 0){
                    curr.currImg = curr.images[curr.images.length-1];
                }
                else {
                    curr.currImg = curr.images[i-1];
                }
            },
            close: function close() {
                $uibModalInstance.close('closed');
            }
        };


    });
