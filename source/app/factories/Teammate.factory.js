
'use strict';

angular

    .module('app')

    .factory('Teammate', function() {
        /**
         * Factory of teammates models.
         * @param {obj} teammate Object from incomingTeam.
         * @returns {void}.
         */
        function Teammate(teammate) {
            angular.extend(this, teammate);
        }

        return Teammate;
    });
