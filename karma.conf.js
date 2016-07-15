(function() {
  module.exports = function(config) {
    return config.set({
      frameworks: ["jasmine"],
      files: [
        "src.js", "unit-test.js"
      ],
      reporters: ["progress"],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ["Chrome"],
      singleRun: false,
      concurrency: Infinity
    })
  }
}());