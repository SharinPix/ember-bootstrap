import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n{{#if @show}}\n  {{#if @showMultipleErrors}}\n    <div class=\"pre-scrollable\">\n      {{#each @messages as |message|}}\n        <div class=\"invalid-feedback d-block\">{{message}}</div>\n      {{/each}}\n    </div>\n  {{else}}\n    <div class=\"invalid-feedback d-block\">{{get @messages \"0\"}}</div>\n  {{/if}}\n{{/if}}\n");

var errors = setComponentTemplate(TEMPLATE, templateOnly());

export { errors as default };
//# sourceMappingURL=errors.js.map
