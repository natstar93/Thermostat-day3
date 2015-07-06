var Thermostat = function() {
  this.temperature = 20;
};

Thermostat.prototype.increase = function () {
  (this.temperature = this.temperature + 1)
};

Thermostat.prototype.decrease = function () {
  this.temperature = this.temperature - 1;
};
