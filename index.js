const express = require("express");
const dotenv = require('dotenv');
const mysql = require('mysql');
const fs = require('fs');
const ejs = require('ejs');

const younameitvpn = express();

younameitvpn.set('view-engine', 'ejs');
younameitvpn.use(express.static('public'));
const server = younameitvpn.listen(8080, function(){
    var port = server.address().port;
    console.log("Server started at http://192.168.0.43:%s", port);
    console.log("Server started at http://24.55.146.24:%s", port);
});

//Location
const setup = __dirname + '/Setup/Pages/setupindex.ejs'

//env file Location
const env = "./.env"

try {
  if (fs.existsSync(env)) {
    //env exit.. we need to do some checks on then pick up where we left off
  }else {
    //this will be offloaded onto the ./Setup/setup.js
  }
} catch (e) {
  console.log(e);
}
