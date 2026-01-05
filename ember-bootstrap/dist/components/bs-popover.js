import { _ as _applyDecoratedDescriptor, a as _initializerDefineProperty } from '../_rollupPluginBabelHelpers-hULyhLkN.js';
import ContextualHelp from './bs-contextual-help.js';
import arg from '../utils/decorators/arg.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n{{! template-lint-disable no-unbound }}\n{{unbound this._parentFinder}}\n{{#if this.inDom}}\n  {{#let (ensure-safe-component (bs-default @elementComponent (component \"bs-popover/element\"))) as |Element|}}\n    <Element\n      @placement={{this.placement}}\n      @fade={{this.fade}}\n      @showHelp={{this.showHelp}}\n      @title={{@title}}\n      @renderInPlace={{this._renderInPlace}}\n      @popperTarget={{this.triggerTargetElement}}\n      @destinationElement={{this.destinationElement}}\n      @autoPlacement={{this.autoPlacement}}\n      @viewportElement={{this.viewportElement}}\n      @viewportPadding={{this.viewportPadding}}\n\n      {{create-ref \"overlayElement\"}}\n      ...attributes\n    >\n      {{yield\n        (hash\n          close=this.close\n        )\n      }}\n    </Element>\n  {{/let}}\n{{/if}}\n{{did-insert-helper this.setup}}\n{{did-update-helper this.showOrHide @visible}}");

var _class, _descriptor, _descriptor2;
let Popover = (_class = class Popover extends ContextualHelp {
  constructor(...args) {
    super(...args);
    /**
     * @property placement
     * @type string
     * @default 'right'
     * @public
     */
    _initializerDefineProperty(this, "placement", _descriptor, this);
    /**
     * @property triggerEvents
     * @type array|string
     * @default 'click'
     * @public
     */
    _initializerDefineProperty(this, "triggerEvents", _descriptor2, this);
  }
  /**
   * @property elementComponent
   * @type {String}
   * @private
   */

  /**
   * The DOM element of the arrow element.
   *
   * @property arrowElement
   * @type object
   * @readonly
   * @private
   */
  get arrowElement() {
    return this.overlayElement.querySelector('.arrow');
  }
}, _descriptor = _applyDecoratedDescriptor(_class.prototype, "placement", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'right';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "triggerEvents", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'click';
  }
}), _class);
setComponentTemplate(TEMPLATE, Popover);

export { Popover as default };
//# sourceMappingURL=bs-popover.js.map
