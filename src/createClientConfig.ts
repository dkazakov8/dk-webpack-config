import webpack from 'webpack';
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';

import { pluginExtract } from './plugins/pluginExtract';
import { TypeGlobal } from './types';

export function createClientConfig(params: TypeGlobal): webpack.Configuration {
  Object.assign(global, params);

  const config: webpack.Configuration = {
    name: 'web',
    node: require('./configs/configNode').configNode,
    mode: require('./configs/configMode').configMode,
    entry: require('./configs/configEntry').configEntry,
    stats: require('./configs/configStats').configStats,
    watch: require('./configs/configWatch').configWatch,
    module: require('./configs/configModule').configModule,
    output: require('./configs/configOutput').configOutput,
    target: 'web',
    devtool: require('./configs/configDevTool').configDevTool,
    plugins: require('./configs/configPlugins').configPlugins,
    resolve: require('./configs/configResolve').configResolve,
    performance: require('./configs/configPerformance').configPerformance,
    optimization: require('./configs/configOptimizationServer').configOptimizationServer,
    watchOptions: require('./configs/configWatchOptions').configWatchOptions,
  };

  const configWithMeasure = global.speedMeasure
    ? // @ts-ignore
      (new SpeedMeasurePlugin().wrap(config) as webpack.Configuration)
    : config;

  configWithMeasure.plugins!.push(pluginExtract as any);

  return configWithMeasure;
}
