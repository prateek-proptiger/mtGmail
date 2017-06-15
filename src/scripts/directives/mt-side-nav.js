'use strict';

app.directive('mtSideNav', ['$location', '$stateParams', 'RouteService', 'ControlsService', function($location, $stateParams, RouteService, ControlsService) {
    return {
        restrict: 'EA',
        scope: {},
        templateUrl: 'views/directives/mt-side-nav.html',
        link: function(scope, iElem, iAttrs) {

            scope.updateMailResults = function(ev) {
                var target = event.target;
                var label = target.dataset.label;
                updateLabel(label);
                ControlsService.updateMailsBasedOnLabel();
            };

            var updateLabel = function(label) {
                scope.selectedLabel = label;
                RouteService.updateLabel(label);
            };

            var initialise = function() {
                var label = RouteService.getLabel();
                scope.selectedLabel = label;
            };

            initialise();
        }
    }
}]);