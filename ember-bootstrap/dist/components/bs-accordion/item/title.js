import { _ as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-hULyhLkN.js';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{!-- template-lint-disable no-nested-interactive --}}\n{{!-- @todo fix this, see https://github.com/kaliber5/ember-bootstrap/issues/999 --}}\n{{#if (macroCondition (macroGetOwnConfig \"isBS5\"))}}\n  <h2\n    class=\"accordion-header\"\n    ...attributes\n  >\n    <button\n      class=\"accordion-button {{if @disabled \"disabled\"}} {{if @collapsed \"collapsed\"}}\"\n      type=\"button\"\n      disabled={{@disabled}}\n      aria-controls={{@controls}}\n      aria-expanded={{if @collapsed \"false\" \"true\"}}\n      {{on \"click\" this.handleClick}}\n    >\n      {{yield}}\n    </button>\n  </h2>\n{{else}}\n  <div\n    class=\"card-header\"\n  >\n    <h2\n      class=\"mb-0\"\n      ...attributes\n    >\n      <button\n        class=\"btn btn-link {{if @disabled \"disabled\"}} {{if @collapsed \"collapsed\" \"expanded\"}}\"\n        type=\"button\"\n        disabled={{@disabled}}\n        aria-controls={{@controls}}\n        aria-expanded={{if @collapsed \"false\" \"true\"}}\n        {{on \"click\" this.handleClick}}\n      >\n        {{yield}}\n      </button>\n    </h2>\n  </div>\n{{/if}}\n");

var _class;
/**
 Component for an accordion item title.

 See [Components.Accordion](Components.Accordion.html) for examples.

 @class AccordionItemTitle
 @namespace Components
 @extends Glimmer.Component
 @public
 */
let AccordionItemTitle = (_class = class AccordionItemTitle extends Component {
  /**
   * @property collapsed
   * @type boolean
   * @public
   */

  /**
   * @property disabled
   * @type boolean
   * @private
   */

  /**
   * @event onClick
   * @public
   */

  handleClick(e) {
    e.preventDefault();
    if (!this.args.disabled) {
      this.args.onClick?.();
    }
  }
}, _applyDecoratedDescriptor(_class.prototype, "handleClick", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleClick"), _class.prototype), _class);
setComponentTemplate(TEMPLATE, AccordionItemTitle);

export { AccordionItemTitle as default };
//# sourceMappingURL=title.js.map
