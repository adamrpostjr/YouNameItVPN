const express = require("express");
const dotenv = require('dotenv').config();
const mysql = require('mysql');
const fs = require('fs');
const ejs = require('ejs');

//env file Location
const env = "./../.env"

//page Locations
const setupPage = __dirname + '/Pages/setupindex.ejs'
