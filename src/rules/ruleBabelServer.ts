import { TypeRule } from '../types';
import { loaderSwcServer } from '../loaders/loaderSwcServer';
import { loaderBabelServer } from '../loaders/loaderBabelServer';

export const ruleBabelServer: TypeRule = {
  test: /\.(jsx?|tsx?)$/,
  use: [global.ssr ? loaderBabelServer : loaderSwcServer],
};
