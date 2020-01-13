const webpack = require('webpack')

const baseConfig = {
  entry: './index.tsx',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.tsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  watch: true,
}

module.exports = argv => {
  if (argv.dev) {
    console.log('develop mode ON', argv.dev)
    return {
      ...baseConfig,
      plugins: [
        new webpack.DefinePlugin({
          ENV_API: JSON.stringify(env.api),
        }),
      ],
    }
  }

  if (argv.hml) {
    console.log('homolog mode ON')
    return {
      ...baseConfig,
      plugins: [
        new webpack.DefinePlugin({
          ENV_API: JSON.stringify('hml'),
        }),
      ],
    }
  }

  if (argv.prod) {
    console.log('production mode ON')
    return {
      ...baseConfig,
      plugins: [
        new webpack.DefinePlugin({
          ENV_API: JSON.stringify('prod'),
        }),
      ],
    }
  }
}
