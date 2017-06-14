'use strict';

app.directive('mtMail', function() {
    return {
        restrict: 'EA',
        scope: {
            data: '='
        },
        templateUrl: 'views/directives/mt-mail.html',
        link: function(scope, iElem, iAttrs) {
            
            scope.viewMail = function() {
                // go to route base.view
            };
        }
    }
});