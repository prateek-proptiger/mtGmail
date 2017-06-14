'use strict';

app.factory('ControlsService', function($rootScope) {

    var ControlsService = {};

    ControlsService.selectAll = function() {
        $rootScope.$broadcast('selectAll');
    };

    ControlsService.refresh = function() {
        $rootScope.$broadcast('refresh');
    };
    
    ControlsService.markAsRead = function() {
        $rootScope.$broadcast('markAsRead');
    };

    ControlsService.delete = function() {
        $rootScope.$broadcast('delete');
    };
    return ControlsService;
});