import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n<div class=\"{{if (bs-eq \"switch\" @controlType) (if (macroCondition (macroGetOwnConfig \"isBS5\")) \"form-check form-switch\" \"custom-control custom-switch\") \"form-check\"}}\">\n  {{yield}}\n  <@labelComponent/>\n  <@errorsComponent/>\n  <@helpTextComponent/>\n</div>\n");

var checkbox = setComponentTemplate(TEMPLATE, templateOnly());

export { checkbox as default };
//# sourceMappingURL=checkbox.js.map
