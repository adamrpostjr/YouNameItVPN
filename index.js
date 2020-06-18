const express = require("express");


const younameitvpn = express();


younameitvpn.use(express.static('public'));
younameitvpn.use('/pages', express.static(__dirname + '/public/pages'));
younameitvpn.use('/css', express.static(__dirname + '/public/css'));
younameitvpn.use('/js', express.static(__dirname + '/public/js'));
younameitvpn.use('/images', express.static(__dirname + '/public/images'));

const server = younameitvpn.listen(8080, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});
const login = __dirname + '/public/pages/index.html'
const dashboard = __dirname + '/public/pages/dashboard.html'



// login
younameitvpn.get("/", (req, res) => {
  res.render(login)
});
// Dashboard
younameitvpn.get("/dashboard", (req, res) => {
  // res.render(dashboard, { freeMem : fmem });
  res.render(dashboard);
});
