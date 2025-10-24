// karma.conf.js
const path = require('path');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      // patrón para todos los specs (ajusta si usas otra convención)
        { pattern: 'src/**/*.spec.js', watched: false },
        { pattern: 'src/**/*.spec.jsx', watched: false },
        { pattern: 'src/**/*.test.js', watched: false },
        { pattern: 'src/**/*.test.jsx', watched: false }
    ],
    preprocessors: {
        'src/**/*.spec.js': ['webpack', 'sourcemap'],
        'src/**/*.spec.jsx': ['webpack', 'sourcemap'],
        'src/**/*.test.js': ['webpack', 'sourcemap'],
        'src/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
              // .babelrc se usa automáticamente
            }
          },
          {
            test: /\.css$/,
            use: ['null-loader'] // evita tratar CSS en tests; instala null-loader si lo usas
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx']
      },
      devtool: 'inline-source-map'
    },

    webpackMiddleware: {
      stats: 'errors-only',
      noInfo: true
    },

    reporters: ['spec', 'coverage'],
    specReporter: {
      suppressPassed: false
    },

    coverageReporter: {
      type: 'html',
      dir: 'coverage/',
      includeAllSources: true
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    concurrency: Infinity,

    // plugins (karma detecta automáticamente la mayoría; si hay problemas decláralos aquí)
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-webpack',
      'karma-spec-reporter',
      'karma-sourcemap-loader'
    ]
  });
};
