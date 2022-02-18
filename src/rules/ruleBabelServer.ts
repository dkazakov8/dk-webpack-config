import { TypeRule } from '../types';
import { loaderBabelServer } from '../loaders/loaderBabelServer';

export const ruleBabelServer: TypeRule = {
  test: /\.(jsx?|tsx?)$/,
  use: [loaderBabelServer],
};
