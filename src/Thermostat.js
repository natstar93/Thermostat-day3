var Thermostat = function() {
  this.temperature = 20;
  this.powerSave = true;
};

Thermostat.prototype.increase = function () {
  if (this.powerSave && this.temperature < 25) {
    this.temperature ++;
  };
  if (!this.powerSave && this.temperature < 32) {
    this.temperature ++;
  };
};

Thermostat.prototype.decrease = function () {
  if (this.temperature > 10) {
    this.temperature --;
  };
};

Thermostat.prototype.powerSaveToggle = function () {
  this.powerSave = !this.powerSave;
  if (this.temperature > 25 && this.powerSave) {
    this.temperature = 25;
  };
};

Thermostat.prototype.resetTemperature = function () {
  this.temperature = 20;
};

Thermostat.prototype.mode = function () {
  if (this.temperature < 18) {
    return 'cool';
  }
  else if (this.temperature < 25) {
    return 'warm';
  }
  else {
    return 'hot';
  }
};
