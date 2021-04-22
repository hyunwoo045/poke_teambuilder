const fs = require('fs');
const qs = require('querystring');
const express = require('express');
const app = express();
const session = require('express-session');
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

const server = app.listen(3000, function() {
    console.log("Express server has started on port 3000");
});
app.use(express.static('public'));
app.use(express.static('dist'));
app.use(session({
    secret: '!@#$$#@!',
    resave: false,
    saveUninitialized: true
}));
var router = require('./router/main.js')(app, fs, qs);