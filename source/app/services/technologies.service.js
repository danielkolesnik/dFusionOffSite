
'use strict';

angular

    .module('app')

    .service('technologiesService', function($timeout, $q, technologyFactory, incomeTechnologies) {
        var technologiesList = [];

        return {
            getTechList: function () {
                technologiesList = [];
                var deferred = $q.defer();

                $timeout(function() {
                    var dataCame = true,
                        data = incomeTechnologies;

                    if(dataCame) {
                        for(var i in data) {
                            technologiesList.push(new technologyFactory(data[i]));
                        }
                        deferred.resolve( technologiesList );
                    } else {
                        deferred.reject('An Error with taking data from server occurred.');
                    }
                }, 0.5 * 1000);

                return deferred.promise;
            }
        };
    });
