import { b as _defineProperty } from '../../_rollupPluginBabelHelpers-hULyhLkN.js';
import ContextualHelpElement from '../bs-contextual-help/element.js';
import { macroCondition, getOwnConfig } from '@embroider/macros';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n{{#if @renderInPlace}}\n  <div\n    class=\"popover {{if this.fade \"fade\"}} {{this.actualPlacementClass}} {{if this.showHelp \"show\"}}\"\n    role=\"tooltip\"\n    ...attributes\n    {{popper-tooltip @popperTarget this.popperOptions}}\n    {{create-ref \"popperElement\"}}\n  >\n    <div class={{this.arrowClass}}></div>\n    {{#if @title}}\n      <h3 class=\"popover-header\">{{@title}}</h3>\n    {{/if}}\n    <div class=\"popover-body\">{{yield}}</div>\n  </div>\n{{else}}\n  {{#in-element @destinationElement insertBefore=null}}\n    <div\n      class=\"popover {{if this.fade \"fade\"}} {{this.actualPlacementClass}} {{if this.showHelp \"show\"}}\"\n      role=\"tooltip\"\n      ...attributes\n      {{popper-tooltip @popperTarget this.popperOptions}}\n      {{create-ref \"popperElement\"}}\n    >\n      <div class={{this.arrowClass}}></div>\n      {{#if @title}}\n        <h3 class=\"popover-header\">{{@title}}</h3>\n      {{/if}}\n      <div class=\"popover-body\">{{yield}}</div>\n    </div>\n  {{/in-element}}\n{{/if}}\n\n");

class PopoverElement extends ContextualHelpElement {
  constructor(...args) {
    super(...args);
    /**
     * @property title
     * @type string
     * @public
     */
    _defineProperty(this, "arrowClass", macroCondition(getOwnConfig().isBS5) ? 'popover-arrow' : 'arrow');
    _defineProperty(this, "placementClassPrefix", 'bs-popover-');
    _defineProperty(this, "offset", [0, 8]);
  }
}
setComponentTemplate(TEMPLATE, PopoverElement);

export { PopoverElement as default };
//# sourceMappingURL=element.js.map
