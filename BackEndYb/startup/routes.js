const express = require('express');
const users = require('../routes/users')
const cors = require('cors');

module.exports = function (app) {
console.log("hello");
    app.use(express.json())
//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
//    app.use(cors());
  //  app.options('*', cors());
    app.use(function (req, res, next) {
         //res.header("Access-Control-Allow-Origin", "*");
         //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        // next();
        res.setHeader('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
      
      //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      
        // Pass to next layer of middleware

////res.header("Access-Control-Allow-Origin", req.headers.origin);
//res.header("Access-Control-Allow-Headers", "x-requested-with, content-type");
//res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
//res.setHeader("Access-Control-Allow-Credentials", "false");
//res.setHeader("Access-Control-Max-Age", "1000000000");

//app.all("/*", function(req, res, next){
  //res.header('Access-Control-Allow-Origin', '*');
  //res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  //res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

        next();
    });
	console.log("hello");
    app.use('/api/users', users);
}

