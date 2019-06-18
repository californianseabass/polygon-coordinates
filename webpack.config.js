const path = require('path');
const webpack = require('webpack');

module.exports = env => {
  const envKeys = Object.keys(env).reduce((acc, next) => {
    acc[`${next}`] = JSON.stringify(env[next]);
    return acc;
  }, {});

  return {
    name: 'polygon-coordinates',
    entry: [path.resolve(__dirname, 'src/index.tsx')],
    node: {
      fs: 'empty'
    },
    devtool: 'eval-source-map',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'app.bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(t|j)sx?$/,
          exclude: /(node_modules|expo_project|.test.ts$)/,
          resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx"]
          },
          use: {
            loader: 'babel-loader',
          }
        }
      ]
    },
    plugins: [ new webpack.DefinePlugin({ 'process.env': envKeys }) ]
  };
};
