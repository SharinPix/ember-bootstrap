import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n{{#if @hasLabel}}\n  <@labelComponent @labelClass={{@horizontalLabelGridClass}}/>\n  <div class={{bs-form-horiz-input-class @horizontalLabelGridClass}}>\n    {{yield}}\n    <@errorsComponent/>\n    <@helpTextComponent/>\n  </div>\n{{else}}\n  <div class=\"{{bs-form-horiz-input-class @horizontalLabelGridClass}} {{bs-form-horiz-offset-class @horizontalLabelGridClass}}\">\n    {{yield}}\n    <@errorsComponent/>\n    <@helpTextComponent/>\n  </div>\n{{/if}}");

var horizontal = setComponentTemplate(TEMPLATE, templateOnly());

export { horizontal as default };
//# sourceMappingURL=horizontal.js.map
