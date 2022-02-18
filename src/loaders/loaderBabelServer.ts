/**
 * @docs: https://github.com/babel/babel-loader
 *
 */

import { TypeLoader } from '../types';

export const loaderBabelServer: TypeLoader = {
  loader: 'swc-loader',
  options: {
    jsc: {
      parser: { syntax: 'typescript' },
      target: 'es2021',
    },
  },
};
