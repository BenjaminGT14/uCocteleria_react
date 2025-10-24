// karma.conf.cjs
// Usa require() en un archivo .cjs para evitar el conflicto de módulos
const path = require('path');
const react = require('@vitejs/plugin-react'); 

module.exports = function (config) {
    config.set({
        basePath: path.resolve(__dirname),

    // CLAVE: Asegura que el adaptador de Jasmine se inicialice antes de Vite
    // Jasmine debe aparecer antes de 'vite' para que `karma-jasmine` inyecte
    // su adaptador (__karma__.start) antes de que `karma-vite` genere la página.
    frameworks: ['jasmine', 'vite'], 

        files: [
            // No incluir manualmente los archivos de jasmine-core (jasmine.js / boot.js).
            // El adaptador `karma-jasmine` y `jasmine-core` deben ser provistos por Karma/los plugins.
            // Incluir sólo el setup y los tests (como módulos para Vite).
            { pattern: 'src/setupTests.js', type: 'module', included: true },
            { pattern: 'src/**/*.test.{js,jsx,ts,tsx}', type: 'module', included: true }
        ],

        preprocessors: {
            'src/setupTests.js': ['vite'],
            'src/**/*.test.{js,jsx,ts,tsx}': ['vite'] 
        },

        vite: {
            plugins: [react()],
            root: path.resolve(__dirname, 'src'),
            publicDir: false,
            server: {
                fs: { allow: [path.resolve(__dirname), path.resolve(__dirname, 'src')] }
            }
        },
        
        // Carga explícita de plugins para evitar errores de inicialización.
        // Importante: `karma-jasmine` debe aparecer antes de `karma-vite`.
        // De este modo el adaptador de Jasmine se registra antes de que
        // karma-vite construya la página de tests.
        plugins: [
            require('karma-jasmine'),
            require('karma-vite'),
            require('karma-chrome-launcher'),
            require('karma-coverage')
        ],

        reporters: ['progress', 'coverage'],
        coverageReporter: {
            dir: 'coverage',
            reporters: [{ type: 'html' }, { type: 'text-summary' }]
        },

        browsers: ['ChromeHeadless'],
        singleRun: false
    });
};