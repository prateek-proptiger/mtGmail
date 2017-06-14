'use strict';

app.factory('ApiService', ['$http', function($http) {
    
    var ApiService = {};

    ApiService.get = function(url) {
        return url;
    };

    return ApiService;
}]);