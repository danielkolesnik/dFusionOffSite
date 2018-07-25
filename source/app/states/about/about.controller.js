
'use strict';

angular

    .module('layout.about')

    .controller('aboutController', function ( $scope, teamService ) {

        teamService

            .getTeamList()

            .then(function ( success ) {
                if(success.length !== 0) {
                    ///////////////////////////////////////////////////////////////////////// THERE U SHOULD MADE STUFF FROM NOTEBOOK p.404
                    console.log(success);
                } else {
                    success = null;
                }
            })

            .catch(function ( failReason ) {
                console.warn(failReason);
            });

        var vm = $scope.vm = {

        };
        // no-unused-vars =)
        vm;
    });
