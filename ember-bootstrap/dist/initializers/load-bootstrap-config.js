import Config from '../config.js';
import { registerLibrary } from '../version.js';

function initialize(owner) {
  const config = owner.resolveRegistration('config:environment');
  Config.load(config?.['ember-bootstrap'] || {});
  registerLibrary();
}
var loadBootstrapConfig = {
  name: 'load-bootstrap-config',
  initialize
};

export { loadBootstrapConfig as default, initialize };
//# sourceMappingURL=load-bootstrap-config.js.map
