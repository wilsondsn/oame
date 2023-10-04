$(function() {


$("#oame-button").click(function(){
  $("#apoyos").removeClass("show");
  $("#programas").removeClass("show");
  $("#glosario").removeClass("show");
});

$("#apoyos-button").click(function(){
  $("#oame").removeClass("show");
  $("#programas").removeClass("show");
  $("#glosario").removeClass("show");
});

$("#programas-button").click(function(){
  $("#apoyos").removeClass("show");
  $("#oame").removeClass("show");
  $("#glosario").removeClass("show");
});

$("#glosario-button").click(function(){
  $("#apoyos").removeClass("show");
  $("#oame").removeClass("show");
  $("#programas").removeClass("show");
});


}); //
