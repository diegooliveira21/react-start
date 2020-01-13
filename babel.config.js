module.exports = api => {
  api.cache(false)

  const presets = ['@babel/preset-react', '@babel/preset-typescript']
  const plugins = [
    [
      'module-resolver',
      {
        alias: {
          '@app-screens': './src/ui/screens/common/index.tsx',
          '@app-screens/common': './src/ui/screens/common/index.tsx',
        },
        extensions: ['.js', '.jsx', '.components', '.screen', '.style', '.tsx'],
      },
    ],
    ['@babel/plugin-transform-runtime'],
  ]

  return {
    presets,
    plugins,
  }
}
