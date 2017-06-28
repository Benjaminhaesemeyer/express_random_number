

var express = require('express')

//links to randomNumber.js
var randomNum = require('./randomNumber.js');
var app = express();

//route to randomNum file
app.get('/randomNumber', function(request, response) {
  //creating variables to send our random numbers
  var outcomeOne = randomNum(100, 100000)
  var outcomeTwo = randomNum(100, 100000)
  console.log('request for a random number! ');
  response.send({randomNumOne: outcomeOne,randomNumTwo: outcomeTwo});
});


//start server up
app.listen(5000, function() {
console.log('listening on the port 5000');
});
