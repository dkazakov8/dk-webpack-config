import { TypeRule } from '../types';
import { loaderBabel } from '../loaders/loaderBabel';

export const ruleBabel: TypeRule = {
  test: /\.(jsx?|tsx?)$/,
  use: [loaderBabel],
  exclude(modulePath) {
    return modulePath.includes('node_modules') && !modulePath.includes('ts-interface-checker');
  },
};
