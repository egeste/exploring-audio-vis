const path = require('path')

module.exports = {
  entry: {
    spectrogram: path.resolve(__dirname, './examples/spectrogram.js')
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js',
    publicPath: '/assets/js/audio-vis/'
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
      loaders: [ 'style-loader', 'css-loader' ]
    }, {
      test: /^.*\.(mp3)$/,
      exclude: /node_modules/,
      loader: 'file-loader'
    }]
  }
}
