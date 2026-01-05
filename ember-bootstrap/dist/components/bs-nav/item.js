import { _ as _applyDecoratedDescriptor } from '../../_rollupPluginBabelHelpers-hULyhLkN.js';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { assert } from '@ember/debug';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n{{!-- template-lint-disable no-invalid-interactive --}}\n<li class=\"nav-item\" ...attributes {{on \"click\" this.handleClick}}>\n  {{yield}}\n</li>\n");

var _class;
let NavItem = (_class = class NavItem extends Component {
  /**
   * Called when clicking the nav item
   *
   * @event onClick
   * @public
   */

  handleClick() {
    this.args.onClick?.();
  }
  constructor(owner, args) {
    super(owner, args);
    let {
      model,
      models
    } = this;
    assert('You cannot pass both `@model` and `@models` to a nav item component!', !model || !models);
  }
}, _applyDecoratedDescriptor(_class.prototype, "handleClick", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleClick"), _class.prototype), _class);
setComponentTemplate(TEMPLATE, NavItem);

export { NavItem as default };
//# sourceMappingURL=item.js.map
