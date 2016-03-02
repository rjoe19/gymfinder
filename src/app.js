
alert('watchify working')
var $ = require('jquery')
var fs = require('fs')




$( document ).ready(function() {
          //wellington
            // $("#button-wgtn").click(function(){
            //   console.log("welly button working")
            //     $.get("/gym-wgtn", function(data, status){
            //       console.log(Object.keys(JSON.parse(data)))
            //
            //     $("#info-wgtn").append(JSON.stringify(data.Gyms.Wellington))
            //       console.log("wellington working", data.Gyms.Wellington)
            //     });
            // });

            //auckland
            $("#button-akl").click(function(){
              console.log("auckland button working")
                $.get("/gym-akl", function(data, status){
                  console.log("hit gym auckland")
                
                  $("#info-akl").append(JSON.parse(data))
                // console.log("auckland working", data.Gyms.Auckland)
                });
            });
            //christchurch
          //   $("#button-chch").click(function(){
          //     console.log("christchurch button working")
          //       $.get("/gym-chch", function(data, status){
          //         $("#info-chch").append(JSON.stringify(data.Gyms.Christchurch))
          //           console.log("christchurch working", data.Gyms.Christchurch)
          //       });
          //   });
          // //random motivational button
          //   $("#randomButton").click(function() {
          //     console.log("inside random but click")
          //       $.get("/randomQuote", function(data, status) {
          //            $("#quoteOutput").append("<p>dummy data</p>")
          //         console.log("button hit", data)
          //       });
          //     });

});
