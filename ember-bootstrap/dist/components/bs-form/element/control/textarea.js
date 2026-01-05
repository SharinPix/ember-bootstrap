import { _ as _applyDecoratedDescriptor } from '../../../../_rollupPluginBabelHelpers-hULyhLkN.js';
import { action } from '@ember/object';
import FormElementControl from '../control.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n<textarea\n  id={{@id}}\n  disabled={{@disabled}}\n  readonly={{@readonly}}\n  aria-describedby={{@ariaDescribedBy}}\n  value={{@value}}\n  class=\"form-control {{this.formValidationClass}}\"\n  ...attributes\n  {{on \"change\" this.handleChange}}\n  {{on \"input\" this.handleInput}}>\n</textarea>");

var _class;
let FormElementControlTextarea = (_class = class FormElementControlTextarea extends FormElementControl {
  handleChange(event) {
    this.args.onChange(event.target.value);
  }
  handleInput(event) {
    this.args.onChange(event.target.value);
  }
}, _applyDecoratedDescriptor(_class.prototype, "handleChange", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleInput", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleInput"), _class.prototype), _class);
setComponentTemplate(TEMPLATE, FormElementControlTextarea);

export { FormElementControlTextarea as default };
//# sourceMappingURL=textarea.js.map
