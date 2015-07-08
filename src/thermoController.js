var thermostat = new Thermostat;

showTemperature();

document.getElementById("up").onclick = function() {
  thermostat.increase();
  showTemperature();
};

document.getElementById("down").onclick = function(){
  thermostat.decrease();
  showTemperature();
};

document.getElementById("powersave").onclick = function() {
  if (thermostat.powerSave === true) {
    thermostat.powerSaveOff();
  }
  else {
    thermostat.powerSaveOn();
  };
};

document.getElementById("reset").onclick = function() {
  thermostat.resetTemperature();
  showTemperature();
};

function showTemperature() { 
  document.getElementById("temperature").innerHTML = (thermostat.temperature);
  document.getElementById("temperature").style.color = thermostat.changeColor();
    
}

 

