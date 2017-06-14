'use strict';

app.directive('mtSideNav', ['ControlsService', function(ControlsService) {
    return {
        restrict: 'EA',
        scope: {},
        templateUrl: 'views/directives/mt-side-nav.html',
        link: function(scope, iElem, iAttrs) {

            scope.updateMailResults = function(ev) {
                var target = event.target;
                var label = target.dataset.label;
                ControlsService.updateMailsBasedOnLabel(label);
            }
        }
    }
}]);