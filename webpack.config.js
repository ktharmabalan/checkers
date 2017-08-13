module.exports = {
  // bundle all modules in index.js to /public/bundle.js
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    // run babel loader on all non standard js files to transpile them
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};