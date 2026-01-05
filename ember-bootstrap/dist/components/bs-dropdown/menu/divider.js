import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n<div class=\"dropdown-divider\" ...attributes>\n  {{yield}}\n</div>");

var divider = setComponentTemplate(TEMPLATE, templateOnly());

export { divider as default };
//# sourceMappingURL=divider.js.map
