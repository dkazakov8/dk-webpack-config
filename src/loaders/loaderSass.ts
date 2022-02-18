/**
 * @docs: https://github.com/postcss/postcss-loader
 *
 */

import { TypeLoader } from '../types';

export const loaderSass: TypeLoader = {
  loader: 'sass-loader',
  options: {
    sassOptions: { includePaths: global.sassImportPaths },
  },
};
