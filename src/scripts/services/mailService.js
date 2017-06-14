app.factory('MailService', ['$q', 'ApiService', function($q, ApiService) {

    var MailService = {};

    var mails = [{
        id: 1,
        selected: false,
        starred: false,
        read: false,
        senderLabel: 'Prateek',
        sender: 'prateeksehgal.iitbhu@gmail.com',
        receipints: {
            cc: ['abc@gmail.com'],
            bcc: ['xyz@gmail.com']
        },
        category: 'Primary',
        heading: 'Gmail App Demo',
        content: 'Hello World'
    }, {
        id: 2,
        selected: false,
        starred: false,
        read: true,
        senderLabel: 'Prateek',
        sender: 'prateeksehgal.iitbhu@gmail.com',
        receipints: {
            cc: ['abc@gmail.com'],
            bcc: ['xyz@gmail.com']
        },
        category: 'Primary',
        heading: 'Gmail App Demo',
        content: 'Hello World'
    }, {
        id: 3,
        selected: false,
        starred: false,
        read: false,
        senderLabel: 'Prateek',
        sender: 'prateeksehgal.iitbhu@gmail.com',
        receipints: {
            cc: ['abc@gmail.com'],
            bcc: ['xyz@gmail.com']
        },
        category: 'Primary',
        heading: 'Gmail App Demo',
        content: 'Hello World'
    }];

    MailService.fetchUserEmails = function() {
        var defer = $q.defer();
        defer.resolve(mails);
        return defer.promise;
    };

    MailService.fetchEmailFromId = function(id) {
        var defer = $q.defer();
        var mail = {};
        for (var i=0, len=mails.length; i< len; i++) {
            if (mails[i].id == id) {
                mail = mails[i];
            }
        }
        defer.resolve(mail);
        return defer.promise;
    };

    MailService.deleteMails = function(ids) {
        var defer = $q.defer();
        var mail = {};
        for (var i=0, len=mails.length; i< len; i++) {
            if (mails[i].id == id) {
                mail = mails[i];
            }
        }
        defer.resolve(mail);
        return defer.promise;
    };

    return MailService;
}])