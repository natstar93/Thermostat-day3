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
    it('the temperature by 1º', function() {
      thermostat = new Thermostat();
      thermostat.decrease();
      expect(thermostat.temperature).toEqual(19);
    });
  });

  describe('cannot decrease if', function() {
    it('temperature is <= 10º', function() {
      thermostat = new Thermostat();
      thermostat.temperature = 10;
      expect(thermostat.decrease()).toEqual('reached minimum temperature');
    });
  });

  describe('cannot increase if', function() {
    it('temperature is >= 25º when power save is on', function() {
      thermostat = new Thermostat();
      thermostat.temperature = 25;
      expect(thermostat.increase()).toEqual('reached maximum temperature');
    });
  });
});
