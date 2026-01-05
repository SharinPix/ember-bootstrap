import { _ as _applyDecoratedDescriptor, a as _initializerDefineProperty } from '../_rollupPluginBabelHelpers-hULyhLkN.js';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { assert } from '@ember/debug';
import { isBlank } from '@ember/utils';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n{{!-- template-lint-disable no-duplicate-landmark-elements --}}\n{{#let\n  (hash\n    toggle=(component (ensure-safe-component (bs-default @toggleComponent (component \"bs-navbar/toggle\"))) onClick=this.toggleNavbar collapsed=this.collapsed)\n    content=(component (ensure-safe-component (bs-default @contentComponent (component \"bs-navbar/content\"))) collapsed=this.collapsed onHidden=this.onCollapsed onShown=this.onExpanded)\n    nav=(component\n      (ensure-safe-component (bs-default @navComponent (component \"bs-navbar/nav\")))\n      linkToComponent=(component \"bs-navbar/link-to\" onCollapse=this.collapse attrClassInternal=\"nav-link\")\n    )\n    collapse=this.collapse\n    expand=this.expand\n    toggleNavbar=this.toggleNavbar\n  ) as |yieldedHash|}}\n  <nav class=\"navbar {{this.positionClass}} {{this.typeClass}} {{this.breakpointClass}} {{this.backgroundClass}}\" ...attributes>\n    {{#if (macroCondition (macroGetOwnConfig \"isBS4\"))}}\n      {{#if this.fluid}}\n        {{yield yieldedHash}}\n      {{else}}\n        <div class=\"container\">\n          {{yield yieldedHash}}\n        </div>\n      {{/if}}\n    {{else}}\n      <div class={{this.containerClass}}>\n        {{yield yieldedHash}}\n      </div>\n    {{/if}}\n  </nav>\n{{/let}}");

var _class, _descriptor;
let Navbar = (_class = class Navbar extends Component {
  constructor(...args) {
    super(...args);
    /**
     * @property _toggledCollapse
     * @private
     */
    _initializerDefineProperty(this, "_toggledCollapse", _descriptor, this);
  }
  /**
   * Manages the state for the responsive menu between the toggle and the content.
   *
   * @property collapsed
   * @type boolean
   * @default true
   * @public
   */
  get collapsed() {
    return this._toggledCollapse ?? this.args.collapsed ?? true;
  }
  /**
   * Controls whether the wrapping div is a fluid container or not.
   *
   * @property fluid
   * @type boolean
   * @default true
   * @public
   */
  get fluid() {
    return this.args.fluid ?? true;
  }

  /**
   * BS5 only: Allows to override the container layout, see https://getbootstrap.com/docs/5.0/components/navbar/#containers.
   * Allowed values: `'sm'`, `'md'`, `'lg'`, `'xl'`, `'xxl'`, `'fluid'`, see https://getbootstrap.com/docs/5.0/layout/containers/.
   * By default, it is `.container-fluid`, or `.container` if the `@fluid` argument is set to false.
   *
   * @property container
   * @type string
   * @public
   */

  get containerClass() {
    const {
      container
    } = this.args;
    if (container) {
      return `container-${container}`;
    }
    return this.fluid ? 'container-fluid' : 'container';
  }

  /**
   * Specifies the position classes for the navbar, currently supporting none, "fixed-top", "fixed-bottom", and
   * "sticky-top".
   * See the [bootstrap docs](http://getbootstrap.com/components/#navbar-fixed-top) for details.
   *
   * @property position
   * @type String
   * @default null
   * @public
   */
  get position() {
    return this.args.position ?? null;
  }
  get positionClass() {
    let position = this.position;
    let validPositions = ['fixed-top', 'fixed-bottom', 'sticky-top'];
    if (validPositions.indexOf(position) === -1) {
      return null;
    }
    return position;
  }

  /**
   * Property for type styling
   *
   * For the available types see the [Bootstrap docs](https://getbootstrap.com/docs/4.3/components/navbar/#color-schemes)
   *
   * @property type
   * @type String
   * @default 'light'
   * @public
   */
  get type() {
    return this.args.type ?? 'light';
  }
  get typeClass() {
    let type = this.type || 'light';
    assert('The value of `type` must be a string', typeof type === 'string' && type !== '');
    return `navbar-${type}`;
  }

  /**
   * The action to be sent when the navbar is about to be collapsed.
   *
   * You can return false to prevent collapsing the navbar automatically, and do that in your action by
   * setting `collapsed` to true.
   *
   * @event onCollapse
   * @public
   */

  /**
   * The action to be sent after the navbar has been collapsed (including the CSS transition).
   *
   * @event onCollapsed
   * @public
   */
  get onCollapsed() {
    return this.args.onCollapsed ?? (() => {});
  }

  /**
   * The action to be sent when the navbar is about to be expanded.
   *
   * You can return false to prevent expanding the navbar automatically, and do that in your action by
   * setting `collapsed` to false.
   *
   * @event onExpand
   * @public
   */

  /**
   * The action to be sent after the navbar has been expanded (including the CSS transition).
   *
   * @event onExpanded
   * @public
   */
  get onExpanded() {
    return this.args.onExpanded ?? (() => {});
  }

  /**
   * @method expand
   * @private
   */
  expand() {
    if (this.args.onExpand?.() === false) {
      return;
    }
    this._toggledCollapse = false;
  }

  /**
   * @method collapse
   * @private
   */
  collapse() {
    if (this.args.onCollapse?.() === false) {
      return;
    }
    this._toggledCollapse = true;
  }
  toggleNavbar() {
    if (this.collapsed) {
      this.expand();
    } else {
      this.collapse();
    }
  }

  /**
   * Bootstrap 4 Only: Defines the responsive toggle breakpoint size. Options are the standard
   * two character Bootstrap size abbreviations. Used to set the `navbar-expand-*`
   * class. Set to `null` to disable collapsing.
   *
   * @property toggleBreakpoint
   * @type String
   * @default 'lg'
   * @public
   */
  get toggleBreakpoint() {
    if (this.args.toggleBreakpoint === undefined) {
      return 'lg';
    }
    return this.args.toggleBreakpoint;
  }

  /**
   * Bootstrap 4 Only: Sets the background color for the navbar. Can be any color
   * in the set that composes the `bg-*` classes and can be extended by creating your
   * own `bg-*` classes.
   *
   * @property backgroundColor
   * @type String
   * @default 'light'
   * @public
   */
  get backgroundColor() {
    return this.args.backgroundColor ?? 'light';
  }
  get breakpointClass() {
    let toggleBreakpoint = this.toggleBreakpoint;
    if (isBlank(toggleBreakpoint)) {
      return 'navbar-expand';
    } else {
      return `navbar-expand-${toggleBreakpoint}`;
    }
  }
  get backgroundClass() {
    return `bg-${this.backgroundColor}`;
  }

  /**
   * @property toggleComponent
   * @type {String}
   * @private
   */

  /**
   * @property contentComponent
   * @type {String}
   * @private
   */

  /**
   * @property navComponent
   * @type {String}
   * @private
   */

  /**
   * @property linkToComponent
   * @type {String}
   * @private
   */
}, _descriptor = _applyDecoratedDescriptor(_class.prototype, "_toggledCollapse", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, "expand", [action], Object.getOwnPropertyDescriptor(_class.prototype, "expand"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "collapse", [action], Object.getOwnPropertyDescriptor(_class.prototype, "collapse"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleNavbar", [action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleNavbar"), _class.prototype), _class);
setComponentTemplate(TEMPLATE, Navbar);

export { Navbar as default };
//# sourceMappingURL=bs-navbar.js.map
