var thermostat = new Thermostat;

document.getElementById("temperature").innerHTML= (thermostat.temperature);
// document.getElementById("up").onClick = thermostat.increase();
function showtemp() {
  return thermostat.temperature;
};
function increase() {
  document.getElementById("up") = thermostat.increase();
  return showtemp();
};