const express = require("express");
const dotenv = require('dotenv').config();
const mysql = require('mysql');
const fs = require('fs');
const ejs = require('ejs');

const younameitvpn = express();
younameitvpn.set('view-engine', 'ejs');
younameitvpn.use(express.urlencoded({ extended: false }))
younameitvpn.use(express.static('public'));

const server = younameitvpn.listen(8080, function(){
    var port = server.address().port;
    console.log("Server started at http://192.168.0.43:%s", port);
    console.log("Server started at http://24.55.146.24:%s", port);
});

// Server file Locations
const startSetupUp = require('./JS/setup.js'); //first
const startSale = require('./JS/sale.js'); // type=1
const startS2S = require('./JS/site2site.js'); // type=2
const env = "./.env" //most important

//simple logic to for checking what is going on after server startup
if (process.env.setup_complete === '1') {
  if (process.env.type === "1") {
    console.log('For Sale');
  }else if (process.env.type === "2") {
    console.log('site2site');
  }else {
    console.log('err');
  }
} else {
  console.log('Setup init');
  younameitvpn.get('/', (req, res) => {
    res.render(__dirname + '/public/setupindex.ejs')
  })
}
