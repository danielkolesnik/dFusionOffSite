
'use strict';

angular

    .module('app')

    .factory('Testimonial', function() {
        /**
         * Factory of technologies.
         * @param {obj} testimonial Object from incomeTestimonials.
         * @returns {void}.
         */
        function Testimonial(testimonial) {
            angular.extend(this, testimonial);
        }

        return Testimonial;
    });
