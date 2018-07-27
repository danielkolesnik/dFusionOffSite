
'use strict';

angular

    .module('app')

    .service('TestimonialsService', function($timeout, $q, Testimonial, incomeTestimonials) {
        // var testimonialsList = [];

        return {
            getTestimList: function () {
                var deferred = $q.defer();
                var testimonialsList = [];

                $timeout(function() {

                    for(var i in incomeTestimonials) {
                        testimonialsList.push(new Testimonial(incomeTestimonials[i]));
                    }
                    deferred.resolve( testimonialsList );

                    // deferred.reject('An Error with taking data from server occurred.');

                }, 0.5 * 1000);

                return deferred.promise;
            }
        };
    });
