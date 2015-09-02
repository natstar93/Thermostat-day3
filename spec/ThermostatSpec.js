describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('when initialised', function() {
    it('starts at 20ºC', function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('temperature', function() {
    it('can be increased by 1ºC', function() {
      thermostat.increase();
      expect(thermostat.temperature).toEqual(21);
    });

    it('can be decreased by 1ºC', function() {
      thermostat.decrease();
      expect(thermostat.temperature).toEqual(19);
    });

    it('cannot be decreased if temperature is 10ºC', function() {
      thermostat.temperature = 10;
      thermostat.decrease();
      expect(thermostat.temperature).toEqual(10);
    });
  });

  describe('power saving mode', function() {
    it('defaults to on', function() {
      expect(thermostat.powerSave).toEqual(true);
    });

    it('can be turned off', function() {
      thermostat.powerSaveToggle();
      expect(thermostat.powerSave).toEqual(false);
    });

    it('can be turned on', function() {
      thermostat.powerSave = false;
      thermostat.powerSaveToggle();
      expect(thermostat.powerSave).toEqual(true);
    });

    it('changes temperature to 25ºC if above 25ºC', function() {
      thermostat.temperature = 27;
      thermostat.powerSave = false;
      thermostat.powerSaveToggle();
      expect(thermostat.temperature).toEqual(25);
    });

    it('when on, max temperature is 25ºC', function() {
      thermostat.temperature = 25;
      thermostat.increase();
      expect(thermostat.temperature).toEqual(25);
    });

    it('when off, max temperature is 32ºC', function() {
      thermostat.powerSave = false;
      thermostat.temperature = 32;
      thermostat.increase();
      expect(thermostat.temperature).toEqual(32);
    });
  });

  describe('resetting temperature', function() {
    it('changes temperature to 20ºC', function() {
      thermostat.temperature = 22;
      thermostat.resetTemperature();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('temperature mode', function() {
    it('is cool if temperature is 15ºC', function() {
      thermostat.temperature = 15;
      expect(thermostat.mode()).toEqual('cool');
    });

    it('is warm if temperature is 20ºC', function() {
      expect(thermostat.mode()).toEqual('warm');
    });

    it('is hot if temperature is 25ºC', function() {
      thermostat.temperature = 27;
      expect(thermostat.mode()).toEqual('hot');
    });
  });
});
