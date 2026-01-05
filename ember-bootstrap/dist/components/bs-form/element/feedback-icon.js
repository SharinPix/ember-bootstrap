import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n{{#if @show}}\n  <span class=\"form-control-feedback {{@iconName}}\" aria-hidden=\"true\"></span>\n{{/if}}");

var feedbackIcon = setComponentTemplate(TEMPLATE, templateOnly());

export { feedbackIcon as default };
//# sourceMappingURL=feedback-icon.js.map
