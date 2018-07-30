
'use strict';

angular

    .module('app')

    .service('ProjectsService', function($timeout, $q, ProjectModel, incomeProjects) {
        // var projectList = [];

        return {
            // just takes array from constant and wraps all items from array in model by constructor
            // returns promise which contain array of all projects(on success)
            getProjectList: function() {
                var deferred = $q.defer();
                var projectList = [];

                $timeout(function() {

                    for(var i in incomeProjects) {
                        projectList.push(new ProjectModel(incomeProjects[i]));
                    }
                    deferred.resolve( projectList );

                    // deferred.reject('An Error with taking data from server occurred.');

                }, 0.5 * 1000);

                return deferred.promise;
            }
        };
    });
