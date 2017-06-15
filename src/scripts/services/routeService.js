'use strict';

app.factory('RouteService', ['$stateParams', '$location', function($stateParams, $location) {

    var RouteService = {};

    RouteService.getLabel = function() {
        return $stateParams.label;
    };

    RouteService.updateLabel = function(label) {
        return $location.path('/mail/' + label);
    };

    return RouteService;
}]);