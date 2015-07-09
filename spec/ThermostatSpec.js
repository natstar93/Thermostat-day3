describe('Thermostat', function() {
  
  var thermostat
  
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('temperature defaults', function() {
    it('to 20ºC', function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('increases', function() {
    it('the temperature by 1ºC', function() {
      thermostat.increase();
      expect(thermostat.temperature).toEqual(21);
    });
  });

  describe('decreases', function() {
    it('the temperature by 1ºC', function() {
      thermostat.decrease();
      expect(thermostat.temperature).toEqual(19);
    });
  });

  describe('cannot decrease if', function() {
    it('temperature is <= 10ºC', function() {
      thermostat.temperature = 10;
      thermostat.decrease();
      expect(thermostat.temperature).toEqual(10);
    });
  });

  describe('power saving mode,', function() {
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

    it('changes temp to 25 if above 25 when turned on', function() {
      thermostat.temperature = 26;
      thermostat.powerSave = false;
      thermostat.powerSaveToggle();
      expect(thermostat.temperature).toEqual(25);
    });
  });

  describe('when power save is', function() {
    it('on, the max temperature is 25ºC', function() {
      thermostat.temperature = 25;
      thermostat.increase();
      expect(thermostat.temperature).toEqual(25);
    });

    it('off, the max temperature is 32ºC', function() {
      thermostat.powerSave = false;
      thermostat.temperature = 32;
      thermostat.increase();
      expect(thermostat.temperature).toEqual(32);
    });
  });

  describe('reset the temperature', function() {
    it('changes the temperature to 20', function() {
      thermostat.temperature = 22;
      thermostat.resetTemperature();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('mode', function() {
    it('outputs cool', function() {
      thermostat.temperature = 15;
      expect(thermostat.mode()).toEqual('cool');
    });
  });

  describe('mode', function() {
    it('outputs warm', function() {
      expect(thermostat.mode()).toEqual('warm');
    });
  });

  describe('mode', function() {
    it('outputs hot', function() {
      thermostat.temperature = 27;
      expect(thermostat.mode()).toEqual('hot');
    });
  });
});

