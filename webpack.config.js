//-- Libraries
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
//const ClassPropertiesPlugin = require("@babel/plugin-proposal-class-properties");

/*
const rootPath = path.join(__dirname, '..');
console.log('Root Path is : '+rootPath);
require('@babel/register')({
  root: rootPath, // This tells babel where to look for `babel.config.js` file
  ignore: [/node_modules/],
  only: [rootPath],
  plugins: [require('@babel/plugin-proposal-class-properties').default]
});
*/

//const babelConfig = require('./babel.config.js');
//console.log(babelConfig);

//-- Globals
//- Source Root
const jsSRCFR = path.resolve(__dirname, 'src/js');
const scssSRCFR = path.resolve(__dirname, 'src/scss');
const nodeModuleSRCFR = path.resolve(__dirname, './node_modules');

//- Public Root
// All relative root refer to jsPFR root
const pFR = {
  absolute : path.resolve(__dirname, './'),
  relative : '../'
};
const jsPFR = {
  absolute : path.resolve(__dirname, 'assets/js'),
  relative : './assets/js'
};
const cssPFR = {
  absolute : path.resolve(__dirname, 'assets/css'),
  relative : '../css'
};

const _ENV = process.env.NODE_ENV || 'development';
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: _ENV,
  // only in production mode
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: [
    	  {
			loader: 'babel-loader',
			options: {
                    presets: [require.resolve('@babel/preset-env')],
                    plugins: [require('@babel/plugin-proposal-class-properties')]
            }
		  }
        ],
        exclude: /node_modules/,
        include: [
          jsSRCFR + '/'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                nodeModuleSRCFR + '/compass-mixins/lib'
              ]
            }
          }
        ],
      }
    ]
  },
  entry: {
    app: jsSRCFR + '/index.js',
    style: [
      scssSRCFR + '/app.scss'
    ]
  },
  output: {
    filename: '[name].js',
    path: jsPFR.absolute
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: cssPFR.relative + '/[name].css',
      //chunkFilename: '../../css/[name].css'
    }),
  ],
}