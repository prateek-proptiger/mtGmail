'use strict';

app.directive('mtSearch', [function() {
    return {
        restrict: 'EA',
        scope: {},
        templateUrl: 'views/directives/mt-search.html',
        link: function(scope, iElem, iAttrs) {
            
            scope.fetchResults = function(query) {
                if (!query) {
                    
                    scope.suggestions = [];
                    
                } else {
                    TypeaheadService.fetchResults().then(function(response) {
                        // Parse suggestions here
                        scope.suggestions = response;
                    }, function() {
                        // Let suggestions remain as same before
                    });
                }
            };
        }
    }
}]);