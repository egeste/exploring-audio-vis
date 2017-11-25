const path = require('path')

module.exports = {
  module: {
    rules: [{
      test: /\.css$/,
      include: path.resolve(__dirname, '../'),
      loaders: [ 'style-loader', 'css-loader' ]
    }, {
      test: /^.*\.(mp3)$/,
      include: path.resolve(__dirname, '../'),
      loader: 'file-loader'
    }]
  }
}
