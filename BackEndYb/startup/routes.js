const express = require('express');
const users = require('../routes/users')

module.exports = function (app) {
app.use(express.json())
    app.all("/*", function(req, res, next){
       res.header('Access-Control-Allow-Origin', '*');
       res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
       res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
        next();
    });
    app.use('/api/users', users);
}

