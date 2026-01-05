import { _ as _applyDecoratedDescriptor } from '../../_rollupPluginBabelHelpers-hULyhLkN.js';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n<a\n  href=\"#\"\n  class=\"dropdown-toggle {{if @inNav \"nav-link\"}}\"\n  aria-expanded={{this.aria-expanded}}\n  role=\"button\"\n  ...attributes\n  {{on \"keydown\" this.handleKeyDown}}\n  {{on \"click\" this.handleClick}}\n  {{did-insert @registerChildElement \"toggle\"}}\n  {{will-destroy @unregisterChildElement \"toggle\"}}\n>\n  {{yield}}\n</a>");

var _class;
let DropdownToggle = (_class = class DropdownToggle extends Component {
  /**
   * @property inNav
   * @type {boolean}
   * @private
   */
  get inNav() {
    return this.args.inNav ?? false;
  }
  get 'aria-expanded'() {
    return this.args.isOpen ? 'true' : 'false';
  }

  /**
   * When clicking the toggle this action is called.
   *
   * @event onClick
   * @param {*} value
   * @public
   */

  handleClick(e) {
    e.preventDefault();
    this.args.onClick?.();
  }
  handleKeyDown(e) {
    this.args.onKeyDown(e);
  }
}, _applyDecoratedDescriptor(_class.prototype, "handleClick", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleClick"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleKeyDown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleKeyDown"), _class.prototype), _class);
setComponentTemplate(TEMPLATE, DropdownToggle);

export { DropdownToggle as default };
//# sourceMappingURL=toggle.js.map
