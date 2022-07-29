/**
 * @docs: https://github.com/Va1/string-replace-loader
 *
 */

import { TypeLoader } from '../types';

export const loaderConnectedReplace: TypeLoader = {
  loader: 'string-replace-loader',
  options: {
    search:
      '\n(export default |export )?class ([a-zA-Z0-9]+)(.*?)?extends ConnectedComponent(.*?(?=}\n}))}\n}',
    // eslint-disable-next-line max-params
    replace(
      match: string,
      exportStatement: string,
      className: string,
      types: string,
      classContent: string
    ) {
      const wrappedComponent = `ConnectedComponent.observer(class ${className} extends ConnectedComponent${classContent}}\n});`;

      let str = '\n';

      if (exportStatement) str += exportStatement;

      if (!exportStatement) {
        str += `const ${className} = ${wrappedComponent}`;
      } else if (exportStatement.includes('default')) {
        str += wrappedComponent;
      } else {
        str += `const ${className} = ${wrappedComponent}`;
      }

      return str;
    },
    flags: 'gs',
  },
};
