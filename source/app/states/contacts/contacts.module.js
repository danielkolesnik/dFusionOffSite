
'use strict';

angular

    .module('layout.contacts', [

    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout.contacts', {
            url: '/contacts',
            templateUrl: 'app/states/contacts/contacts.html',
            controller: 'contactsController',
            resolve: {}
        });
    });
