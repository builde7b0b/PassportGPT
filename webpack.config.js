const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync({
    ...env,
    // You can pass more options to webpack here.
  }, argv);
  // Customize the config before returning it.
  return config;
};
