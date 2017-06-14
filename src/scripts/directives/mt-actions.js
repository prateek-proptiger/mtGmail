'use strict';

app.directive('mtActions', ['ControlsService', function(ControlsService) {
    return {
        restrict: 'EA',
        scope: {},
        templateUrl: 'views/directives/mt-actions.html',
        link: function(scope, iElem, iAttrs) {
            
            scope.selectAll = function() {
                ControlsService.selectAll();
            };
            scope.refresh = function() {
                ControlsService.refresh();
            };
            scope.markAsRead = function() {
                ControlsService.markAsRead();
            };
            scope.delete = function() {
                ControlsService.delete();
            }
            
        }
    }
}]);