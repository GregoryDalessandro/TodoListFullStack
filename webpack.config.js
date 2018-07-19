const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/src/components/App.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};