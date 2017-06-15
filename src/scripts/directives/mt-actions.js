'use strict';

app.directive('mtActions', ['ControlsService', function(ControlsService) {
    return {
        restrict: 'EA',
        scope: {},
        templateUrl: 'views/directives/mt-actions.html',
        link: function(scope, iElem, iAttrs) {
            
            scope.toggleSelection = function() {
                ControlsService.toggleSelection();
            };

            scope.refresh = function() {
                ControlsService.refresh();
            };

            scope.updateReadValue = function(read) {
                ControlsService.updateReadValue(read);
            };

            scope.delete = function() {
                ControlsService.delete();
            }

            scope.nextPage = function(pageIncrement) {
                ControlsService.nextPage(pageIncrement);
            }
            
        }
    }
}]);