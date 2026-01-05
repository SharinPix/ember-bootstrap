import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n<BsCollapse\n  @collapsed={{@collapsed}}\n  @onHidden={{@onHidden}}\n  @onShown={{@onShown}}\n  class=\"navbar-collapse\"\n  ...attributes\n>\n  {{yield}}\n</BsCollapse>\n");

var content = setComponentTemplate(TEMPLATE, templateOnly());

export { content as default };
//# sourceMappingURL=content.js.map
