import { _ as _applyDecoratedDescriptor } from '../../_rollupPluginBabelHelpers-hULyhLkN.js';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n<BsLinkTo\n  @route={{@route}}\n  @model={{@model}}\n  @models={{@models}}\n  @query={{@query}}\n  @disabled={{@disabled}}\n  {{on \'click\' this.onClick}}\n  class={{@attrClassInternal}}\n  ...attributes\n>\n  {{yield}}\n</BsLinkTo>");

var _class;
let NavbarLinkTo = (_class = class NavbarLinkTo extends Component {
  /**
   * @property collapseNavbar
   * @type {Boolean}
   * @default true
   * @public
   */

  onClick() {
    if (this.args.collapseNavbar ?? true) {
      this.args.onCollapse();
    }
  }
}, _applyDecoratedDescriptor(_class.prototype, "onClick", [action], Object.getOwnPropertyDescriptor(_class.prototype, "onClick"), _class.prototype), _class);
setComponentTemplate(TEMPLATE, NavbarLinkTo);

export { NavbarLinkTo as default };
//# sourceMappingURL=link-to.js.map
