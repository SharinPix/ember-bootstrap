import isFastBoot from '../is-fastboot.js';
import { assert } from '@ember/debug';

/**
 * @internal
 */
function arg(fadeProperty) {
  assert('You have to provide a fadeProperty for typeClass', typeof fadeProperty === 'string');
  return function () {
    return {
      get() {
        return !isFastBoot(this) && this.args[fadeProperty] !== false;
      }
    };
  };
}

export { arg as default };
//# sourceMappingURL=uses-transition.js.map
