
'use strict';

angular

    .module('app')

    .service('TestimonialsService', function($timeout, $q, TestimonialModel, incomeTestimonials) {
        // var testimonialsList = [];

        return {
            // just takes array from constant and wraps all items from array in model by constructor
            // returns promise which contain array of all testimonials(on success)
            getTestimList: function () {
                var deferred = $q.defer();
                var testimonialsList = [];

                $timeout(function() {

                    for(var i in incomeTestimonials) {
                        testimonialsList.push(new TestimonialModel(incomeTestimonials[i]));
                    }
                    deferred.resolve( testimonialsList );

                    // deferred.reject('An Error with taking data from server occurred.');

                }, 0.5 * 1000);

                return deferred.promise;
            }
        };
    });
