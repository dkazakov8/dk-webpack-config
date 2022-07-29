import { TypeRule } from '../types';
import { loaderCssServer } from '../loaders/loaderCssServer';

export const ruleSassServer: TypeRule = {
  test: /\.s?css$/,
  exclude: global.sassExclude,
  use: [loaderCssServer],
};
