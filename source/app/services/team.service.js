
'use strict';

angular

    .module('app')

    .service('teamService', function ($timeout, $q, teammateFactory, incomeTeam) {
        var teamList = [];

        return {
            getTeamList: function() {
                var deferred = $q.defer();

                $timeout(function(){
                    var dataCame = true,
                        data = incomeTeam;

                    if(dataCame) {
                        for(var i in data) {
                            teamList.push(new teammateFactory(data[i]));
                        }
                        deferred.resolve( teamList );
                    } else {
                        deferred.reject('An Error with taking data from server occurred.');
                    }
                }, 0.5 * 1000);

                return deferred.promise;
            }
        }
    });
