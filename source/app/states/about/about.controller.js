
'use strict';

angular

    .module('layout.about')

    .controller('aboutController', function ( $scope, teamService ) {

        var vm = $scope.vm = {

        };

        teamService

            .getTeamList()

            .then(function ( success ) {
                if(success.length !== 0) {
                    var lastGroupNotFull = false;
                    var teamGroups = [];
                    var newGroup = []; // will contain 1, 2 or 3 teammates

                    // is there are any team group which contain less than 3 people
                    if(success.length % 3) {
                        lastGroupNotFull = true;
                    }

                    for(var i in success) {
                        if(newGroup.length < 3) {
                            // add teammate to group
                            newGroup.push(success[i]);
                        }
                        if(newGroup.length === 3) {
                            // add group to teamGroups
                            teamGroups.push(newGroup);
                            // and set it to zero
                            newGroup = [];
                        }
                    }
                    if(lastGroupNotFull) {
                        // there left some people (less than 3) who need to be in not full last group
                        teamGroups.push(newGroup);
                    }

                } else {
                    success = null;
                }
                vm.teamGroups = teamGroups;
            })

            .catch(function ( failReason ) {
                console.warn(failReason);
            });

    });
