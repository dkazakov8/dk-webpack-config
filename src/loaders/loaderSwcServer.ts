/**
 * @docs: https://github.com/babel/babel-loader
 *
 */

import { TypeLoader } from '../types';

export const loaderSwcServer: TypeLoader = {
  loader: 'swc-loader',
  options: {
    jsc: {
      parser: { tsx: true, syntax: 'typescript' },
      transform: {
        react: { runtime: 'automatic', useBuiltins: true },
      },
    },
  },
};
