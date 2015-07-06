var Thermostat = function() {
  this.temperature = 20;
  this.powerSave = true;
};

Thermostat.prototype.increase = function () {
  if (this.temperature >= 25 && this.powerSave === true) {
    return 'reached maximum temperature';
  }
  if (this.temperature >= 32 && this.powerSave === false) {
    return 'reached maximum temperature';
  }
  (this.temperature = this.temperature + 1)
};

Thermostat.prototype.decrease = function () {
  if (this.temperature <= 10) {
    return "reached minimum temperature"
  }
  this.temperature = this.temperature - 1;
};

Thermostat.prototype.powerSaveOff = function () {
  this.powerSave = false;
};

Thermostat.prototype.powerSaveOn = function () {
  this.powerSave = true;
};

Thermostat.prototype.resetTemperature = function () {
  this.temperature = 20;
};
