
'use strict';

angular

    .module('app')

    .factory('lodash', function($window) {
        return $window._;
    });
