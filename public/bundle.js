(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
(function (__dirname){
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
var fs = require('fs')

var extractJson = fs.readFileSync(__dirname + './data/db.json', 'utf-8')
console.log(extractJson)





$( document ).ready(function() {
//wellington
  $("#button-wgtn").click(function(){
      $.get("/gym-wgtn", function(data, status){


        //  $("#info-wgtn").html(JSON.stringify(data.Gyms.Wellington))

        //pseudocode....
        // 1) pull in db.json ---->fs.readFile
        //2) extract info from db.json out of the object.....then finally out of array

        // 3) display result of that inside a pretty div




        console.log("wellington working", data)

      });
  });

  //auckland

  $("#button-akl").click(function(){
      $.get("/gym-akl", function(data, status){
          console.log("auckland working")
      });
  });




  //christchurch
  $("#button-chch").click(function(){
      $.get("/gym-chch", function(data, status){
          console.log("christchurch working")
      });
  });

});

}).call(this,"/public")
},{"fs":1}]},{},[2]);
