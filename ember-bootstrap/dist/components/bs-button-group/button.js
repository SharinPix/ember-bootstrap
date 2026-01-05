import { b as _defineProperty } from '../../_rollupPluginBabelHelpers-hULyhLkN.js';
import { isArray } from '@ember/array';
import Button from '../bs-button.js';
import { guidFor } from '@ember/object/internals';
import { macroCondition, getOwnConfig } from '@embroider/macros';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n{{#if this.isBS5ToggleButton}}\n  <input\n    type={{@buttonGroupType}}\n    class=\"btn-check\"\n    id={{this.formId}}\n    autocomplete=\"off\"\n    checked={{this.active}}\n    ...attributes\n    {{on \"click\" this.handleClick}}\n    {{did-update this.resetState @reset}}\n  >\n  <label\n    class=\"btn {{bs-size-class \"btn\" @size}} {{bs-type-class \"btn\" @type default=\"secondary\" outline=@outline}}\"\n    for={{this.formId}}\n  >\n    {{#if this.icon}}\n      <i class={{this.icon}}></i>\n    {{/if}}\n    {{this.text}}\n    {{yield\n      (hash\n        isFulfilled=this.isFulfilled\n        isPending=this.isPending\n        isRejected=this.isRejected\n        isSettled=this.isSettled\n      )\n    }}\n  </label>\n{{else}}\n  <button\n    disabled={{this.__disabled}}\n    type=\"button\"\n    class=\"btn {{if this.active \"active\"}} {{if this.block \"btn-block\"}} {{bs-size-class \"btn\" @size}} {{bs-type-class \"btn\" @type default=\"secondary\" outline=@outline}}\"\n    ...attributes\n    {{on \"click\" this.handleClick}}\n    {{did-update this.resetState @reset}}\n  >\n    {{#if this.icon}}\n      <i class={{this.icon}}></i>\n    {{/if}}\n    {{this.text}}\n    {{yield\n      (hash\n        isFulfilled=this.isFulfilled\n        isPending=this.isPending\n        isRejected=this.isRejected\n        isSettled=this.isSettled\n      )\n    }}\n  </button>\n{{/if}}");

class ButtonGroupButton extends Button {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "formId", guidFor(this));
  }
  /**
   * @property groupValue
   * @private
   */

  /**
   * @property buttonGroupType
   * @type string
   * @private
   */

  /**
   * @property active
   * @type boolean
   * @readonly
   * @private
   */
  get active() {
    let {
      value,
      groupValue
    } = this.args;
    if (this.args.buttonGroupType === 'radio') {
      return value === groupValue;
    } else {
      if (isArray(groupValue)) {
        return groupValue.indexOf(value) !== -1;
      }
    }
    return false;
  }
  get isBS5ToggleButton() {
    if (macroCondition(getOwnConfig().isBS5)) {
      return this.args.buttonGroupType === 'radio' || this.args.buttonGroupType === 'checkbox';
    } else {
      return false;
    }
  }
}
setComponentTemplate(TEMPLATE, ButtonGroupButton);

export { ButtonGroupButton as default };
//# sourceMappingURL=button.js.map
