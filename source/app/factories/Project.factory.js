
'use strict';

angular

    .module('app')

    .factory('Project', function() {
        /**
         * Factory of products.
         * @param {obj} project Object from incomingProjects.
         * @returns {void}.
         */
        function Project(project) {
            angular.extend(this, project);
        }

        return Project;
    });
