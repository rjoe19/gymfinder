var express = require('express');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', 3000);

//deliver files directly to the browser
app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});

app.get('/gym-chch', function (req, res) {
  console.log('hit gym chch')
})
