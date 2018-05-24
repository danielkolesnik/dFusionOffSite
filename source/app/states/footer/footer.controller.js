
'use strict';

angular

    .module('app')

    .controller('footerController', function ( $scope ) {

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

    });
