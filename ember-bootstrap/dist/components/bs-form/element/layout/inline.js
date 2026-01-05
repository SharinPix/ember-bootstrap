import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n{{#if @hasLabel}}\n  <@labelComponent/>\n{{/if}}\n{{yield}}\n<@errorsComponent/>\n<@helpTextComponent/>");

var inline = setComponentTemplate(TEMPLATE, templateOnly());

export { inline as default };
//# sourceMappingURL=inline.js.map
