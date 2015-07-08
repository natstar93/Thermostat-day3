$(document).ready(function() {
$('#temperature').hover(function() {
$(this).css('font-size', '100px')
});

  $.ajax({url: "http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric", success: function(result){
    $("#currentTemp").html(result.main.temp + '°C');
        }
    });

});
