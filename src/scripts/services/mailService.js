'use strict';

app.factory('MailService', ['$q', 'DataService', 'ApiService', function($q, DataService, ApiService) {

    var MailService = {};
    var mails = DataService;

    var filterMails = function(label) {
        return mails.filter(function (mail) {
            return mail.labels.indexOf(label) == -1;
        });
    };

    var computeResponse = function(label, page) {
        var pageSize = 4;
        var filteredMails = filterMails(label);
        var totalCount = filteredMails.length;
        var start = (pageSize * (page - 1)) + 1;
        var end = ((page * pageSize) < totalCount ? (page * pageSize) : totalCount);
        return {
            start: start,
            end: end,
            maxPages: (totalCount / pageSize) + 1,
            totalCount: totalCount,
            mails: filteredMails.slice(start - 1, end)
        }
    };

    MailService.fetchUserMails = function(label, page) {
        var defer = $q.defer();

        defer.resolve(computeResponse(label, page));
        // so that reference of mails is not passed
        return defer.promise;
    };

    MailService.fetchMailDetails = function(mailId) {
        var defer = $q.defer();
        var mail = {};
        for (var i=0, len=mails.length; i< len; i++) {
            if (mails[i].id == mailId) {
                mail = mails[i];
            }
        }
        defer.resolve(mail);
        return defer.promise;
    };

    MailService.deleteMails = function(mailIds) {
        var defer = $q.defer();
        for (var i=0, len=mails.length; i< len; i++) {
            if (mailIds.indexOf(mails[i].id) != -1) {
                mails.splice(i, 1);
                i--; len--;
            }
        }
        defer.resolve();
        return defer.promise;
        // Call Api for the same with Ids
    };

    MailService.updateReadValue = function(mailIds, read) {
        var defer = $q.defer();
        // Equivalent work of API
        for (var i=0, len = mails.length; i< len; i++) {
            var mail = mails[i];
            if (mailIds.indexOf(mail.id) != -1) {
                mail.read = read;
            }
        }

        defer.resolve();
        return defer.promise;
        // Call Api for the same with Ids
    };

    return MailService;
}])