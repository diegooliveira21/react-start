module.exports = options => {
  return {
    entry: './index.tsx',
    output: {
      filename: 'bundle.js',
    },
    module: {
      rules: [
        { test: /\.tsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      ],
    },
  }
}
