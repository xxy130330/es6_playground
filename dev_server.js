var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var path = require('path');
var PORT = 3000;

var app = express();
var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
    publicPath: '/dist',
    historyApiFallback: true,
    quiet: false,
    noInfo: false,
    stats: {
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
    }
}));

app.get('*', function(req, res){
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(PORT, function(){
    console.log('\x1b[36m%s\x1b[33m%s\x1b[0m', 'Dev server running at ', 'localhost:' + PORT);
    console.log('\x1b[32m%s\x1b[0m', '\nwebpack: compiling...');
});
