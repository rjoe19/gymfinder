// var gyms = [
//   {"Name":"Les Mills Extreme", "Address": "52-70 Taranaki St", "Ph":"04-384 8898", "CasualPrice": "$15.00"},
//   {"Name":"Snap Fitness", "Address": "49-61 Tory St", "Ph":"04-802 5920", "CasualPrice": "$15.00"},
//   {"Name":"Jetts Fitness", "Address": "49 Cuba St", "Ph":"04-212 4909", "CasualPrice": "$15.00"},
//   {"Name":"City Fitness Thorndon", "Address": "75 Thorndon Quay", "Ph":"04-499 4488", "CasualPrice": "$15.00"},
//   {"Name":"Club Kelburn", "Address": "65 Salamanca Rd", "Ph":"04-472 9299", "CasualPrice": "$15.00"}
// ]
//
//
//
// var names = gyms.map(function(gym) {
//   return gym.Name + ", "+ gym.Address + ", "+ gym.Ph + ", "+ gym.CasualPrice
// })
//
// console.log(names)
alert('watchify working')
var $ = require('jquery')
var fs = require('fs')


// var extractJson = fs.readFile(__dirname + './data/db.json', 'utf-8')
// console.log(extractJson)


//browerify youtube tutorial
// var button = $('<button/>').html('click me').on('click', function () {
//   alert('hi')
// })
// $('body').append(button)




  // $("#info-wgtn").html(JSON.stringify(data.Gyms.Wellington))

//pseudocode....
// 1) pull in db.json ---->fs.readFile done. see server.js fs.readfile
//2) extract info from db.json out of the object.....then finally out of array

// 3) display result of that inside a pretty div --->append










$( document ).ready(function() {
//wellington





  $("#button-wgtn").click(function(){
      $.get("/gym-wgtn", function(data, status){
      $("#info-wgtn").append("<p>fake data</p>")
        console.log("wellington working", data)
      });
  });

  auckland

  $("#button-akl").click(function(){
      $.get("/gym-akl", function(data, status){
        $("#info-akl").append("<p>fake data</p>")
      console.log("auckland working", data)
      });
  });




  //christchurch
  $("#button-chch").click(function(){
      $.get("/gym-chch", function(data, status){
          console.log("christchurch working",data)
      });
  });


//random motivational button

  $("#randomButton").click(function() {
      $.get("randomQuote", function(data, status) {
          $("#quoteOutput").append("<p>fake data</p>")
        console.log("button hit", data)

  })



});
