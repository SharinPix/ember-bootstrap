import { _ as _applyDecoratedDescriptor } from '../../../../_rollupPluginBabelHelpers-hULyhLkN.js';
import { action } from '@ember/object';
import FormElementControl from '../control.js';
import sizeClass from '../../../../utils/size-class.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n<input\n  type={{bs-default @type \"text\"}}\n  id={{@id}}\n  disabled={{@disabled}}\n  readonly={{@readonly}}\n  aria-describedby={{@ariaDescribedBy}}\n  value={{@value}}\n  class=\"form-control {{this.formValidationClass}} {{this.sizeClass}}\"\n  ...attributes\n  {{on \"change\" this.handleChange}}\n  {{on \"input\" this.handleInput}}\n>");

var _class;
let FormElementControlInput = (_class = class FormElementControlInput extends FormElementControl {
  /**
   * @property type
   * @type {String}
   * @public
   */

  handleChange(event) {
    this.args.onChange(event.target.value);
  }
  handleInput(event) {
    this.args.onChange(event.target.value);
  }

  /**
   * [BS4 only] Property for size styling, set to 'lg', 'sm' or 'xs'
   *
   * Also see the [Bootstrap docs](https://getbootstrap.com/docs/4.3/components/forms/#sizing)
   *
   * @property size
   * @type String
   * @public
   */

  get sizeClass() {
    return sizeClass('form-control', this.args.size);
  }
}, _applyDecoratedDescriptor(_class.prototype, "handleChange", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleInput", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleInput"), _class.prototype), _class);
setComponentTemplate(TEMPLATE, FormElementControlInput);

export { FormElementControlInput as default };
//# sourceMappingURL=input.js.map
