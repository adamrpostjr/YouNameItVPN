const express = require("express");
const dotenv = require('dotenv').config();
const mysql = require('mysql');
const fs = require('fs');
const ejs = require('ejs');

//env file Location
const env = "./../.env"

//page Locations
const setupPage = __dirname + '/Pages/setupindex.ejs'

function firstRun() {
  try {
    if (fs.existsSync(env)) {
      console.log('we need to do some checks to pick up where we left off');
    }else {
      fs.writeFile(env,'setup_complete=0')
    }
  } catch(err) {
    console.error(err)
  }
}
