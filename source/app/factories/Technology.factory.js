
'use strict';

angular

    .module('app')

    .factory('TechnologyModel', function() {
        /**
         * Factory of technologies.
         * @param {obj} technology Object from incomingTechnologies.
         * @returns {void}.
         */
        function Technology(technology) {
            angular.extend(this, technology);
        }

        return Technology;
    });
