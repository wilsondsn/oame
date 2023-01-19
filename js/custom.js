$(function() {


$("#oame-button").click(function(){
  $("#apoyos").removeClass("show");
  $("#programas").removeClass("show");
});

$("#apoyos-button").click(function(){
  $("#oame").removeClass("show");
  $("#programas").removeClass("show");
});

$("#programas-button").click(function(){
  $("#apoyos").removeClass("show");
  $("#oame").removeClass("show");
});



}); //
