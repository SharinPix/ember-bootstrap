import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{#let (ensure-safe-component (bs-default @buttonComponent (component \"bs-button\"))) as |Button|}}\n  <div class=\"modal-footer\" ...attributes {{on \"submit\" (bs-default @onSubmit (bs-noop))}}>\n    {{#if (has-block)}}\n      {{yield}}\n    {{else}}\n      {{#if @submitTitle}}\n        <Button @onClick={{@onClose}}>{{bs-default @closeTitle \"Ok\"}}</Button>\n        <Button\n          @type={{bs-default @submitButtonType \"primary\"}}\n          @onClick={{@onSubmit}}\n          {{bs-conditional-attribute \"disabled\" @submitDisabled \"disabled\"}}\n        >\n          {{@submitTitle}}\n        </Button>\n      {{else}}\n        <Button @type=\"primary\" @onClick={{@onClose}}>{{bs-default @closeTitle \"Ok\"}}</Button>\n      {{/if}}\n    {{/if}}\n  </div>\n{{/let}}\n");

/**
 *
 * Modal footer element used within [Components.Modal](Components.Modal.html) components. See there for examples.
 *
 * @class ModalFooter
 * @namespace Components
 * @extends Glimmer.Component
 * @public
 */

var ModalFooter = setComponentTemplate(TEMPLATE, templateOnly());

export { ModalFooter as default };
//# sourceMappingURL=footer.js.map
