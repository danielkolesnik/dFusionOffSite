
'use strict';

angular

    .module('app')

    .service('TeamService', function ($timeout, $q, Teammate, incomeTeam) {
        // var teamList = [];

        return {
            getTeamList: function() {
                var deferred = $q.defer();
                var teamList = [];

                $timeout(function() {

                    for(var i in incomeTeam) {
                        teamList.push(new Teammate(incomeTeam[i]));
                    }
                    deferred.resolve( teamList );

                    // deferred.reject('An Error with taking data from server occurred.');

                }, 0.5 * 1000);

                return deferred.promise;
            }
        };
    });
