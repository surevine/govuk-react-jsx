const path = require('path');

// eslint-disable-next-line no-unused-vars
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  config.module.rules = config.module.rules.filter(
    (rule) => !rule.test.test('.scss')
  );

  // SCSS
  config.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });

  config.watchOptions = {
    poll: 1000, // Because I have to run on windows at the moment :-(
  };

  return config;
};
