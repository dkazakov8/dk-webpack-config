import { TypeRule } from '../types';
import { loaderSass } from '../loaders/loaderSass';
import { loaderCssGlobal } from '../loaders/loaderCssGlobal';
import { loaderExtractCss } from '../loaders/loaderExtractCss';

export const ruleSassGlobal: TypeRule = {
  test: /\.s?css$/,
  include: global.sassIncludeGlobal,
  use: [loaderExtractCss, loaderCssGlobal, loaderSass],
};
