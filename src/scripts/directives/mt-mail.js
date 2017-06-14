'use strict';

app.directive('mtMail', function() {
    return {
        restrict: 'EA',
        scope: {
            data: '='
        },
        templateUrl: 'views/directives/mt-mail.html',
        link: function(scope, iElem, iAttrs) {

        }
    }
});