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
});
