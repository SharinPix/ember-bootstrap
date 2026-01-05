import FormElementLabel from './label.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n<legend\n  class=\"\n    {{if @invisibleLabel (if (macroCondition (macroGetOwnConfig \"isBS5\")) \"visually-hidden\" \"sr-only\")}}\n    {{@labelClass}}\n    {{if this.isHorizontalAndNotCheckbox \"col-form-label\"}}\n    {{if this.isHorizontal (bs-size-class \"col-form-label\" @size)}}\"\n>\n  {{#if (has-block)}}\n    {{yield}}\n  {{/if}}\n  {{@label}}\n</legend>");

class FormElementLegend extends FormElementLabel {}
setComponentTemplate(TEMPLATE, FormElementLegend);

export { FormElementLegend as default };
//# sourceMappingURL=legend.js.map
