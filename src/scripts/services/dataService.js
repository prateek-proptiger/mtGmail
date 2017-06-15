'use strict';

app.factory('DataService', function() {

    return [{
        id: 1,
        selected: false,
        starred: false,
        read: true,
        senderLabel: 'Prateek_1',
        sender: 'prateeksehgal.1@gmail.com',
        labels: ['inbox', 'starred'],
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
        starred: true,
        read: false,
        senderLabel: 'Prateek_2',
        sender: 'prateeksehgal.2@gmail.com',
        labels: ['inbox', 'starred'],
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
        senderLabel: 'Prateek_3',
        sender: 'prateeksehgal.3@gmail.com',
        labels: ['sent', 'starred'],
        receipints: {
            cc: ['abc@gmail.com'],
            bcc: ['xyz@gmail.com']
        },
        category: 'Primary',
        heading: 'Gmail App Demo',
        content: 'Hello World'
    }, {
        id: 4,
        selected: false,
        starred: false,
        read: false,
        senderLabel: 'Prateek_4',
        sender: 'prateeksehgal.4@gmail.com',
        labels: ['starred'],
        receipints: {
            cc: ['abc@gmail.com'],
            bcc: ['xyz@gmail.com']
        },
        category: 'Primary',
        heading: 'Gmail App Demo',
        content: 'Hello World'
    }, {
        id: 5,
        selected: false,
        starred: false,
        read: false,
        senderLabel: 'Prateek_5',
        sender: 'prateeksehgal.5@gmail.com',
        labels: ['starred'],
        receipints: {
            cc: ['abc@gmail.com'],
            bcc: ['xyz@gmail.com']
        },
        category: 'Primary',
        heading: 'Gmail App Demo',
        content: 'Hello World'
    }, {
        id: 6,
        selected: false,
        starred: true,
        read: true,
        senderLabel: 'Prateek_6',
        sender: 'prateeksehgal.6@gmail.com',
        labels: ['inbox'],
        receipints: {
            cc: ['abc@gmail.com'],
            bcc: ['xyz@gmail.com']
        },
        category: 'Primary',
        heading: 'Gmail App Demo',
        content: 'Hello World'
    }, {
        id: 7,
        selected: false,
        starred: false,
        read: false,
        senderLabel: 'Prateek_7',
        sender: 'prateeksehgal.7@gmail.com',
        labels: ['sent'],
        receipints: {
            cc: ['abc@gmail.com'],
            bcc: ['xyz@gmail.com']
        },
        category: 'Primary',
        heading: 'Gmail App Demo',
        content: 'Hello World'
    }, {
        id: 8,
        selected: false,
        starred: false,
        read: false,
        senderLabel: 'Prateek_8',
        sender: 'prateeksehgal.8@gmail.com',
        labels: ['inbox', 'starred'],
        receipints: {
            cc: ['abc@gmail.com'],
            bcc: ['xyz@gmail.com']
        },
        category: 'Primary',
        heading: 'Gmail App Demo',
        content: 'Hello World'
    }, {
        id: 9,
        selected: false,
        starred: false,
        read: true,
        senderLabel: 'Prateek_9',
        sender: 'prateeksehgal.9@gmail.com',
        labels: ['inbox', 'sent'],
        receipints: {
            cc: ['abc@gmail.com'],
            bcc: ['xyz@gmail.com']
        },
        category: 'Primary',
        heading: 'Gmail App Demo',
        content: 'Hello World'
    }, {
        id: 10,
        selected: false,
        starred: true,
        read: false,
        senderLabel: 'Prateek_10',
        sender: 'prateeksehgal.10@gmail.com',
        labels: ['sent', 'starred'],
        receipints: {
            cc: ['abc@gmail.com'],
            bcc: ['xyz@gmail.com']
        },
        category: 'Primary',
        heading: 'Gmail App Demo',
        content: 'Hello World'
    }]
});