module.exports = {
  entry: './src/main',
  module: {
    loaders: [
      // Transpile any JavaScript file:
      {
        test: /\.js$/,
        loader: 'webpack-traceur?runtime',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.js')
    extensions: ['', '.js', '.json']
  },
  debug: true // shows also which files run through traceur, good to learn and validate the `exclude`
};
