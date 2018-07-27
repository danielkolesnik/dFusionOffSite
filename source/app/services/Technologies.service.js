
'use strict';

angular

    .module('app')

    .service('TechnologiesService', function($timeout, $q, Technology, incomeTechnologies) {
        // var technologiesList = [];

        return {
            getTechList: function () {
                var deferred = $q.defer();
                var technologiesList = [];

                $timeout(function() {

                    for(var i in incomeTechnologies) {
                        technologiesList.push(new Technology(incomeTechnologies[i]));
                    }
                    deferred.resolve( technologiesList );

                    // deferred.reject('An Error with taking data from server occurred.');

                }, 0.5 * 1000);

                return deferred.promise;
            }
        };
    });
