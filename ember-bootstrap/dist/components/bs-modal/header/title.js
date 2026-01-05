import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<h5 class=\"modal-title\" ...attributes>\n  {{yield}}\n</h5>\n");

/**
 *
 * @class ModalHeaderTitle
 * @namespace Components
 * @extends Glimmer.Component
 * @private
 */
var title = setComponentTemplate(TEMPLATE, templateOnly());

export { title as default };
//# sourceMappingURL=title.js.map
