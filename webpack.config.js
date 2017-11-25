const path = require('path')

module.exports = {
  entry: {
    spectrogram: path.resolve(__dirname, './examples/spectrogram.js')
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react', 'stage-0'],
          plugins: ['transform-decorators-legacy']
        }
      }
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      loaders: [ 'style-loader', 'css-loader' ]
    }, {
      test: /^.*\.(mp3)$/,
      exclude: /node_modules/,
      use: 'base64-inline-loader?name=[name].[hash].[ext]'
    }]
  }
}
