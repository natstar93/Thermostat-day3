var thermostat = new Thermostat;


document.getElementById("temperature").innerHTML= (thermostat.temperature);

function showtemp() {
  return thermostat.temperature;
};
function increase() {
  document.getElementById("up") = thermostat.increase();
  return showtemp();
};

document.getElementById("temperature").innerHTML = (thermostat.temperature);

function increaseTemperature() {
  thermostat.increase();
  showTemperature();
};

function decreaseTemperature(){
  thermostat.decrease();
  showTemperature();
};
function changePowerState() {
  if (thermostat.powerSave === true) {
    thermostat.powerSaveOff();
  }
  else {
    thermostat.powerSaveOn();
  };
};

function restartThermostat() {
  thermostat.resetTemperature();
  showTemperature();
};

function showTemperature() { 
  document.getElementById("temperature").innerHTML = (thermostat.temperature);
}

function getColor() {
  changeColor();
}

