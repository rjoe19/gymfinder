var express = require('express');
var path = require('path');
var app = express();
var exphbs  = require('express-handlebars');
var fs = require('fs');
var request = require('superagent');
var dotenv = require('dotenv')
var Twitter = require('twitter');
var bodyParser = require('body-parser'); //parses the body of the response
var bcrypt = require('bcrypt');
var uuid = require('node-uuid'); //creates unique id for user

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())




// Define the port to run on
app.set('port', 3000);

//  set to handlebars view
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');




//deliver files directly to the browser
app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});

var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './data/auth.sqlite'
  },
  useNullAsDefault: true
})

//serve get requests for gyms --->route
// app.get('/gym-wgtn', function (req, res) {
//     fs.readFile('./data/db.json', 'utf8', function (err, data) {
//       console.log("got gym wgtn")
//     if (err) throw err;
//     res.json(JSON.stringify(data))
//   })
// })

// app.get('/', function (req, res) {
//   res.render('index');
// })

// app.get('/about', function (req, res) {
//   res.render('about');
// })
//
// app.get('/contact', function (req, res) {
//   res.render('contact');
// })


app.get(__dirname + '/gym-akl', function (req, res) {
    fs.readFile('./data/db.json', 'utf8', function (err, data) {
      console.log("got gym akl")
    if (err) throw err;
    var info = JSON.parse(data)
    console.log(res.json(info.Auckland[1]))

  })
})

app.get('/gym-chch', function (req, res) {
    fs.readFile(__dirname + './data/db.json', 'utf8', function (err, data) {
      console.log("got gym chch")
    if (err) throw err;
    res.json(JSON.stringify(data))
  })
})


app.get('/randomQuote', function (req, res) {
    fs.readFile(__dirname + '.public/quote-generator/main.js', 'utf8', function (err, data) {
      console.log("got random quote")
    if (err) throw err;
      res.send(main.js)
  })
})

// authorisation and handlebars stuff below, see repo authorisation

app.get('/', function (req, res) {
  res.render('index', {id: req.session.userId})
})

app.get('/sign-up', function (req, res) {
  res.render('sign-up.handlebars')
})

app.post('/sign-up', urlencodedParser, function (req, res) {
  console.log("this is the req", req.body)
  var password = req.body.password
  console.log("THIS IS THE PASSWORD FROM REQ.BODY", password)
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      var toDb = req.body
      toDb.password_hash = hash //creating new key password_has in todb object
      toDb.id = uuid.v1()
      delete toDb.password
      knex('users').insert(toDb).then( function (resp) {
      })
    })
  });
  req.session.userId = 8
  res.redirect('/')
})

app.get('/sign-in', function (req, res) {
  res.render('sign-in')
})

app.post('/sign-in', urlencodedParser, function (req, res) {
  console.log(req.body)
  var email = req.body.email
  var password = req.body.password
knex('users').where('email', email).then( function (resp) {
  console.log("response from sql lite", resp)
     bcrypt.compare(password, resp[0].password_hash, function(err, resp) {
        if (resp === true) {
           res.redirect('/success')
        }
        else {
    // res == false
         res.render('sign-in', {message: "Login failed, please try again"})
         }
        });
      })
 })

 app.get('/success', function (req, res) {
   res.render('success')
 })











// dotenv.load()
//
// var client = new Twitter({
//   consumer_key: process.env.TWITTER_API_KEY,
//   consumer_secret: process.env.TWITTER_API_SECRET,
//   access_token_key: process.env.TWITTER_ACCESS_TOKEN,
//   access_token_secret: process.env.TWITTER_TOKEN_SECRET
// });
//
// //your twitter search code here
//
// //format client.get(path, params, callback);
// client.get('search/tweets', {q: '#paleo'}, function(error, tweets, response){
//   // console.log(error)
//   console.log(tweets);  // The favorites.
//   console.log(response);  // Raw response object.
// });
