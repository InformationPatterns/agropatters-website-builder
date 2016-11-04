var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build/public/');
var APP_DIR = path.resolve(__dirname, 'app/');
var IMAGES_DIR = path.resolve(__dirname, 'app/images/');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
   loaders : [
     {
       test : /\.jsx?/,
       include : APP_DIR,
       loader : 'babel'
     },
     {
       test: /\.less$/,
       loader: "style!css!less"
     },
     {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader?mimetype=image/png',
//         include: IMAGES_DIR
    }
   ]
  }
};

module.exports = config;
