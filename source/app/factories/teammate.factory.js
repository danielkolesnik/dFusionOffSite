
'use strict';

angular

    .module('app')

    .factory('teammateFactory', function() {
        /**
         * Factory of teammates.
         * @param {obj} teammate Object from incomingTeam.
         * @returns {void}.
         */
        function Teammate(teammate) {
            angular.extend(this, teammate);
        }

        return Teammate;
    });
