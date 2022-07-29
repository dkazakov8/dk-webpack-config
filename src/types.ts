import webpack from 'webpack';

export type TypeRule = webpack.RuleSetRule;
export type TypeConfig<T> = T;
export type TypeLoader = webpack.RuleSetRule;
export type TypePlugin = Omit<webpack.WebpackPluginInstance, 'apply'>;

export type TypeDevtool =
  | 'eval'
  | 'eval-cheap-source-map'
  | 'eval-cheap-module-source-map'
  | 'eval-source-map'
  | 'eval-nosources-source-map'
  | 'eval-nosources-cheap-source-map'
  | 'eval-nosources-cheap-module-source-map'
  | 'cheap-source-map'
  | 'cheap-module-source-map'
  | 'inline-cheap-source-map'
  | 'inline-cheap-module-source-map'
  | 'inline-source-map'
  | 'inline-nosources-source-map'
  | 'inline-nosources-cheap-source-map'
  | 'inline-nosources-cheap-module-source-map'
  | 'source-map'
  | 'hidden-source-map'
  | 'hidden-nosources-source-map'
  | 'hidden-nosources-cheap-source-map'
  | 'hidden-nosources-cheap-module-source-map'
  | 'hidden-cheap-source-map'
  | 'hidden-cheap-module-source-map'
  | 'nosources-source-map'
  | 'nosources-cheap-source-map'
  | 'nosources-cheap-module-source-map';

export type TypeGlobal = {
  ssr: boolean;
  alias: Record<string, string>;
  entry: Record<string, string>;
  minify: boolean;
  devTool: TypeDevtool;
  modules: Array<string>;
  nodeEnv: 'development' | 'production';
  gitCommit: string;
  hotReload: { enabled: boolean; aggregationTimeout: number };
  babelConfig: any;
  buildFolder: string;
  sassExclude: Array<string>;
  browserslist: Array<string>;
  templatePath: string;
  filenameHash: boolean;
  speedMeasure: boolean;
  circularCheck: boolean;
  compressFiles: boolean;
  bundleAnalyzer: { enabled: boolean; port: number };
  copyFilesConfig: Array<{ from: string; to: string }>;
  webpCompression: number;
  sassImportPaths: Array<string>;
  includePolyfills: boolean;
  rebuildCondition: (changes?: Set<string>, removals?: Set<string>) => boolean;
  sassIncludeGlobal: Array<string>;

  swcLoader?: boolean;
  defineParams?: Record<string, Record<string, any>>;
  serviceWorker?: { entry: string; output: string };
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions,@typescript-eslint/naming-convention
    interface Global extends TypeGlobal {
      ssr: boolean;
    }
  }
}
