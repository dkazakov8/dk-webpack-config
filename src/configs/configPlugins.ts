/**
 * @docs: https://webpack.js.org/concepts/plugins
 *
 */

import { TypeConfig } from '../types';
import { excludeFalsy } from '../utils/excludeFalsy';
import { pluginHtml } from '../plugins/pluginHtml';
import { pluginCopy } from '../plugins/pluginCopy';
import { pluginBanner } from '../plugins/pluginBanner';
import { pluginIgnore } from '../plugins/pluginIgnore';
import { pluginDefine } from '../plugins/pluginDefine';
import { pluginPreload } from '../plugins/pluginPreload';
import { pluginWorkbox } from '../plugins/pluginWorkbox';
import { pluginAnalyzer } from '../plugins/pluginAnalyzer';
import { pluginLoadable } from '../plugins/pluginLoadable';
import { pluginLodashModule } from '../plugins/pluginLodashModule';
import { pluginImageMinimize } from '../plugins/pluginImageMinimize';
import { pluginCompressionGzip } from '../plugins/pluginCompressionGzip';
import { pluginCompressionBrotli } from '../plugins/pluginCompressionBrotli';
import { pluginCircularDependency } from '../plugins/pluginCircularDependency';

export const configPlugins: TypeConfig<any> = [
  pluginCopy,
  pluginHtml,
  pluginBanner,
  pluginDefine,
  pluginIgnore,
  pluginPreload,
  global.minify && pluginLodashModule,
  pluginImageMinimize,
  global.ssr && pluginLoadable,
  Boolean(global.serviceWorker) && pluginWorkbox,
  global.circularCheck && pluginCircularDependency,
  global.bundleAnalyzer.enabled && pluginAnalyzer,
  global.compressFiles && pluginCompressionGzip,
  global.compressFiles && pluginCompressionBrotli,
].filter(excludeFalsy);
