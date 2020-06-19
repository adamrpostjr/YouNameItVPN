const express = require("express");
const younameitvpn = express();


younameitvpn.use(express.static('public'));


const server = younameitvpn.listen(8080, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});
const login = __dirname + '/public/pages/index.html'
const dashboard = __dirname + '/public/pages/dashboard.html'
const admin = __dirname + '/public/pages/admin.html'


// login
younameitvpn.get("/", (req, res) => {
  res.sendFile(login)
});
// Dashboard
younameitvpn.get("/dashboard", (req, res) => {
  // res.render(dashboard, { freeMem : fmem });
  res.sendFile(dashboard);
});
