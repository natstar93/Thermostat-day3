describe('Thermostat', function() {

  describe('temperature defaults', function() {
    it('to 20ºC', function() {
      thermostat = new Thermostat();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('add a number to', function() {
    it('the temperature', function() {
      thermostat = new Thermostat();
      thermostat.increase();
      expect(thermostat.temperature).toEqual(21);
    });
  });
});
