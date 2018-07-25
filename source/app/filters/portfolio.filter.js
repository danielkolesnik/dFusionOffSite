
'use strict';

angular
// as a deep for root module
    .module('layout.portfolio')
    // filter injector name
    .filter('projectsFilter', function () {
        return function(projects, filterBy) {
            var filteredProjects  = [];
            var prj;
            switch(filterBy) {
            case 'web':
                for(prj in projects){
                    if(projects[prj].tags.indexOf('web') !== -1) {
                        filteredProjects.push(projects[prj]);
                    }
                }
                break;

            case 'mobile':
                for(prj in projects){
                    if(projects[prj].tags.indexOf('mobile') !== -1) {
                        filteredProjects.push(projects[prj]);
                    }
                }
                break;

            default:
                filteredProjects = projects;
                break;
            }
            return filteredProjects;
        };
    });
