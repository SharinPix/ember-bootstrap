import { _ as _applyDecoratedDescriptor, a as _initializerDefineProperty, b as _defineProperty } from '../../_rollupPluginBabelHelpers-hULyhLkN.js';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import arg from '../../utils/decorators/arg.js';
import { tracked } from '@glimmer/tracking';
import { macroCondition, getOwnConfig } from '@embroider/macros';
import { trackedRef } from 'ember-ref-bucket';

var _dec, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
/**
 Internal (abstract) component for contextual help markup. Should not be used directly.

 @class ContextualHelpElement
 @namespace Components
 @extends Glimmer.Component
 @private
 */
let ContextualHelpElement = (_dec = trackedRef('popperElement'), _class = class ContextualHelpElement extends Component {
  constructor(...args) {
    super(...args);
    /**
     * @property placement
     * @type string
     * @default 'top'
     * @public
     */
    _initializerDefineProperty(this, "placement", _descriptor, this);
    // `actualPlacement` is initialized with `@placement` and updated by Popper
    // through the `updatePlacement` method which is bound to Popper's
    // `onFirstUpdate` hook.
    //
    // The options passed to Popper are autotracked. And Ember Popper Modifier
    // updates Popper with the new options whenever they change.
    //
    // `actualPlacement` is not updated when `@placement` changes and Popper's
    // `onFirstUpdate` hook does not run. It is unclear if that situation can
    // ever happen. But in case we get a bug report related to layout issues
    // when `@placement` argument changed after initial rendering, it may be
    // related.
    //
    // eslint-disable-next-line ember/no-tracked-properties-from-args
    _initializerDefineProperty(this, "actualPlacement", _descriptor2, this);
    /**
     * @property fade
     * @type boolean
     * @default true
     * @public
     */
    _initializerDefineProperty(this, "fade", _descriptor3, this);
    /**
     * @property showHelp
     * @type boolean
     * @default false
     * @public
     */
    _initializerDefineProperty(this, "showHelp", _descriptor4, this);
    /**
     * If true component will render in place, rather than be wormholed.
     *
     * @property renderInPlace
     * @type boolean
     * @default true
     * @public
     */
    /**
     * Which element to align to
     *
     * @property popperTarget
     * @type {string|HTMLElement}
     * @public
     */
    /**
     * @property autoPlacement
     * @type boolean
     * @default true
     * @public
     */
    /**
     * The DOM element of the viewport element.
     *
     * @property viewportElement
     * @type object
     * @public
     */
    /**
     * Take a padding into account for keeping the tooltip/popover within the bounds of the element given by `viewportElement`.
     *
     * @property viewportPadding
     * @type number
     * @default 0
     * @public
     */
    /**
     * @property arrowClass
     * @private
     */
    _defineProperty(this, "arrowClass", 'arrow');
    _defineProperty(this, "placementClassPrefix", '');
    _defineProperty(this, "offset", [0, 0]);
    _initializerDefineProperty(this, "popperElement", _descriptor5, this);
  }
  /**
   * popper.js modifier config
   *
   * @property popperModifiers
   * @type {object}
   * @private
   */
  get popperOptions() {
    const options = {
      placement: this.placement,
      // Popper's `onFirstUpdate` hook only runs when Popper positioned the element
      // the first time. But not when it updates that position later. This may lead
      // to `actualPlacement` property getting out of sync. It is unclear if this
      // leads to any actual bugs. But we should investigate it as a potential root
      // cause when we get a bug report related to placement of popovers or tooltips.
      onFirstUpdate: this.updatePlacement,
      modifiers: [],
      strategy: 'absolute'
    };

    // We need popperElement, so we wait for this getter to recompute once it's available
    if (!this.popperElement) {
      return options;
    }
    options.modifiers = [{
      name: 'arrow',
      options: {
        element: this.popperElement.querySelector(`.${this.arrowClass}`),
        padding: 4
      }
    }, {
      name: 'offset',
      options: {
        offset: this.offset
      }
    }, {
      name: 'preventOverflow',
      enabled: this.args.autoPlacement,
      options: {
        boundary: this.args.viewportElement,
        padding: this.args.viewportPadding
      }
    }, {
      name: 'flip',
      enabled: this.args.autoPlacement
    }, {
      name: 'onChange',
      enabled: true,
      phase: 'afterWrite',
      fn: this.updatePlacement
    }];
    return options;
  }
  get actualPlacementClass() {
    let ending = this.actualPlacement;
    if (macroCondition(getOwnConfig().isBS5)) {
      if (ending === 'right') {
        ending = 'end';
      }
      if (ending === 'left') {
        ending = 'start';
      }
    }
    return this.placementClassPrefix + ending;
  }
  updatePlacement(state) {
    // normalize argument
    const normalizedState = 'state' in state ? state.state : state;
    if (this.actualPlacement === normalizedState.placement) {
      return;
    }
    this.actualPlacement = normalizedState.placement;
  }
}, _descriptor = _applyDecoratedDescriptor(_class.prototype, "placement", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'top';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "actualPlacement", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return this.args.placement;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "fade", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "showHelp", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "popperElement", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, "updatePlacement", [action], Object.getOwnPropertyDescriptor(_class.prototype, "updatePlacement"), _class.prototype), _class);

export { ContextualHelpElement as default };
//# sourceMappingURL=element.js.map
