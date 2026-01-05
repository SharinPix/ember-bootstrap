import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n<BsButton\n  {{! cannot pass @block directly because that triggers reserved keyword assertion when compiling the template }}\n  {{! template-lint-disable no-capital-arguments no-args-paths }}\n  @block={{this.args.block}}\n  @onClick={{@onClick}}\n  @active={{@active}}\n  @size={{@size}}\n  @type={{@type}}\n  @outline={{@outline}}\n  aria-expanded={{if @isOpen \"true\" \"false\"}}\n  class=\"dropdown-toggle\"\n  ...attributes\n  {{on \"keydown\" @onKeyDown}}\n  {{did-insert @registerChildElement \"toggle\"}}\n  {{will-destroy @unregisterChildElement \"toggle\"}}\n>\n  {{yield}}\n</BsButton>\n");

var button = setComponentTemplate(TEMPLATE, templateOnly());

export { button as default };
//# sourceMappingURL=button.js.map
