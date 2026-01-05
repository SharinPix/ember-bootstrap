import { b as _defineProperty } from '../../_rollupPluginBabelHelpers-hULyhLkN.js';
import ContextualHelpElement from '../bs-contextual-help/element.js';
import { macroCondition, getOwnConfig } from '@embroider/macros';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n{{#if @renderInPlace}}\n  <div\n    class=\"tooltip {{if this.fade \"fade\"}} {{this.actualPlacementClass}} {{if this.showHelp \"show\"}}\"\n    role=\"tooltip\"\n    ...attributes\n    {{popper-tooltip @popperTarget this.popperOptions}}\n    {{create-ref \"popperElement\"}}\n  >\n    <div class={{this.arrowClass}}></div>\n    <div class=\"tooltip-inner\">\n      {{yield}}\n    </div>\n  </div>\n{{else}}\n  {{#in-element @destinationElement insertBefore=null}}\n    <div\n      class=\"tooltip {{if this.fade \"fade\"}} {{this.actualPlacementClass}} {{if this.showHelp \"show\"}}\"\n      role=\"tooltip\"\n      ...attributes\n      {{popper-tooltip @popperTarget this.popperOptions}}\n      {{create-ref \"popperElement\"}}\n    >\n      <div class={{this.arrowClass}}></div>\n      <div class=\"tooltip-inner\">\n        {{yield}}\n      </div>\n    </div>\n  {{/in-element}}\n{{/if}}\n\n");

/**
 Internal component for tooltip's markup. Should not be used directly.

 @class TooltipElement
 @namespace Components
 @extends Components.ContextualHelpElement
 @private
 */
class TooltipElement extends ContextualHelpElement {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "arrowClass", macroCondition(getOwnConfig().isBS4) ? 'arrow' : 'tooltip-arrow');
    _defineProperty(this, "placementClassPrefix", 'bs-tooltip-');
    _defineProperty(this, "offset", [0, 6]);
  }
}
setComponentTemplate(TEMPLATE, TooltipElement);

export { TooltipElement as default };
//# sourceMappingURL=element.js.map
