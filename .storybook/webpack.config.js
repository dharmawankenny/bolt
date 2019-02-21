module.exports = (baseConfig, env, config) => {
  // this enables typescript & doc gen
  config.module.rules.push({
    test: /\.tsx$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
        },
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });

  config.resolve.extensions = ['.web.js', '.tsx', '.js', '.jsx'];

  return config;
};
