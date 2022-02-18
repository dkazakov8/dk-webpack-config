/**
 * @docs: https://github.com/webpack-contrib/mini-css-extract-plugin
 *
 */

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { TypeLoader } from '../types';

export const loaderExtractCss: TypeLoader = {
  loader: MiniCssExtractPlugin.loader,
};
