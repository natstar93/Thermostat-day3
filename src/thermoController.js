var thermostat = new Thermostat;

document.getElementById("temperature").innerHTML= (thermostat.temperature);
document.getElementById("up").onClick = thermostat.increase();