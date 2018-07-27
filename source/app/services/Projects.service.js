
'use strict';

angular

    .module('app')

    .service('ProjectsService', function($timeout, $q, Project, incomeProjects) {
        // var projectList = [];

        return {
            getProjectList: function() {
                var deferred = $q.defer();
                var projectList = [];

                $timeout(function() {

                    for(var i in incomeProjects) {
                        projectList.push(new Project(incomeProjects[i]));
                    }
                    deferred.resolve( projectList );

                    // deferred.reject('An Error with taking data from server occurred.');

                }, 0.5 * 1000);

                return deferred.promise;
            }
        };
    });
