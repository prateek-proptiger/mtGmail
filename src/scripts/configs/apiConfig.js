'use strict';

app.factory('ApiConfig', function() {
    var ApiConfig = {};

    ApiConfig.typeAheadApi = function(query) {
        return {
            url: '/xhr/typeAhead?query=' + query;
        }
    };

});