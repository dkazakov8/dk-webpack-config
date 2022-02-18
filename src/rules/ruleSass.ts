import { TypeRule } from '../types';
import { loaderCss } from '../loaders/loaderCss';
import { loaderSass } from '../loaders/loaderSass';
import { loaderExtractCss } from '../loaders/loaderExtractCss';

export const ruleSass: TypeRule = {
  test: /\.s?css$/,
  exclude: global.sassExclude,
  use: [loaderExtractCss, loaderCss, loaderSass],
};
