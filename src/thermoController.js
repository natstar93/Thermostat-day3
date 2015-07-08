$(document).ready(function() {
  
  var thermostat = new Thermostat;
  showTemperature();

  function showTemperature() { 
    $("#temperature").html(thermostat.temperature)
    $("#temperature").removeClass('cool warm hot').addClass(thermostat.changeColor());  
  }

  $("#up").click(function() {
    thermostat.increase();
    showTemperature();
  });

  $("#down").click(function(){
    thermostat.decrease();
    showTemperature();
  });

  $("#powersave").click(function() {
    thermostat.powerSaveToggle();
  });
  
  $("#reset").click(function() {
    thermostat.resetTemperature();
    showTemperature();
  });

});


