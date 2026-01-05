import { _ as _applyDecoratedDescriptor, a as _initializerDefineProperty, b as _defineProperty } from '../_rollupPluginBabelHelpers-hULyhLkN.js';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { isNone } from '@ember/utils';
import { next } from '@ember/runloop';
import waitForTransitionEnd from '../utils/transition-end.js';
import { ref } from 'ember-ref-bucket';
import arg from '../utils/decorators/arg.js';
import { tracked } from '@glimmer/tracking';
import { assert } from '@ember/debug';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<div\n  class=\"{{if this.collapse \"collapse\"}} {{if this.transitioning \"collapsing\"}} {{if this.showContent \"show\"}}\"\n  ...attributes\n  {{create-ref \"mainNode\"}}\n  {{style this.cssStyle}}\n  {{did-update this._onCollapsedChange this.collapsed}}\n  {{did-update this._updateCollapsedSize this.collapsedSize}}\n  {{did-update this._updateExpandedSize this.expandedSize}}\n>\n  {{yield}}\n</div>\n");

var _dec, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
/**
  An Ember component that mimics the behaviour of [Bootstrap's collapse.js plugin](http://getbootstrap.com/javascript/#collapse)

  ### Usage

  ```hbs
  <BsCollapse @collapsed={{this.collapsed}}>
    <div class="well">
      <h2>Collapse</h2>
      <p>This is collapsible content</p>
    </div>
  </BsCollapse>
  ```

  *Note that only invoking the component in a template as shown above is considered part of its public API. Extending from it (subclassing) is generally not supported, and may break at any time.*

  @class Collapse
  @namespace Components
  @extends Glimmer.Component
  @public
*/
let Collapse = (_dec = ref('mainNode'), _class = class Collapse extends Component {
  constructor(...args) {
    super(...args);
    /**
     * @property _element
     * @type null | HTMLElement
     * @private
     */
    _initializerDefineProperty(this, "_element", _descriptor, this);
    /**
     * Collapsed/expanded state
     *
     * @property collapsed
     * @type boolean
     * @default true
     * @public
     */
    _initializerDefineProperty(this, "collapsed", _descriptor2, this);
    /**
     * True if this item is expanded
     *
     * @property active
     * @private
     */
    _defineProperty(this, "active", !this.collapsed);
    /**
     * true if the component is currently transitioning
     *
     * @property transitioning
     * @type boolean
     * @private
     */
    _initializerDefineProperty(this, "transitioning", _descriptor3, this);
    /**
     * The size of the element when collapsed. Defaults to 0.
     *
     * @property collapsedSize
     * @type number
     * @default 0
     * @public
     */
    _initializerDefineProperty(this, "collapsedSize", _descriptor4, this);
    /**
     * The size of the element when expanded. When null the value is calculated automatically to fit the containing elements.
     *
     * @property expandedSize
     * @type number
     * @default null
     * @public
     */
    _initializerDefineProperty(this, "expandedSize", _descriptor5, this);
    /**
     * Usually the size (height) of the element is only set while transitioning, and reseted afterwards. Set to true to always set a size.
     *
     * @property resetSizeWhenNotCollapsing
     * @type boolean
     * @default true
     * @private
     */
    _defineProperty(this, "resetSizeWhenNotCollapsing", true);
    /**
     * The direction (height/width) of the collapse animation.
     * When setting this to 'width' you should also define custom CSS transitions for the width property, as the Bootstrap
     * CSS does only support collapsible elements for the height direction.
     *
     * @property collapseDimension
     * @type string
     * @default 'height'
     * @public
     */
    _initializerDefineProperty(this, "collapseDimension", _descriptor6, this);
    /**
     * The duration of the fade transition
     *
     * @property transitionDuration
     * @type number
     * @default 350
     * @public
     */
    _initializerDefineProperty(this, "transitionDuration", _descriptor7, this);
    _initializerDefineProperty(this, "collapseSize", _descriptor8, this);
  }
  get collapse() {
    return !this.transitioning;
  }
  get showContent() {
    return this.collapse && this.active;
  }
  /**
   * Calculates a hash for style attribute.
   */
  get cssStyle() {
    if (isNone(this.collapseSize)) {
      return {};
    }
    return {
      [this.collapseDimension]: `${this.collapseSize}px`
    };
  }
  /**
   * The action to be sent when the element is about to be hidden.
   *
   * @event onHide
   * @public
   */

  /**
   * The action to be sent after the element has been completely hidden (including the CSS transition).
   *
   * @event onHidden
   * @public
   */

  /**
   * The action to be sent when the element is about to be shown.
   *
   * @event onShow
   * @public
   */

  /**
   * The action to be sent after the element has been completely shown (including the CSS transition).
   *
   * @event onShown
   * @public
   */

  /**
   * Triggers the show transition
   *
   * @method show
   * @protected
   */
  show() {
    assert('Reference to collapse div element exists.', this._element);
    this.args.onShow?.();
    this.transitioning = true;
    this.active = true;
    this.collapseSize = this.collapsedSize;
    waitForTransitionEnd(this._element, this.transitionDuration).then(() => {
      if (this.isDestroyed) {
        return;
      }
      this.transitioning = false;
      if (this.resetSizeWhenNotCollapsing) {
        this.collapseSize = null;
      }
      this.args.onShown?.();
    });
    next(this, function () {
      if (!this.isDestroyed) {
        this.collapseSize = this.getExpandedSize('show');
      }
    });
  }

  /**
   * Get the size of the element when expanded
   *
   * @method getExpandedSize
   * @param action
   * @return {Number}
   * @private
   */
  getExpandedSize(action) {
    assert('Reference to collapse div element exists.', this._element);
    const expandedSize = this.expandedSize;
    if (expandedSize != null) {
      return expandedSize;
    }
    const collapseElement = this._element;
    const prefix = action === 'show' ? 'scroll' : 'offset';
    const measureProperty = `${prefix}${this.collapseDimension.substring(0, 1).toUpperCase()}${this.collapseDimension.substring(1)}`;
    return collapseElement[measureProperty];
  }

  /**
   * Triggers the hide transition
   *
   * @method hide
   * @protected
   */
  hide() {
    assert('Reference to collapse div element exists.', this._element);
    this.args.onHide?.();
    this.transitioning = true;
    this.active = false;
    this.collapseSize = this.getExpandedSize('hide');
    waitForTransitionEnd(this._element, this.transitionDuration).then(() => {
      if (this.isDestroyed) {
        return;
      }
      this.transitioning = false;
      if (this.resetSizeWhenNotCollapsing) {
        this.collapseSize = null;
      }
      this.args.onHidden?.();
    });
    next(this, function () {
      if (!this.isDestroyed) {
        this.collapseSize = this.collapsedSize;
      }
    });
  }
  _onCollapsedChange() {
    const collapsed = this.collapsed;
    const active = this.active;
    if (collapsed !== active) {
      return;
    }
    if (collapsed === false) {
      this.show();
    } else {
      this.hide();
    }
  }
  _updateCollapsedSize() {
    if (!this.resetSizeWhenNotCollapsing && this.collapsed && !this.transitioning) {
      this.collapseSize = this.collapsedSize;
    }
  }
  _updateExpandedSize() {
    if (!this.resetSizeWhenNotCollapsing && !this.collapsed && !this.transitioning) {
      this.collapseSize = this.expandedSize;
    }
  }
}, _descriptor = _applyDecoratedDescriptor(_class.prototype, "_element", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "collapsed", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "transitioning", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "collapsedSize", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "expandedSize", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "collapseDimension", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'height';
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "transitionDuration", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 350;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "collapseSize", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _applyDecoratedDescriptor(_class.prototype, "_onCollapsedChange", [action], Object.getOwnPropertyDescriptor(_class.prototype, "_onCollapsedChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "_updateCollapsedSize", [action], Object.getOwnPropertyDescriptor(_class.prototype, "_updateCollapsedSize"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "_updateExpandedSize", [action], Object.getOwnPropertyDescriptor(_class.prototype, "_updateExpandedSize"), _class.prototype), _class);
setComponentTemplate(TEMPLATE, Collapse);

export { Collapse as default };
//# sourceMappingURL=bs-collapse.js.map
