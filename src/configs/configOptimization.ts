/**
 * @docs: https://webpack.js.org/configuration/optimization
 * @docs: https://webpack.js.org/plugins/css-minimizer-webpack-plugin
 *
 */

import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

import { TypeConfig } from '../types';
import { getTerserConfig } from '../utils/getTerserConfig';

export const configOptimization: TypeConfig<any> = {
  minimize: global.minify,
  splitChunks: {
    cacheGroups: {
      polyfills: {
        test: /node_modules[\\/]core-js/,
        name: 'polyfills',
        chunks: 'all',
        reuseExistingChunk: true,
        enforce: true,
        priority: 10,
      },
      sentry: {
        test: /node_modules[\\/]@sentry/,
        name: 'sentry',
        chunks: 'all',
        reuseExistingChunk: true,
        enforce: true,
      },
    },
  },
  runtimeChunk: { name: 'runtime' },
  chunkIds: 'named', // keep chunks' filenames
  minimizer: [
    getTerserConfig(),
    new CssMinimizerPlugin({
      // @ts-ignore
      minify: CssMinimizerPlugin.cssoMinify,
    }),
  ],
};
