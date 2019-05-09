// Karma configuration
// Generated on Fri Apr 05 2019 16:07:55 GMT+0200 (GMT+02:00)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'app/',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'lib/angular/angular.js',
      'lib/angular-mocks/angular-mocks.js',
      'lib/angular-resource/angular-resource.js',
      'app.module.js',
      'services/image.module.js',
      'services/image.service.js',
      'services/utils/utils.module.js',
      'services/utils/utils.service.js',
      'services/utils/utils.service.spec.js',
      'views/components/gal-list/gal-list.module.js',   
      'views/components/gal-list/gal-list.component.spec.js',
      'views/components/gal-large/gal-large.module.js',   
      'views/components/gal-large/gal-large.component.spec.js',
      'views/components/gal-medium/gal-medium.module.js',   
      'views/components/gal-medium/gal-medium.component.spec.js',
      'views/components/gal-small/gal-small.module.js',   
      'views/components/gal-small/gal-small.component.spec.js',
      '**/*.module.js',
      '*!(.module|.spec).js',
      '!(lib)/**/*!(.module|.spec).js',
      '**/*.spec.js'
    ],


    // list of files / patterns to exclude
    exclude: [
      'mobile/build/main.js',
      'mobile/service-worker.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome','Firefox','Edge'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
