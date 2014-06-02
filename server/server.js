var express = require('express');
var app = express();

// this sets the destination file for incoming requests. 
app.use(express.static(__dirname + '/../client/')); 

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
