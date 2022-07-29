/**
 * @docs: https://github.com/babel/babel-loader
 *
 */

import { TypeLoader } from '../types';

export const loaderBabelServer: TypeLoader = {
  loader: 'babel-loader',
  options: {
    presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
    plugins: global.babelConfig.plugins,
    cacheDirectory: true,
  },
};
