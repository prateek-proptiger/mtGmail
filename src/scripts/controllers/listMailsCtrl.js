'use strict';

app.controller('ListMailsCtrl', ['$scope', '$rootScope', 'MailService', function($scope, $rootScope, MailService) {

    var fetchSelectedIds = function() {
        var selectedIds = [];
        $scope.mails.forEach(function(mail) {
            if (mail.selected && mail.id) {
                selectedIds.push(mail.id);
            }
        });
        return selectedIds;
    };

    var selectAllMails = function() {
        $scope.mails.forEach(function(mail) {
            mail.selected = true;
        });
    };

    var markAsRead = function() {
        var selectedIds = fetchSelectedIds();
        MailService.markAsRead(selectedIds).then(function() {
            marksMailsRead(selectedIds);
            // notification: deleted successfully
        }, function() {
            // notification: error deleting mails
        });
    };

    var deleteSelected = function() {
        var selectedIds = fetchSelectedIds();
        MailService.deleteMails(selectedIds).then(function() {
            removeMailsFromUI(selectedIds);
            // notification: deleted successfully
        }, function() {
            // notification: error deleting mails
        });
    };

    var fetchUserEmails = function() {
        // Show notification or page level loader
        MailService.fetchUserEmails().then(function(response) {
            // Parse mails data here
            $scope.mails = response;
        }, function(error) {
            // Let mails remain as they were
        });
    };

    var setDefault = function() {
        $scope.mails = [];
    };

    var initialise = function() {
        setDefault();
        fetchUserEmails();
    };

    initialise();

    $rootScope.$on('selectAll', function() {
        selectAllMails();
    });

    $rootScope.$on('refresh', function() {
        fetchUserEmails();
    });

    $rootScope.$on('delete', function() {
        deleteSelected();
    });

}]);