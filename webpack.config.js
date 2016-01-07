var webpack = require('webpack');
var packageConfig = require('./package.json');

module.exports = {
    entry: {
        'angular-drag': './src/index.js'
    },
    output: {
        path: 'dist',
        filename: '[name].js'
    },
    devtool: 'source-map',
    plugins: [
        new webpack.BannerPlugin('angular-drag@' + packageConfig.version + ' | https://github.com/aui/angular-drag')
    ],
    externals: {
        angular: 'angular',
        jquery: 'jQuery'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'
            }
        ],
        loaders: []
    },

    // more options in the optional jshint object
    jshint: {
        // any jshint option http://www.jshint.com/docs/options/
        // i. e.
        camelcase: true,

        // jshint errors are displayed by default as warnings
        // set emitErrors to true to display them as errors
        emitErrors: false,

        // jshint to not interrupt the compilation
        // if you want any file with jshint errors to fail
        // set failOnHint to true
        failOnHint: false,

        // custom reporter function
        reporter: function(errors) { }
    }
};