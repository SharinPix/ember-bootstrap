import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<div class=\"modal-body\" ...attributes>\n  {{yield}}\n</div>");

/**
 *
 * Modal body element used within [Components.Modal](Components.Modal.html) components. See there for examples.
 *
 * @class ModalBody
 * @namespace Components
 * @extends Glimmer.Component
 * @public
 */
var ModalBody = setComponentTemplate(TEMPLATE, templateOnly());

export { ModalBody as default };
//# sourceMappingURL=body.js.map
