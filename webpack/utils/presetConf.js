const webpackMerge = require("webpack-merge");

module.exports = (env = { presets: [] }) => {
  const presets = env.presets || [];
  const mergedPresets = [].concat(...[presets]);
  const mergedConfigs = mergedPresets.map(presetName =>
    require(`../presets/${presetName}`)(env),
  );

  return webpackMerge({}, ...mergedConfigs);
};
