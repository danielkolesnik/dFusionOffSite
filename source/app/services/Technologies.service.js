
'use strict';

angular

    .module('app')

    .service('TechnologiesService', function($timeout, $q, TechnologyModel, incomeTechnologies) {
        // var technologiesList = [];

        return {
            // just takes array from constant and wraps all items from array in model by constructor
            // returns promise which contain array of all technologies(on success)
            getTechList: function () {
                var deferred = $q.defer();
                var technologiesList = [];

                $timeout(function() {

                    for(var i in incomeTechnologies) {
                        technologiesList.push(new TechnologyModel(incomeTechnologies[i]));
                    }
                    deferred.resolve( technologiesList );

                    // deferred.reject('An Error with taking data from server occurred.');

                }, 0.5 * 1000);

                return deferred.promise;
            }
        };
    });
