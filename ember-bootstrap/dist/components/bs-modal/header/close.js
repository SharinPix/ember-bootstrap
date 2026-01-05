import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<button type=\"button\" aria-label=\"Close\" class={{if (macroCondition (macroGetOwnConfig \"isBS5\")) \"btn-close\" \"close\"}} ...attributes {{on \"click\" (bs-default @onClick (bs-noop))}}>\n  {{#if (macroCondition (macroGetOwnConfig \"isBS4\"))}}<span aria-hidden=\"true\">&times;</span>{{/if}}\n</button>");

/**
 *
 * @class ModalHeaderClose
 * @namespace Components
 * @extends Glimmer.Component
 * @private
 */

var close = setComponentTemplate(TEMPLATE, templateOnly());

export { close as default };
//# sourceMappingURL=close.js.map
