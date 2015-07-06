describe('Thermostat', function() {

  describe('temperature defaults', function() {
    it('to 20ºC', function() {
      thermostat = new Thermostat();
      expect(thermostat.temperature).toEqual(20);
    });
  });
});
