'use strict';

app.controller('ListMailsCtrl', ['$scope', '$rootScope', '$location', 'MailService', function($scope, $rootScope, $location, MailService) {

    $rootScope.$on('toggleSelection', function(ev) {
        toggleSelection();
    });
    $rootScope.$on('refresh', function() {
        $scope.page = 1;
        fetchUserEmails();
    });
    $rootScope.$on('delete', function() {
        deleteSelected();
    });
    $rootScope.$on('updateReadValue', function(ev, read) {
        updateReadValue(read);
    });
    $rootScope.$on('updateBasedOnLabel', function() {
        fetchUserEmailsBasedOnLabel();
    });
    $rootScope.$on('nextPage', function(ev, pageIncrement) {
        nextPage(pageIncrement);
    });
    

    /* ACTIONS */
    var selection = false;
    var toggleSelection = function() {
        selection = !selection;
        $scope.data.mails.forEach(function(mail) {
            mail.selected = !!selection;
        });
    };

    var updateReadValue = function(read) {
        var mails = $scope.data.mails;
        var selectedIds = fetchSelectedIds();
        MailService.updateReadValue(selectedIds, read).then(function() {
            for (var i=0, len = mails.length; i<len; i++) {
                var mail = mails[i];
                if (selectedIds.indexOf(mail.id) != -1) {
                    mail.read = read;
                }
            }
        }, function() {});
    };

    var deleteSelected = function() {
        var mails = $scope.data.mails;
        var selectedIds = fetchSelectedIds();
        MailService.deleteMails(selectedIds).then(function() {
            for (var i=0, len = mails.length; i< len; i++) {
                var mail = mails[i];
                if (selectedIds.indexOf(mail.id) != -1) {
                    mails.splice(i, 1);
                    i--; len--;
                }
            }
        }, function() {});
    };

    var nextPage = function(pageIncrement) {
        $scope.page += pageIncrement;
        fetchUserEmailsBasedOnLabel();
    };
    /* END ACTIONS */

    var fetchSelectedIds = function() {
        var selectedIds = [];
        $scope.data.mails.forEach(function(mail) {
            if (mail.selected && mail.id) {
                selectedIds.push(mail.id);
            }
        });
        return selectedIds;
    };

    /* INITIALISATION */
    var fetchUserEmailsBasedOnLabel = function() {
        var label = $location.hash();
        MailService.fetchUserMails(label, $scope.page).then(function(response) {
            $scope.data = response;
            $scope.maxPages = 
            selection = false;
        }, function(error) {});
    };

    var setDefault = function() {
        $scope.page = 1;
        $scope.mails = [];
    };

    var initialise = function() {
        setDefault();
        fetchUserEmailsBasedOnLabel();
    };
    /* END INITIALISATION */

    initialise();

}]);