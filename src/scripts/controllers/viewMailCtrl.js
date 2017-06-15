'use strict';

app.controller('ViewMailCtrl', ['$scope', '$stateParams', 'MailService', function($scope, $stateParams, MailService) {

    var fetchMailDetails = function() {
        MailService.fetchMailDetails($scope.mailId).then(function(response) {
            $scope.mailData = response;
        });
    };

    var setDefault = function() {
        $scope.mailId = $stateParams.mailId;
    };

    var initialise = function() {
        setDefault();
        fetchMailDetails();
    };

    initialise();
}]);