import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<BsCollapse @collapsed={{@collapsed}} class=\"accordion-collapse\" id={{@collapsableId}} aria-describedby={{@describedby}}>\n  <div class=\"{{if (macroCondition (macroGetOwnConfig \"isBS4\")) \"card-body\"}} {{if (macroCondition (macroGetOwnConfig \"isBS5\")) \"accordion-body\"}}\">\n    {{yield}}\n  </div>\n</BsCollapse>");

/**
 Component for an accordion item body.

 See [Components.Accordion](Components.Accordion.html) for examples.

 @class AccordionItemBody
 @namespace Components
 @extends Ember.Component
 @public
 */

var body = setComponentTemplate(TEMPLATE, templateOnly());

export { body as default };
//# sourceMappingURL=body.js.map
