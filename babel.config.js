/**
 * Parameter `api` is an object that exposes everything from Babel itself from its index module.
 * Api documentation: https://babeljs.io/docs/en/config-files
 */
module.exports = (api) => {
  api.cache(false);

  const presets = [
    '@babel/env',
    '@babel/typescript',
    '@babel/react'
  ];

  const plugins = [
    '@babel/plugin-transform-typescript',
    '@babel/plugin-proposal-class-properties'
  ];

  return { presets, plugins };
};
