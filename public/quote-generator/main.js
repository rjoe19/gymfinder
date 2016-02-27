// var $ = require('jquery')

var quoteText = [
    "No man is more unhappy than he who never faces adversity.  For he is not permitted to prove himself",
    "Hit the Gym every day for You, not for someone else. That said, make sure your ex sees your results",
    "People need to quit looking for the easy way out and get to work - Dave Tate",
    "There are few things graven in stone.  Except that you have to SQUAT or you're a pussy - Mark Rippetoe",
    "Success comes to those who persevere, not to those who complain and give up. - Jim Wendler",
    "If you're still fat and weak, Saturday and Sunday are not OFF DAYS",
    "Take some accountability and raise your expectations - Jim Wendler",
    "if your friends encourage you to skip your workout, don't wait. Make new friends immediately",
    "To start making progress you have to first stop making excuses",
    "Squats will add slabs of meat onto even the most anemic set of chicken legs, provided you have the guts and fortitude to do the heavy lifting",
    "A strong body makes for a strong person. Challenge yourself, and GROW"
]
// array with 11 items
 // console.log(quoteText[5])


// each time button pressed it will randomly cycle through quotes and show on the screen
// storage for quotes = array (version 2 store in json file)
// version 1.0 client side only,
//version 2.0 client----server side + JSON (storage)


//learning objectives:
// 1) jquery, javascript, 2) jquery event listeners, dom manipulation 3) client-server stuff, diff between purely clientside vs client-server processing
//4) how to write tests, fail them and make them pass


// random generator


// create function that gets random number from 1-10
  var randomItem = Math.floor((quoteText.length * Math.random()))
  // console.log(randomItem)

  randomQuote = quoteText[randomItem]
  //  console.log(randomQuote)



//jquery function w/ click event listener + append results to div id tag
// $(document).ready(function() {
//     $("#randomButton").on("click", function() {
//       console.log("hit random button")
//       $("#quoteOutput").append(randomQuote)
//     })
// })





// // console.log(actual === expected)
// //test that quoteText.length coiunts 11 items in array quoteText






// go through array and randomly choose an index and show that value

//test TDD for this function
// console.log(randomQuote ===

// TEST EXAMPLE BELOW WITH getGreeting FUNCTION AND TESTING OF THAT FUNCTION

//
// function getGreeting (name) {
//   return 'Hello ' + name
// }
//
//
//   var names = [ 'Alice', 'Bob', 'Celia', 'Dan' ]
// var expectedGreetings = [ 'Hello Alice', 'Hello Bob', 'Hello Celia', 'Hello Dan' ]
// var actualGreetings = names.map(getGreeting)
//
// for (var i = 0; i < names.length; i++) {
//   console.log(actualGreetings[i] === expectedGreetings[i])
// }
//TEST that for every index value of array names says 'hello + name' through the loop
