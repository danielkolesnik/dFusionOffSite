
'use strict';

angular
    // as a deep for root module
    .module('app')
    // service injector name
    .service('ApiService', function ( $q, $timeout ) {
        // privat methods of service
        var Service = null;
        Service; // no-unused-vars =)

        return Service = {
            // publick methods
            /**
             * @description to get data from server emulation
             *
             * @example ApiService.getData().then(...).catch(...);
             * @returns { Promise }
             * @function ApiService.getAddressInfo
             * @public
             */
            getData: function () {
                var deferred = $q.defer();
                $timeout(function () {
                    deferred.resolve({
                        data: 'from server',
                        emulation: true,
                    });
                }, 5 * 1000);
                return deferred.promise;
            }
        };
    });
