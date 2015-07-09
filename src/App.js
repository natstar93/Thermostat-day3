$(document).ready(function() {
  
  var thermostat = new Thermostat;
  showTemperature();
  navigator.geolocation.getCurrentPosition(onPositionUpdate);

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
  
  function onPositionUpdate(position) {
   
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    $.ajax({
        url : "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=metric",
        dataType : "jsonp",
        success : function(parsed_json) {
            var location = parsed_json['name'];
            var temp_c = parsed_json['main']['temp'];
            $('#local_temp').html("Current temperature in " + location + " is: " + temp_c + "&deg;C");
        }
    });
  }

  function showTemperature() { 
    $("#temperature").html(thermostat.temperature + '&deg;C')
    $("#temperature").removeClass('cool warm hot').addClass(thermostat.mode());
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


