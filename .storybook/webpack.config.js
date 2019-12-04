const path = require('path')

module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  config.module.rules = config.module.rules.filter(
    rule => !rule.test.test('.scss')
  )

  // SCSS
  config.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../')
  })

  // Fonts and images
  config.module.rules.push({
    test: /\.(png|jpg|gif|woff|svg|woff2)$/,
    use: [
      {
        loader: 'file-loader',
        options: {}
      }
    ]
  })

  // Yaml examples
  config.module.rules.push({
    test: /\.yaml$/,
    loaders: ['json-loader', 'yaml-loader']
  })

  return config
}
