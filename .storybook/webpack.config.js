const path = require('path')

module.exports = {
  module: {
    rules: [{
      test: /\.css$/,
      include: path.resolve(__dirname, '../'),
      loaders: [ 'style-loader', 'css-loader' ]
    }, {
      include: path.resolve(__dirname, '../'),
      test: /^.*\.(mp3)$/,
      use: 'base64-inline-loader?name=[name].[hash].[ext]'
    }]
  }
}
