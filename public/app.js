
$( document ).ready(function() {
//wellington
  $("#button-wgtn").click(function(){
      $.get("demo_test.asp", function(data, status){
          alert("Data: " + data + "\nStatus: " + status);
      });
  });

  //auckland

  $("#button-akl").click(function(){
      $.get("demo_test.asp", function(data, status){
          alert("Data: " + data + "\nStatus: " + status);
      });
  });




  //christchurch
  $("#button-chch").click(function(){
      $.get("/gym-chch", function(data, status){
          alert("Data: " + data + "\nStatus: " + status);
      });
  });

});
