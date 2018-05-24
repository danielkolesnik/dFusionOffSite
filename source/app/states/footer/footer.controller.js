
'use strict';

angular

    .module('app')

    .controller('footerController', function ( $scope, $window ) {
        // make correct alias to the original lib of moment.js
        var moment = $window.moment;
        // NOTE "vm" means a "visual model" the data which will use by view rendering
        var vm = $scope.vm = {
            // next year for copyright license
            nextYear: moment().add(1, 'Y').format('YYYY'),
            address: 'Какой то возможно динамический адрес =)',
            mailtoLinks: [
                {
                    name: 'Email',
                    value: 'example@gmail.com',
                },
                {
                    name: 'Дополнительный email',
                    value: 'example-best@gmail.com',
                },
                {
                    name: 'Адрес',
                    value: 'example-last@gmail.com',
                },
            ],
            socials: [{
                name: 'Facebook',
                link: 'config.facebookLink',
                icon: 'fa-facebook',
            }, {
                name: 'Instagram',
                link: 'config.instagramLink',
                icon: 'fa-instagram',
            }, {
                name: 'Twitter',
                link: 'config.twitterLink',
                icon: 'fa-twitter',
            }, {
                name: 'Youtube',
                link: 'config.youtubeLink',
                icon: 'fa-youtube',
            }, {
                name: 'LInkedin',
                link: 'config.linkedinLink',
                icon: 'fa-linkedin',
            }],

        };

        // no-unused-vars =)
        vm;

    });
