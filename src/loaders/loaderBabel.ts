/**
 * @docs: https://github.com/babel/babel-loader
 *
 */

import { TypeLoader } from '../types';

const swcConfig = {
  loader: 'swc-loader',
  options: {
    jsc: {
      parser: { tsx: true, syntax: 'typescript', dynamicImport: true },
      transform: {
        react: { runtime: 'automatic', useBuiltins: true },
      },
    },
  },
};

const babelConfig = {
  loader: 'babel-loader',
  options: {
    presets: ['@babel/preset-env'],
    plugins: global.babelConfig.plugins,
    ignore: ['node_modules'],
    cacheDirectory: true,
  },
};

if (global.includePolyfills) {
  // @ts-ignore
  swcConfig.options.env = { mode: 'usage', coreJs: 3, targets: global.browserslist };
  // @ts-ignore
  babelConfig.options.presets = [['@babel/preset-env', { corejs: 3, useBuiltIns: 'usage' }]];
}

export const loaderBabel: TypeLoader = global.swcLoader ? swcConfig : babelConfig;
