$(document).ready(function() {
  
  var thermostat = new Thermostat;
  showTemperature();

  $.ajax({url: "http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric", success: function(result){
    $("#currentTemp").html(result.main.temp + '°C');
    $("#city").html(result.name);
  }});
 

  $('#cities').change(function(){
    var link = 'http://api.openweathermap.org/data/2.5/find?q=' + this.value + '&units=metric';
    $.ajax({url: link, success: function(result){
      $("#city").html(result.list[0].name);
      $("#currentTemp").html(result.list[0].main.temp + '°C');
    }});
  });


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
    showTemperature();
  });
  
  $("#reset").click(function() {
    thermostat.resetTemperature();
    showTemperature();
  });

});


