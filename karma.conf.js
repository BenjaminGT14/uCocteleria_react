// karma.conf.js
const path = require('path');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      // Cada extensión por separado
      'src/**/*.spec.js',
      'src/**/*.spec.jsx',
      'src/**/*.test.js',   // <- importante para tu app.test.js
      'src/**/*.test.jsx'
    ],
    preprocessors: {
      'src/**/*.spec.js': ['webpack', 'sourcemap'],
      'src/**/*.spec.jsx': ['webpack', 'sourcemap'],
      'src/**/*.test.js': ['webpack', 'sourcemap'],  // <- importante
      'src/**/*.test.jsx': ['webpack', 'sourcemap']
    },

    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: { loader: 'babel-loader' }
          },
          {
            test: /\.css$/,
            use: ['null-loader']
          },
          {
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            type: 'asset/resource'
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
      },
      devtool: 'inline-source-map'
    },

    webpackMiddleware: {
      stats: 'errors-only',
      noInfo: true
    },

    reporters: ['spec', 'coverage'],
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
