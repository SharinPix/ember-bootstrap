import { _ as _applyDecoratedDescriptor, a as _initializerDefineProperty, b as _defineProperty } from '../_rollupPluginBabelHelpers-hULyhLkN.js';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { cancel, later, schedule, next } from '@ember/runloop';
import waitForTransitionEnd from '../utils/transition-end.js';
import { getDestinationElement } from '../utils/dom.js';
import arg from '../utils/decorators/uses-transition.js';
import { assert } from '@ember/debug';
import { getViewBounds } from '@ember/-internals/views';
import arg$1 from '../utils/decorators/arg.js';
import { tracked } from '@glimmer/tracking';
import { ref } from 'ember-ref-bucket';

var _dec, _dec2, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor0, _descriptor1, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14;
const HOVERSTATE_NONE = 'none';
const HOVERSTATE_IN = 'in';
const HOVERSTATE_OUT = 'out';
function noop() {}
/**
  @class ContextualHelp
  @namespace Components
  @extends Glimmer.Component
  @private
*/
let ContextualHelp = (_dec = arg('fade'), _dec2 = ref('overlayElement'), _class = class ContextualHelp extends Component {
  constructor(...args) {
    super(...args);
    /**
     * @property title
     * @type string
     * @public
     */
    /**
     * How to position the tooltip/popover - top | bottom | left | right
     *
     * @property title
     * @type string
     * @default 'top'
     * @public
     */
    _initializerDefineProperty(this, "placement", _descriptor, this);
    /**
     * By default, it will dynamically reorient the tooltip/popover based on the available space in the viewport. For
     * example, if `placement` is "left", the tooltip/popover will display to the left when possible, otherwise it will
     * display right. Set to `false` to force placement according to the `placement` property
     *
     * @property autoPlacement
     * @type boolean
     * @default true
     * @public
     */
    _initializerDefineProperty(this, "autoPlacement", _descriptor2, this);
    /**
     * You can programmatically show the tooltip/popover by setting this to `true`
     *
     * @property visible
     * @type boolean
     * @default false
     * @public
     */
    _initializerDefineProperty(this, "visible", _descriptor3, this);
    /**
     * @property inDom
     * @type boolean
     * @private
     */
    _initializerDefineProperty(this, "_inDom", _descriptor4, this);
    /**
     * Set to false to disable fade animations.
     *
     * @property fade
     * @type boolean
     * @default true
     * @public
     */
    _initializerDefineProperty(this, "fade", _descriptor5, this);
    /**
     * Used to apply Bootstrap's visibility class
     *
     * @property showHelp
     * @type boolean
     * @default false
     * @private
     */
    _initializerDefineProperty(this, "showHelp", _descriptor6, this);
    /**
     * Delay showing and hiding the tooltip/popover (ms). Individual delays for showing and hiding can be specified by using the
     * `delayShow` and `delayHide` properties.
     *
     * @property delay
     * @type number
     * @default 0
     * @public
     */
    _initializerDefineProperty(this, "delay", _descriptor7, this);
    /**
     * Delay showing the tooltip/popover. This property overrides the general delay set with the `delay` property.
     *
     * @property delayShow
     * @type number
     * @default 0
     * @public
     */
    _initializerDefineProperty(this, "delayShow", _descriptor8, this);
    /**
     * Delay hiding the tooltip/popover. This property overrides the general delay set with the `delay` property.
     *
     * @property delayHide
     * @type number
     * @default 0
     * @public
     */
    _initializerDefineProperty(this, "delayHide", _descriptor9, this);
    /**
     * The duration of the fade transition
     *
     * @property transitionDuration
     * @type number
     * @default 150
     * @public
     */
    _initializerDefineProperty(this, "transitionDuration", _descriptor0, this);
    /**
     * Keeps the tooltip/popover within the bounds of this element when `autoPlacement` is true. Can be any valid CSS selector.
     *
     * @property viewportSelector
     * @type string
     * @default 'body'
     * @see viewportPadding
     * @see autoPlacement
     * @public
     */
    _initializerDefineProperty(this, "viewportSelector", _descriptor1, this);
    /**
     * Take a padding into account for keeping the tooltip/popover within the bounds of the element given by `viewportSelector`.
     *
     * @property viewportPadding
     * @type number
     * @default 0
     * @see viewportSelector
     * @see autoPlacement
     * @public
     */
    _initializerDefineProperty(this, "viewportPadding", _descriptor10, this);
    _defineProperty(this, "_parent", void 0);
    _defineProperty(this, "_parentFinder", self.document ? self.document.createTextNode('') : '');
    /**
     * The DOM element that triggers the tooltip/popover. By default, it is the parent element of this component.
     * You can set this to any CSS selector to have any other element trigger the tooltip/popover.
     *
     * @property triggerElement
     * @type string | null
     * @public
     */
    _initializerDefineProperty(this, "triggerElement", _descriptor11, this);
    _defineProperty(this, "triggerTargetElement", void 0);
    /**
     * The event(s) that should trigger the tooltip/popover - click | hover | focus.
     * You can set this to a single event or multiple events, given as an array or a string separated by spaces.
     *
     * @property triggerEvents
     * @type array|string
     * @default 'hover focus'
     * @public
     */
    _initializerDefineProperty(this, "triggerEvents", _descriptor12, this);
    /**
     * Current hover state, 'in', 'out' or null
     *
     * @property hoverState
     * @type number
     * @private
     */
    _defineProperty(this, "hoverState", HOVERSTATE_NONE);
    /**
     * Current state for events
     */
    _defineProperty(this, "hover", false);
    _defineProperty(this, "focus", false);
    _defineProperty(this, "click", false);
    /**
     * Ember.run timer
     *
     * @property timer
     * @private
     */
    _defineProperty(this, "timer", null);
    /**
     * Use CSS transitions?
     *
     * @property usesTransition
     * @type boolean
     * @readonly
     * @private
     */
    _initializerDefineProperty(this, "usesTransition", _descriptor13, this);
    /**
     * The DOM element of the overlay element.
     *
     * @property overlayElement
     * @type object
     * @readonly
     * @private
     */
    _initializerDefineProperty(this, "overlayElement", _descriptor14, this);
  }
  get inDom() {
    return this._inDom ?? !!(this.visible && this.triggerTargetElement);
  }
  set inDom(value) {
    if (this._inDom === value) {
      return;
    }
    this._inDom = value;
  }
  /**
   * The DOM element of the arrow element.
   *
   * @property arrowElement
   * @type object
   * @readonly
   * @private
   */
  /**
   * The wormhole destinationElement
   *
   * @property destinationElement
   * @type object
   * @readonly
   * @private
   */
  get destinationElement() {
    return getDestinationElement(this);
  }

  /**
   * The DOM element of the viewport element.
   *
   * @property viewportElement
   * @type object
   * @readonly
   * @private
   */
  get viewportElement() {
    return document.querySelector(this.viewportSelector);
  }
  /**
   * @method getTriggerTargetElement
   * @private
   */
  getTriggerTargetElement() {
    const triggerElement = this.triggerElement;
    let el;
    if (!triggerElement) {
      el = this._parent;
    } else {
      el = document.querySelector(triggerElement);
    }
    assert('Could not find trigger element for tooltip/popover component', el);
    return el;
  }
  get _triggerEvents() {
    let events = this.triggerEvents;
    if (typeof events === 'string') {
      events = events.split(' ');
    }
    return events.map(event => {
      switch (event) {
        case 'hover':
          return ['mouseenter', 'mouseleave'];
        case 'focus':
          return ['focusin', 'focusout'];
        default:
          return event;
      }
    });
  }

  /**
   * If true component will render in place, rather than be wormholed.
   *
   * @property renderInPlace
   * @type boolean
   * @default false
   * @public
   */

  /**
   * @property _renderInPlace
   * @type boolean
   * @private
   */
  get _renderInPlace() {
    return this.args.renderInPlace || !this.destinationElement;
  }
  get shouldShowHelp() {
    return this.hover || this.focus || this.click;
  }
  /**
   * This action is called immediately when the tooltip/popover is about to be shown.
   *
   * @event onShow
   * @public
   */

  /**
   * This action will be called when the tooltip/popover has been made visible to the user (will wait for CSS transitions to complete).
   *
   * @event onShown
   * @public
   */

  /**
   * This action is called immediately when the tooltip/popover is about to be hidden.
   *
   * @event onHide
   * @public
   */

  /**
   * This action is called when the tooltip/popover has finished being hidden from the user (will wait for CSS transitions to complete).
   *
   * @event onHidden
   * @public
   */

  /**
   * Called when a show event has been received
   *
   * @method enter
   * @param e
   * @private
   */
  enter(e) {
    if (e) {
      const eventType = e.type === 'focusin' ? 'focus' : 'hover';
      this[eventType] = true;
    }
    if (this.showHelp || this.hoverState === HOVERSTATE_IN) {
      this.hoverState = HOVERSTATE_IN;
      return;
    }
    cancel(this.timer ?? undefined);
    this.hoverState = HOVERSTATE_IN;
    if (!this.delayShow) {
      return this.show();
    }
    this.timer = later(this, function () {
      if (this.hoverState === HOVERSTATE_IN) {
        this.show();
      }
    }, this.delayShow);
  }

  /**
   * Called when a hide event has been received
   *
   * @method leave
   * @param e
   * @private
   */
  leave(e) {
    if (e) {
      const eventType = e.type === 'focusout' ? 'focus' : 'hover';
      this[eventType] = false;
    }
    if (this.shouldShowHelp) {
      return;
    }
    cancel(this.timer ?? undefined);
    this.hoverState = HOVERSTATE_OUT;
    if (!this.delayHide) {
      return this.hide();
    }
    this.timer = later(() => {
      if (this.hoverState === HOVERSTATE_OUT) {
        this.hide();
      }
    }, this.delayHide);
  }

  /**
   * Called for a click event
   *
   * @method toggle
   * @private
   */
  toggle() {
    this.click = !this.click;
    if (this.shouldShowHelp) {
      this.enter();
    } else {
      this.leave();
    }
  }

  /**
   * Show the tooltip/popover
   *
   * @method show
   * @private
   */
  show() {
    if (this.isDestroyed || this.isDestroying) {
      return;
    }
    if (false === this.args.onShow?.(this)) {
      return;
    }
    this.inDom = true;
    schedule('afterRender', this, this._show);
  }
  _show(skipTransition = false) {
    if (this.isDestroyed || this.isDestroying) {
      return;
    }
    this.showHelp = true;

    // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

    // See https://github.com/twbs/bootstrap/pull/22481
    if ('ontouchstart' in document.documentElement) {
      for (const child of document.body.children) {
        child.addEventListener('mouseover', noop);
      }
    }
    const tooltipShowComplete = () => {
      if (this.isDestroyed) {
        return;
      }
      const prevHoverState = this.hoverState;
      this.args.onShown?.(this);
      this.hoverState = HOVERSTATE_NONE;
      if (prevHoverState === HOVERSTATE_OUT) {
        this.leave();
      }
    };
    if (!skipTransition && this.usesTransition && this.overlayElement) {
      waitForTransitionEnd(this.overlayElement, this.transitionDuration).then(tooltipShowComplete);
    } else {
      tooltipShowComplete();
    }
  }

  /**
   * Position the tooltip/popover's arrow
   *
   * @method replaceArrow
   * @param delta
   * @param dimension
   * @param isVertical
   * @private
   */
  replaceArrow(delta, dimension, isVertical) {
    const el = this.arrowElement;
    if (!el) {
      return;
    }
    el.style[isVertical ? 'left' : 'top'] = `${50 * (1 - delta / dimension)}%`;
    el.style[isVertical ? 'top' : 'left'] = '';
  }

  /**
   * Hide the tooltip/popover
   *
   * @method hide
   * @private
   */
  hide() {
    if (this.isDestroyed) {
      return;
    }
    if (false === this.args.onHide?.(this)) {
      return;
    }
    const tooltipHideComplete = () => {
      if (this.isDestroyed) {
        return;
      }
      if (this.hoverState !== HOVERSTATE_IN) {
        this.inDom = false;
      }
      this.args.onHidden?.(this);
    };
    this.showHelp = false;

    // if this is a touch-enabled device we remove the extra
    // empty mouseover listeners we added for iOS support
    if ('ontouchstart' in document.documentElement) {
      for (const child of document.body.children) {
        child.removeEventListener('mouseover', noop);
      }
    }
    if (this.usesTransition && this.overlayElement) {
      waitForTransitionEnd(this.overlayElement, this.transitionDuration).then(tooltipHideComplete);
    } else {
      tooltipHideComplete();
    }
    this.hoverState = HOVERSTATE_NONE;
  }

  /**
   * @method addListeners
   * @private
   */
  addListeners() {
    const target = this.triggerTargetElement;
    if (!target || !(target instanceof Element)) {
      return;
    }
    this._triggerEvents.forEach(event => {
      if (typeof event === 'string') {
        target.addEventListener(event, this._handleToggle);
      } else {
        const [inEvent, outEvent] = event;
        if (inEvent) {
          target.addEventListener(inEvent, this._handleEnter);
        }
        if (outEvent) {
          target.addEventListener(outEvent, this._handleLeave);
        }
      }
    });
  }

  /**
   * @method removeListeners
   * @private
   */
  removeListeners() {
    try {
      const target = this.triggerTargetElement;
      if (!target || !(target instanceof Element)) {
        return;
      }
      this._triggerEvents.forEach(event => {
        if (typeof event === 'string') {
          target.removeEventListener(event, this._handleToggle);
        } else {
          const [inEvent, outEvent] = event;
          if (inEvent) {
            target.removeEventListener(inEvent, this._handleEnter);
          }
          if (outEvent) {
            target.removeEventListener(outEvent, this._handleLeave);
          }
        }
      });
    } catch (e) {} // eslint-disable-line no-empty
  }

  /**
   * @method handleTriggerEvent
   * @private
   */
  handleTriggerEvent(handler, e) {
    const overlayElement = this.overlayElement;
    if (overlayElement && e.target instanceof Node && overlayElement.contains(e.target)) {
      return;
    }
    return handler.call(this, e);
  }
  _handleEnter(e) {
    this.handleTriggerEvent(this.enter, e);
  }
  _handleLeave(e) {
    this.handleTriggerEvent(this.leave, e);
  }
  _handleToggle(e) {
    this.handleTriggerEvent(this.toggle, e);
  }
  close() {
    // Make sure our click state is off, otherwise the next click would
    // close the already-closed tooltip/popover. We don't need to worry
    // about this for hover/focus because those aren't "stateful" toggle
    // events like click.
    this.click = false;
    this.hide();
  }
  setup() {
    if (typeof FastBoot !== 'undefined') {
      // ember-render-helpers calls this also in FastBoot, so guard against this
      return;
    }
    if (typeof this._parentFinder === 'string') {
      return;
    }
    let parent = this._parentFinder.parentNode;
    if (!(parent instanceof Element)) {
      return;
    }
    // In the rare case of using FastBoot w/ rehydration, the parent finder TextNode rendered by FastBoot will be reused,
    // so our own instance on the component is not rendered, only exists here as detached from DOM and thus has no parent.
    // In this case we try to use Ember's private API as a fallback.
    // Related: https://github.com/emberjs/rfcs/issues/168
    if (!parent) {
      try {
        parent = getViewBounds(this).parentElement;
      } catch (e) {
        // we catch the possibly broken private API call, the component can still work if the trigger element is defined
        // using a CSS selector.
      }
    }
    this._parent = parent;

    // Look for target element after rendering has finished, in case the target DOM element is rendered *after* us
    // see https://github.com/kaliber5/ember-bootstrap/issues/1329
    schedule('afterRender', () => {
      this.triggerTargetElement = this.getTriggerTargetElement();
      this.addListeners();
      if (this.visible) {
        next(this, this.show);
      }
    });
  }
  showOrHide() {
    if (this.args.visible) {
      next(this, this.show);
    } else {
      next(this, this.hide);
    }
  }
  willDestroy() {
    super.willDestroy();
    this.removeListeners();
  }
}, _descriptor = _applyDecoratedDescriptor(_class.prototype, "placement", [arg$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'top';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "autoPlacement", [arg$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "visible", [arg$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "_inDom", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "fade", [arg$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "showHelp", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return this.visible;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "delay", [arg$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "delayShow", [arg$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return this.args.delay ?? 0;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "delayHide", [arg$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return this.args.delay ?? 0;
  }
}), _descriptor0 = _applyDecoratedDescriptor(_class.prototype, "transitionDuration", [arg$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 150;
  }
}), _descriptor1 = _applyDecoratedDescriptor(_class.prototype, "viewportSelector", [arg$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'body';
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "viewportPadding", [arg$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0;
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "triggerElement", [arg$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "triggerEvents", [arg$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'hover focus';
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "usesTransition", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "overlayElement", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, "_handleEnter", [action], Object.getOwnPropertyDescriptor(_class.prototype, "_handleEnter"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "_handleLeave", [action], Object.getOwnPropertyDescriptor(_class.prototype, "_handleLeave"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "_handleToggle", [action], Object.getOwnPropertyDescriptor(_class.prototype, "_handleToggle"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "close", [action], Object.getOwnPropertyDescriptor(_class.prototype, "close"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setup", [action], Object.getOwnPropertyDescriptor(_class.prototype, "setup"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "showOrHide", [action], Object.getOwnPropertyDescriptor(_class.prototype, "showOrHide"), _class.prototype), _class);

export { ContextualHelp as default };
//# sourceMappingURL=bs-contextual-help.js.map
