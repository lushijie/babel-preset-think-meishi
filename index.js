const deepExtend = require('deep-extend');
const { declare } = require('@babel/helper-plugin-utils');

module.exports = declare((api, options) => {
  api.assertVersion('^7.0.0');

  const defaultPresetOptions = {
    targets: { node: '6' },
    modules: 'auto',
    debug: false,
    useBuiltIns: 'usage',
    corejs: 2,
  }

  return {
    presets: [
      [require('@babel/preset-env'), deepExtend({}, defaultPresetOptions, options)],
    ],
    plugins: [
      [require('@babel/plugin-transform-runtime')],
      [require('@babel/plugin-proposal-decorators'), { "legacy": true }],
      [require('@babel/plugin-proposal-class-properties'), { "loose": true }]
    ],
  };
});
