var express = require('express');
var path = require('path');
var app = express();
var fs = require('fs');
var exphbs = require('express3-handlebars');
  app.engine('handlebars',
      exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');
// Define the port to run on
app.set('port', 3000);

//deliver files directly to the browser
app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});

app.get('/', function (req, res) {
  res.render('index')
})

//serve get requests for gyms --->route
app.get('/gym-wgtn', function (req, res) {
    fs.readFile('./data/db.json', 'utf8', function (err, data) {
      console.log("got gym wgtn")
    if (err) throw err;
    res.json(JSON.stringify(data))
  })
})

app.get('/gym-akl', function (req, res) {
    fs.readFile('./data/db.json', 'utf8', function (err, data) {
      console.log("got gym akl")
    if (err) throw err;
    res.json(JSON.stringify(data))
  })
})

app.get('/gym-chch', function (req, res) {
    fs.readFile('./data/db.json', 'utf8', function (err, data) {
      console.log("got gym chch")
    if (err) throw err;
    res.json(JSON.stringify(data))
  })
})


app.get('/randomQuote', function (req, res) {
    fs.readFile('.public/quote-generator/main.js', 'utf8', function (err, data) {
      console.log("got random quote")
    if (err) throw err;
      res.send(main.js)
  })
})
