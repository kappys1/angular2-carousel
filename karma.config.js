module.exports = function (config) {
    var configuration = {
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
            'test/main.js': ['coverage','webpack', 'sourcemap']
        },
        webpack: require('./test/webpack.config')({env: 'test'}),
        reporters: ['progress',"karma-typescript",'spec','coverage', 'remap-coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS','smallerChrome'],
        concurrency: Infinity,
        coverageReporter: {
            type: 'in-memory'
        },

        remapCoverageReporter: {
            'text-summary': null, // stdout
            html: './coverage/html',
            'lcovonly': './coverage/lcov.info',
        },
        karmaTypescriptConfig: {
            tsconfig: './tsconfig.spec.json'
        },
        customLaunchers: {
            ChromeTravisCi: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            },
            smallerChrome: {
                base: "Chrome",
                flags: [
                    "--window-size=1024,768"
                ]
            }
        },
        singleRun: true

    };

    if (process.env.TRAVIS){
        configuration.browsers = [
            'ChromeTravisCi'
        ];
    }

    config.set(configuration)
}