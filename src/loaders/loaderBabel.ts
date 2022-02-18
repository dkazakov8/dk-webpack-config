/**
 * @docs: https://github.com/babel/babel-loader
 *
 */

import { TypeLoader } from '../types';

export const loaderBabel: TypeLoader = {
  // loader: 'swc-loader',
  // options: {
  //   jsc: {
  //     parser: {
  //       syntax: 'typescript',
  //       jsx: true,
  //       decorators: true,
  //       dynamicImport: true,
  //       decoratorsBeforeExport: true,
  //     },
  //     target: 'es2015',
  //     loose: true,
  //     transform: {
  //       react: {
  //         runtime: 'automatic',
  //         useBuiltins: true,
  //       },
  //       legacyDecorator: true,
  //       decoratorMetadata: true,
  //     },
  //   },
  // },
  loader: 'babel-loader',
  options: {
    presets: [
      global.includePolyfills
        ? ['@babel/preset-env', { corejs: 3, useBuiltIns: 'usage' }]
        : '@babel/preset-env',
    ],
    plugins: global.babelConfig.plugins,
    ignore: ['node_modules'],
    cacheDirectory: true,
  },
};
