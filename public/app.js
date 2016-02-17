
$( document ).ready(function() {
//wellington
  $("#button-wgtn").click(function(){
      $.get("/gym-wgtn", function(data, status){
          alert("Data: " + data + "\nStatus: " + status);
      });
  });

  //auckland

  $("#button-akl").click(function(){
      $.get("/gym-akl", function(data, status){
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
