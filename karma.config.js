module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine',"karma-typescript"],
        files: [
            // { pattern: 'src/*.ts', watched: false },
            { pattern: 'test/main.js', watched: false },
            // { pattern: 'src/**/*.spec.js', watched: false }
        ],
        exclude: [
        ],
        preprocessors: {
            '**/*.ts': ["karma-typescript"],
            'test/main.js': ['webpack', 'sourcemap']
        },
        webpack: require('./test/webpack.config')({env: 'test'}),
        reporters: ['progress',"karma-typescript",'coverage-istanbul'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,
        concurrency: Infinity,
        coverageIstanbulReporter: {
            reports: [ 'text-summary' ],
            fixWebpackSourcePaths: true
        },
        karmaTypescriptConfig: {
            tsconfig: './tsconfig.spec.json'
        }
    })
}