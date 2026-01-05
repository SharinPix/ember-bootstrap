import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n<div\n  id={{@id}}\n  class=\"form-text\"\n  ...attributes\n>\n  {{@text}}\n</div>");

var helpText = setComponentTemplate(TEMPLATE, templateOnly());

export { helpText as default };
//# sourceMappingURL=help-text.js.map
