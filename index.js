var express = require("express");
var younameitvpn = express();



younameitvpn.use(express.static('public'));
younameitvpn.use('/css', express.static(__dirname + '/public/css'));
younameitvpn.use('/js', express.static(__dirname + '/public/js'));
younameitvpn.use('/images', express.static(__dirname + '/public/images'));

var server = younameitvpn.listen(8080, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});
younameitvpn.get("/", (req, res) => {
   res.sendFile(__dirname + '/index.html');
});
