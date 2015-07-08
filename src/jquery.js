$(document).ready(function() {
  $('#temperature').hover(function() {
    $(this).css('font-size', '100px')
  });

  // $.ajax({url: "http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric", success: function(result){
  //   $("#currentTemp").html(result.main.temp + '°C');
  // }
  // });
  
  // $.ajax({url: "http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric", success: function(result){
  //   $("#currentTemp").html(result.list[0].main.temp + '°C');
  // }
  // });

  $('#cities').change(function(){
  	// alert(this.value);
  	// Make the AJAX request for the data about the particular city
  	var link = 'http://api.openweathermap.org/data/2.5/find?q=' + this.value + '&units=metric';
  	// Extract the temperature and name from the data
  	// Change the HTML of the currentTemp element
  	 

  $.ajax({url: link, success: function(result){
  	 alert(link);
    $("#currentTemp").html(result.list[0].main.temp + '°C');
  }
  });

  });


});

