
'use strict';

angular

    .module('layout.home')

    .controller('homeController', function ( $scope, ApiService ) {

        // NOTE "vm" means a "visual model" the data which will use by view rendering
        var vm = $scope.vm = {

            data: null,
        };

        $scope.myInterval = 0;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        var slides = $scope.slides = [
            {
                text: 'We have been working with the dFusionTech team for a number of years now and can recommend them highly enough. Their insane knowledge, thoroughness and professional application is a joy to work with. What they don\'t know about tech, isn\'t worth knowing.',
                author: 'Toby Martin, worldtv.com,',
                post: 'Head of operations',
                id: 0
            },
            {
                text: 'We at ScoopDragon Publishing Limited have used dFusion as our exclusive development team for the past 8 years. Over that period of time they have shown themselves to be highly technically astute, always delivering projects in a timely fashion as well going the extra mile to provide other options and suggest related technologies that might enhance our work. We anticipate our working relationship continuing with dFusion for many years to come and could not give their developers a higher recommendation.',
                author: 'ASHLEY BALCHIN, SCOOPDRAGON PUBLISHING LIMITED,',
                post: 'Director',
                id: 1
            },
            {
                text: 'I’ve worked with Eugene and his team since they first launched their programming outsourcing services in 2007 (we were their first customer!), and for 3 years before that while working for another company. Eugene is a brilliant programmer and systems architect (and a great guy!) and has built an enviable team of developers and coders around him. With other companies the programmers tend to come and go over time, there is very little consistency. Eugene’s team has changed very little over the years and that is something to be treasured.',
                author: 'ALEX KLIVE, AFFINITY MEDIA GROUP,',
                post: 'Owner',
                id: 2
            },
            {
                text: 'dFusionTech has been amazing to work with. They have experts in their areas that really help and think outside the box. Very hardworking and definitely will be working with them in the future!',
                author: 'KRISH ARVAPALLY, UNREEL ENTERTAINMENT LLC',
                post: '',
                id: 3
            },
            {
                text: 'I had a pleasure working with dFusionTech team for two years on one of the most complex projects. During that time on many occasions the team showed their brilliant skills in solving technical problems as well as amazing work ethics and spirit. dFusionTech members are willing to face any challenge regardless to technology or complexity.',
                author: 'ELKHAN SHABANOV',
                post: '',
                id: 4
            },
            {
                text: 'dFusionTech dug into our platform and delivered a valuable enhancement on time and on budget without any previous knowledge of our platform. It\'s great to see people that are good at their job and seem to like it.',
                author: 'BIGGSB INC.',
                post: '',
                id: 5
            }
        ];
        var currIndex = 0;

        ApiService.getData()
            .then(function ( success ) {
                console.info('ApiService.getData', success);
                vm.data = success;
            })
            .catch(function ( error ) {
                console.error('ApiService.getData', error);
            });

    });

/*
  // ORIGINAL COMPONENT
  angular.module('ui.bootstrap.demo').controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: '//unsplash.it/' + newWidth + '/300',
      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
      id: currIndex++
    });
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }

  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }

  // http://stackoverflow.com/questions/962802#962890
  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }
});

 */
