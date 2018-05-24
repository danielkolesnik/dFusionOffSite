
angular

    .module('app')

    .constant('tabs', [
        {
            order: 0,
            title: 'Список 1',
            description: 'Дополнительная информация о списке 1.',
            services: [
                {
                    name: 'Работа не волк',
                    price: 'False'
                },
                {
                    name: 'В лес не убежит',
                    price: 'False'
                },
                {
                    name: '---',
                    price: '---'
                },
                {
                    name: 'Если я хочу писать код',
                    price: 'True'
                },
                {
                    name: 'То должен практиковаться',
                    price: 'True'
                },
                {
                    name: '---',
                    price: '---'
                },
                {
                    name: 'Javascript супер язык програмирования',
                    price: '=)'
                },
                {
                    name: '---',
                    price: '---'
                },
                {
                    name: 'HTML + CSS + JS',
                    price: 'Front-end'
                },
            ]
        },
        {
            order: 1,
            title: 'Технологии',
            description: 'В этом проекте используются следующие технологии.(Знаете их)',
            services: [
                {
                    name: 'Javascript',
                    price: 'True'
                },
                {
                    name: 'HTML 5',
                    price: 'True'
                },
                {
                    name: 'CSS 3',
                    price: 'True'
                },
                {
                    name: 'Git',
                    price: 'True/False'
                },
                {
                    name: 'Less',
                    price: 'True/False'
                },
                {
                    name: 'npm',
                    price: 'True/False'
                },
                {
                    name: 'bower',
                    price: 'True/False'
                },
                {
                    name: 'Node.js',
                    price: 'False'
                },
                {
                    name: 'Gulp',
                    price: 'False'
                },
            ]
        },
        {
            order: 2,
            title: 'Библиотеки',
            description: 'В этом проекте используются следующие Front-end библиотеки.(Версии)',
            services: [
                {
                    name: 'Angular JS',
                    price: '=1.5.8'
                },
                {
                    name: 'Lodash',
                    price: '^4.15.0'
                },
                {
                    name: 'JQuery',
                    price: '^3.1.0'
                },
                {
                    name: 'Moment обернутая angular-moment',
                    price: '^2.18.1/^1.0.1'
                },
                {
                    name: 'Bootstrap 3 обернутая angular-bootstrap',
                    price: '3.3.7/^2.1.3'
                },
                {
                    name: 'Font Awesome',
                    price: '^4.6.3'
                },
                {
                    name: 'UI Router (Angular JS)',
                    price: '^0.4.2'
                },
                {
                    name: 'Toastr (Angular JS)',
                    price: '^2.1.1'
                },
                {
                    name: 's-is (My =P)',
                    price: '^1.4.15'
                },
            ]
        }
    ]);
