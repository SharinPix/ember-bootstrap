import { b as _defineProperty } from '../../_rollupPluginBabelHelpers-hULyhLkN.js';
import Nav from '../bs-nav.js';

/**
 * Component for the `.nav` element within a [Components.Navbar](Components.Navbar.html)
 * component. Have a look there for examples.
 *
 * Per [the bootstrap docs](http://getbootstrap.com/components/#navbar),
 * justified navbar nav links are not supported.
 *
 * @class NavbarNav
 * @namespace Components
 * @extends Components.Nav
 * @public
 */
class NavbarNav extends Nav {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "additionalClass", 'navbar-nav');
  }
  get justified() {
    return this.args.justified ?? false;
  }
}

export { NavbarNav as default };
//# sourceMappingURL=nav.js.map
