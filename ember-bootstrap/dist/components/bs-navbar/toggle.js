import { b as _defineProperty } from '../../_rollupPluginBabelHelpers-hULyhLkN.js';
import Component from '@glimmer/component';
import { on } from '@ember/modifier';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n<button\n  type=\"button\"\n  class=\"navbar-toggler\n  {{if (bs-default @collapsed true) \"collapsed\"}}\"\n  ...attributes\n  {{(if @onClick (modifier this.on \"click\" @onClick))}}\n>\n  {{#if (has-block)}}\n    {{yield}}\n  {{else}}\n    <span class=\"navbar-toggler-icon\"></span>\n  {{/if}}\n</button>\n");

class NavbarToggle extends Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "on", on);
  }
}
setComponentTemplate(TEMPLATE, NavbarToggle);

export { NavbarToggle as default };
//# sourceMappingURL=toggle.js.map
