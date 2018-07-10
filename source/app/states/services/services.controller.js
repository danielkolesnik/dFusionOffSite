
'use strict';

angular

    .module('layout.services')

    .controller('servicesController', function ( $scope, tabs ) {

        $scope.tabs = [
            { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
            { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true }
        ];

        $scope.model = {
            name: 'Tabs'
        };

        // $scope.techTabs = {
        //     // languages : [Java, C#, JavaScript, Groovy, Objective-C, PHP, PL/SQL, VBA, PowerShell, ActionScript 3, xHTML/HTML5],
        // };
        // NOTE "vm" means a "visual model" the data which will use by view rendering
        var vm = $scope.vm = {

        };
        // no-unused-vars =)
        vm;

    });
