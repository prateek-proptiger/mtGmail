'use strict';

app.factory('RouteService', ['$state', '$stateParams', '$location', function($state, $stateParams, $location) {

    var RouteService = {};

    RouteService.getLabel = function() {
        return $stateParams.label;
    };

    RouteService.updateLabel = function(label) {
        $state.go('base.mail', {
            label: label 
        });
    };

    return RouteService;
}]);