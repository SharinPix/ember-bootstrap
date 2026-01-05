import { getOwnConfig } from '@embroider/macros';
import { libraries } from '@ember/-internals/metal';

const VERSION = getOwnConfig().version;
function registerLibrary() {
  libraries.register('Ember Bootstrap', VERSION);
}

export { VERSION, registerLibrary };
//# sourceMappingURL=version.js.map
