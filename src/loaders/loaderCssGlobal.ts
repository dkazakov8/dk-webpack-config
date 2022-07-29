/**
 * @docs: https://github.com/webpack-contrib/css-loader
 *
 */

import { TypeLoader } from '../types';

export const loaderCssGlobal: TypeLoader = {
  loader: 'css-loader',
  options: {
    sourceMap: false,
    importLoaders: 1,
  },
};
