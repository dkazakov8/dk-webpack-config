import { TypeRule } from '../types';
import { loaderBabel } from '../loaders/loaderBabel';
import { loaderConnectedReplace } from '../loaders/loaderConnectedReplace';

export const ruleBabel: TypeRule = {
  test: /\.(jsx?|tsx?)$/,
  use: [loaderBabel, loaderConnectedReplace],
  exclude: /node_modules/,
};
