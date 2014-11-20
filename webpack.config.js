module.exports = {
  entry: './src/main',
  module: {
    loaders: [
      // Transpile any JavaScript file:
      { test: /\.js$/, loader: 'webpack-traceur?runtime&sourceMaps&experimental' }
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.js')
    extensions: ['', '.js', '.json']
  }
};
