var path = require( 'path' );
console.log(path.resolve('../src/'));
module.exports = () => {
    return {
        entry: {
            main: './test/main.spec.ts'
        },
        output: {
            path: './dist',
            filename: '[name].bundle.js'
        },
        resolve: {
            extensions: ['.js', '.ts', '.html']
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loaders: [
                        'ts-loader',
                        'angular2-template-loader'
                    ]
                },
                {
                    test: /\.ts$/,
                    use: {
                        loader: 'istanbul-instrumenter-loader',
                        options: { esModules: true }
                    },
                    enforce: 'post',
                    exclude: /node_modules|\.spec\.ts$/,
                },
                {
                    test: /\.html$/,
                    loader: 'raw'
                }
            ]
        },
        devtool: 'inline-source-map'
    };
};