describe('Thermostat', function() {

  describe('temperature defaults', function() {
    it('to 20ºC', function() {
      thermostat = new Thermostat();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('increases', function() {
    it('the temperature by 1º', function() {
      thermostat = new Thermostat();
      thermostat.increase();
      expect(thermostat.temperature).toEqual(21);
    });
  });

  describe('decreases', function() {
    it('the temperature by 1ºC', function() {
      thermostat = new Thermostat();
      thermostat.decrease();
      expect(thermostat.temperature).toEqual(19);
    });
  });

  describe('cannot decrease if', function() {
    it('temperature is <= 10ºC', function() {
      thermostat = new Thermostat();
      thermostat.temperature = 10;
      expect(thermostat.decrease()).toEqual('reached minimum temperature');
    });
  });

  describe('power saving mode,', function() {
    it('defaults to on', function() {
      thermostat = new Thermostat();
      expect(thermostat.powerSave).toEqual(true);
    });

    it('can be turned off', function() {
      thermostat = new Thermostat();
      thermostat.powerSaveOff();
      expect(thermostat.powerSave).toEqual(false);
    });

    it('can be turned on', function() {
      thermostat = new Thermostat();
      thermostat.powerSaveOn();
      expect(thermostat.powerSave).toEqual(true);
    });
  });

  describe('when power save is', function() {
    it('on, the max temperature is 25ºC', function() {
      thermostat = new Thermostat();
      thermostat.temperature = 25;
      expect(thermostat.increase()).toEqual('reached maximum temperature');
    });

    it('off, the max temperature is 32ºC', function() {
      thermostat = new Thermostat();
      thermostat.powerSaveOff();
      thermostat.temperature = 32;
      expect(thermostat.increase()).toEqual('reached maximum temperature');
    });
  });
});
