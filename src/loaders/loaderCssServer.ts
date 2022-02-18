/**
 * @docs: https://github.com/webpack-contrib/css-loader
 *
 */

import { TypeLoader } from '../types';

export const loaderCssServer: TypeLoader = {
  loader: 'css-loader',
  options: {
    importLoaders: 1,
    modules: { localIdentName: '[folder]__[local]', exportOnlyLocals: true },
  },
};
