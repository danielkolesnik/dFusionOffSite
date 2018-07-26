
'use strict';

angular

    .module('app')

    .factory('projectFactory', function() {
        /**
         * Factory of products.
         * @param {obj} project Object from incomingProjects.
         * @returns {void}.
         */
        function Project(project) {
            // this.id = project.id;
            // this.name = project.name;
            // this.description = project.description;
            // this.technologies = project.technologies;
            // this.tags = project.tags;
            // this.previewFirst = project.previewFirst;
            // this.platforms = [];
            // if(project.platforms.length > 0) {
            //     for(var pl in project.platforms) {
            //         this.platforms.push(project.platforms[pl]);
            //     }
            // }
            angular.extend(this, project);
        }

        return Project;
    });
