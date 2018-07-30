
'use strict';

angular

    .module('app')

    .service('TeammatesService', function ($timeout, $q, TeammateModel, incomeTeam) {
        // var teamList = [];

        return {
            // just takes array from constant and wraps all items from array in model by constructor
            // returns promise which contain array of all teammates(on success)
            getTeamList: function() {
                var deferred = $q.defer();
                var teamList = [];

                $timeout(function() {

                    for(var i in incomeTeam) {
                        teamList.push(new TeammateModel(incomeTeam[i]));
                    }
                    deferred.resolve( teamList );

                    // deferred.reject('An Error with taking data from server occurred.');

                }, 0.5 * 1000);

                return deferred.promise;
            }
        };
    });
