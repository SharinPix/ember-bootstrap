import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{#let\n  (ensure-safe-component (bs-default @titleComponent (component \"bs-modal/header/title\")))\n  (component (ensure-safe-component (bs-default @closeComponent (component \"bs-modal/header/close\"))) onClick=@onClose)\nas |Title Close|\n}}\n  <div class=\"modal-header\" ...attributes>\n    {{#if (has-block-params)}}\n      {{yield\n        (hash\n          title=Title\n          close=Close\n        )\n      }}\n    {{else}}\n      {{#if (has-block)}}\n        {{yield\n          (hash\n            title=Title\n            close=Close\n          )\n        }}\n      {{else}}\n        <Title>{{@title}}</Title>\n      {{/if}}\n      {{#if (bs-default @closeButton true)}}\n        <Close/>\n      {{/if}}\n    {{/if}}\n  </div>\n{{/let}}");

/**
 *
 * Modal header element used within [Components.Modal](Components.Modal.html) components. See there for examples.
 *
 * @class ModalHeader
 * @namespace Components
 * @extends Glimmer.Component
 * @public
 */

var ModalHeader = setComponentTemplate(TEMPLATE, templateOnly());

export { ModalHeader as default };
//# sourceMappingURL=header.js.map
