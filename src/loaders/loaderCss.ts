/**
 * @docs: https://github.com/webpack-contrib/css-loader
 *
 */

import { TypeLoader } from '../types';

export const loaderCss: TypeLoader = {
  loader: 'css-loader',
  options: {
    importLoaders: 1,
    sourceMap: false,
    modules: { localIdentName: '[path][local]' },
  },
};
