 $(document).ready(function() {
  
  var thermostat = new Thermostat;
  showTemperature();

  function showTemperature() { 
    $("#temperature").html(thermostat.temperature);
    $("#temperature").css("color", thermostat.changeColor());  
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
    if (thermostat.powerSave === true) {
      thermostat.powerSaveOff();
    }
    else {
      thermostat.powerSaveOn();
    };
  });
  
  $("#reset").click(function() {
    thermostat.resetTemperature();
    showTemperature();
  });

});


