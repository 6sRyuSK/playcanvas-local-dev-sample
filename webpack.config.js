const WebpackPlaycanvas = require('webpack-playcanvas')
const playcanvasOption = require('./playcanvas.config')

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    plugins: [
      new WebpackPlaycanvas(playcanvasOption)
    ],
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
        },
      ],
    },
    resolve: {
      extensions: [
        '.ts', '.js',
      ],
    },
  };