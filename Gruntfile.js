grunt.loadNpmTasks('grunt-coveralls');

grunt.initConfig({
  coveralls: {
    // Options relevant to all targets
    options: {
      // When true, grunt-coveralls will only print a warning rather than
      // an error, to prevent CI builds from failing unnecessarily (e.g. if
      // coveralls.io is down). Optional, defaults to false.
      force: false
    },

    your_target: {
      // LCOV coverage file (can be string, glob or array)
      src: 'coverage-results/extra-results-*.info',
      options: {
        // Any options for just this target
      }
    },
  },
});
