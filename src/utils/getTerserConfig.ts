/* eslint-disable camelcase, @typescript-eslint/naming-convention */

import TerserPlugin from 'terser-webpack-plugin';

export function getTerserConfig() {
  return new TerserPlugin({
    parallel: true,
    terserOptions: {
      sourceMap: true,
      keep_fnames: false,
      keep_classnames: true,
      output: {
        beautify: false,
        comments: /^!\s@env/,
      },
    },
  });
}
