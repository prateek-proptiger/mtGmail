'use strict';

app.directive('mtSideNav', ['$location', 'ControlsService', function($location, ControlsService) {
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
                $location.hash(label);
                scope.selectedLabel = label;
            };

            var initialise = function() {
                var hash = $location.hash();
                var definedLabels = ['inbox, starred', 'sent'];
                var label = (!hash || (hash && definedLabels.indexOf(hash) == -1)) ? 'inbox' : hash;
                updateLabel(label);
            };

            initialise();
        }
    }
}]);