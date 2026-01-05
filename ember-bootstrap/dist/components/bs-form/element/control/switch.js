import { _ as _applyDecoratedDescriptor } from '../../../../_rollupPluginBabelHelpers-hULyhLkN.js';
import { action } from '@ember/object';
import FormElementControl from '../control.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n<input\n  type=\"checkbox\"\n  id={{@id}}\n  disabled={{@disabled}}\n  readonly={{@readonly}}\n  aria-describedby={{@ariaDescribedBy}}\n  checked={{@value}}\n  class=\"{{if (macroCondition (macroGetOwnConfig \"isBS5\")) \"form-check-input\" \"custom-control-input\"}} {{this.formValidationClass}}\"\n  ...attributes\n  {{on \"click\" this.handleClick}}\n>\n");

var _class;
let FormElementControlSwitch = (_class = class FormElementControlSwitch extends FormElementControl {
  handleClick(event) {
    this.args.onChange(event.target.checked);
  }
}, _applyDecoratedDescriptor(_class.prototype, "handleClick", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleClick"), _class.prototype), _class);
setComponentTemplate(TEMPLATE, FormElementControlSwitch);

export { FormElementControlSwitch as default };
//# sourceMappingURL=switch.js.map
