
'use strict';

angular

    .module('app')

    .service('projectsService', function($timeout, $q, projectFactory, incomeProjects) {
        var projectList = [];

        return {
            getProjectList: function() {
                var deferred = $q.defer();

                $timeout(function() {
                    var dataCame = true,
                            data = incomeProjects;

                    if(dataCame) {
                        for(var i in incomeProjects) {
                            projectList.push(new projectFactory(data[i]));
                        }
                        deferred.resolve( projectList );
                    } else {
                        deferred.reject('An Error with taking data from server occurred.');
                    }
                }, 0.5 * 1000);

                return deferred.promise;
            }
        };
    });
