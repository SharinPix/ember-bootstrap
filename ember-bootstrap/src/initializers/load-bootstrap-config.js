import Config from 'ember-bootstrap/config';
import { registerLibrary } from 'ember-bootstrap/version';

export function initialize(owner) {
  const config = owner.resolveRegistration('config:environment');
  Config.load(config?.['ember-bootstrap'] || {});
  registerLibrary();
}

export default {
  name: 'load-bootstrap-config',
  initialize,
};
