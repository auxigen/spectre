var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

//TODO: blag 

//FUTURE: blah


