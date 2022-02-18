/**
 * @docs: https://webpack.js.org/configuration/module
 *
 */

import webpack from 'webpack';

import { TypeConfig } from '../types';
import { ruleSvgInline } from '../rules/ruleSvgInline';
import { ruleSassServer } from '../rules/ruleSassServer';
import { ruleBabelServer } from '../rules/ruleBabelServer';
import { ruleFontsServer } from '../rules/ruleFontsServer';
import { ruleVideoServer } from '../rules/ruleVideoServer';
import { ruleImagesServer } from '../rules/ruleImagesServer';

export const configModuleServer: TypeConfig<webpack.Configuration['module']> = {
  rules: [
    ruleSvgInline,
    ruleSassServer,
    ruleBabelServer,
    ruleFontsServer,
    ruleVideoServer,
    ruleImagesServer,
  ],
};
