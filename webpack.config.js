
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  // mode: 'devleopment',

  devServer: {

    port: '10010',
    // static: ['./public'],
    // open: true,
    // hot: true,
    // liveReload: true,

  },

  entry: './src/index.js',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ],

  resolve: {
    //allows to import modules without extensions
    extensions: ['.js','.jsx', '.json'] // should be equal to module.rules[0].test
  },

  module: {
    rules: [
      {
        // process files by regex
        test: /.(js|jsx|json)$/,  // should be equal to Resolve extensions
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  }
}
