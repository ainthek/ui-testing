define([
    'intern!object',
], function (registerSuite) {
     registerSuite({
        name: 'minimal demo',
        'of getting google': function () {
            return this.remote .get('http://www.google.com');
        }
    });
});