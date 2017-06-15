'use strict';

app.factory('ControlsService', function($rootScope) {

    var ControlsService = {};

    ControlsService.toggleSelection = function() {
        $rootScope.$broadcast('toggleSelection');
    };

    ControlsService.refresh = function() {
        $rootScope.$broadcast('refresh');
    };
    
    ControlsService.updateReadValue = function(read) {
        $rootScope.$broadcast('updateReadValue', read);
    };

    ControlsService.delete = function() {
        $rootScope.$broadcast('delete');
    };

    ControlsService.updateMailsBasedOnLabel = function() {
        $rootScope.$broadcast('updateBasedOnLabel');
    };

    ControlsService.nextPage = function(pageIncrement) {
        $rootScope.$broadcast('nextPage', pageIncrement);
    };

    return ControlsService;
});