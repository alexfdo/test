var $ = require('jquery');

var App = function() {
    // console.log('App:init');
    $('body').html('using jQuery');
};

var app = new App();
app.get = function() {};

