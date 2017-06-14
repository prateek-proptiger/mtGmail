'use strict';

app.factory('TypeAheadService', ['ApiConfig', function(ApiConfig) {
    
    var TypeAheadService = {};
    
    TypeAheadService.fetchResults = function(query) {
        var api = ApiConfig.typeAheadApi(query).url;
        return ApiService.get(api);
    };

    return TypeAheadService;
}]);