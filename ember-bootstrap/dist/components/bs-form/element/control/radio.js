import FormElementControl from '../control.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n{{!-- template-lint-disable no-positive-tabindex no-autofocus-attribute --}}\n{{#each @options as |option index|}}\n  {{#let (concat @id \"-\" index) as |id|}}\n    <div class=\"form-check{{if @inline \" form-check-inline\"}}\">\n      <input\n        type=\"radio\"\n        class=\"form-check-input\"\n        id={{id}}\n        checked={{bs-eq option @value}}\n        onclick={{fn @onChange option}}\n        name={{@name}}\n        required={{@required}}\n        disabled={{@disabled}}\n        autofocus={{@autofocus}}\n        tabindex={{@tabindex}}\n        form={{@form}}\n        title={{@title}}\n        ...attributes\n      >\n      <label\n        for={{id}}\n        class=\"form-check-label\"\n      >\n        {{#if (has-block)}}\n          {{yield option index}}\n        {{else}}\n          {{#if @optionLabelPath}}\n            {{get option @optionLabelPath}}\n          {{else}}\n            {{option}}\n          {{/if}}\n        {{/if}}\n      </label>\n    </div>\n  {{/let}}\n{{/each}}\n");

class FormElementControlRadio extends FormElementControl {
  /**
   * @property inline
   * @type {Boolean}
   * @default false
   * @public
   */
}
setComponentTemplate(TEMPLATE, FormElementControlRadio);

export { FormElementControlRadio as default };
//# sourceMappingURL=radio.js.map
