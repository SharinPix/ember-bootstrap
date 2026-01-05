import { _ as _applyDecoratedDescriptor, b as _defineProperty, a as _initializerDefineProperty } from '../_rollupPluginBabelHelpers-hULyhLkN.js';
import { action } from '@ember/object';
import CarouselSlide from './bs-carousel/slide.js';
import Component from '@glimmer/component';
import { schedule } from '@ember/runloop';
import { task, timeout } from 'ember-concurrency';
import { tracked } from '@glimmer/tracking';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<div\n  {{!-- template-lint-disable no-positive-tabindex --}}\n  tabindex={{this.tabindex}}\n  class=\"carousel slide {{if this.carouselFade \"carousel-fade\"}}\"\n  ...attributes\n  {{on \"keydown\" this.handleKeyDown}}\n  {{on \"mouseenter\" this.handleMouseEnter}}\n  {{on \"mouseleave\" this.handleMouseLeave}}\n  {{did-update this.childSlidesObserver this.childSlides this.autoPlay}}\n  {{did-update this.indexObserver this.index}}\n>\n  {{#if this.showIndicators}}\n    {{#if (macroCondition (macroGetOwnConfig \"isBS5\"))}}\n      <div class=\"carousel-indicators\">\n        {{#each this.indicators as |indicator _index|}}\n          <button\n            data-bs-target\n            type=\"button\"\n            class={{if (bs-eq this.currentIndex _index) \"active\"}}\n            aria-current=\"{{bs-eq this.currentIndex _index}}\"\n            {{on \"click\" (fn this.toSlide _index)}}\n          />\n        {{/each}}\n      </div>\n    {{else}}\n      <ol class=\"carousel-indicators\">\n        {{#each this.indicators as |indicator _index|}}\n          <li\n            role=\"button\"\n            class={{if (bs-eq this.currentIndex _index) \"active\"}}\n            {{on \"click\" (fn this.toSlide _index)}}\n          />\n        {{/each}}\n      </ol>\n    {{/if}}\n\n  {{/if}}\n\n  <div class=\"carousel-inner\" role=\"listbox\">\n    {{yield\n      (hash\n        slide=(component (ensure-safe-component (bs-default @slideComponent (component \"bs-carousel/slide\")))\n          currentSlide=this.currentSlide\n          directionalClassName=this.directionalClassName\n          followingSlide=this.followingSlide\n          orderClassName=this.orderClassName\n          presentationState=this.presentationState\n          registerChild=this.registerChild\n          unregisterChild=this.unregisterChild\n        )\n      )\n    }}\n  </div>\n\n  {{#if this.showControls}}\n    <button class=\"carousel-control-prev\" type=\"button\" {{on \"click\" this.toPrevSlide}}>\n      <span aria-hidden=\"true\" class=\"carousel-control-prev-icon\"></span>\n      <span class={{if (macroCondition (macroGetOwnConfig \"isBS5\")) \"visually-hidden\" \"sr-only\"}}>{{this.prevControlLabel}}</span>\n    </button>\n    <button class=\"carousel-control-next\" type=\"button\" {{on \"click\" this.toNextSlide}}>\n      <span aria-hidden=\"true\" class=\"carousel-control-next-icon\"></span>\n      <span class={{if (macroCondition (macroGetOwnConfig \"isBS5\")) \"visually-hidden\" \"sr-only\"}}>{{this.nextControlLabel}}</span>\n    </button>\n  {{/if}}\n\n</div>");

var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor0;
/**
  Ember implementation of Bootstrap's Carousel. Supports all original features but API is partially different:

  | Description | Original | Component |
  | ------ | ------ | ------ |
  | Autoplays after first user event or on page load. | ride='carousel'\|false | autoPlay=false\|true |
  | Disable automatic cycle. | interval=false | interval=0 |
  | If first slide should follow last slide on "previous" event, the opposite will also be true for "next" event. | wrap=false\|true | wrap=false\|true |
  | Jumps into specific slide index | data-slide-to=n | index=n |
  | Keyboard events. | keyboard=false\|true | keyboard=false\|true |
  | Left-to-right or right-to-left sliding. | N/A |  ltr=false\|true |
  | Pause current cycle on mouse enter. | pause='hover'\|null | pauseOnMouseEnter=false\|true |
  | Show or hide controls  | Tag manipulation. | showControls=false\|true |
  | Show or hide indicators  | Tag manipulation. | showIndicators=false\|true |
  | Waiting time of slides in an automatic cycle. | interval=n | interval=n |

  Default settings are the same as the original, so you don't have to worry about changing parameters.

  ```hbs
  <BsCarousel as |car|>
    <car.slide>
      <img alt="First slide" src="slide1.jpg">
    </car.slide>
    <car.slide>
      <img alt="Second slide" src="slide2.jpg">
    </car.slide>
    <car.slide>
      <img alt="Third slide" src="slide3.jpg">
    </car.slide>
  </BsCarousel>
  ```

  To better understand the whole documentation, you should be aware of the following operations:

  | Operation | Description |
  | ------ | ------ |
  | Transition | Swaps two slides. |
  | Interval | Waiting time after a transition. |
  | Presentation | Represents a single transition, or a single interval, or the union of both. |
  | Cycle | Presents all slides until it reaches first or last slide. |
  | Wrap | wrap slides, cycles without stopping at first or last slide. |

  *Note that only invoking the component in a template as shown above is considered part of its public API. Extending from it (subclassing) is generally not supported, and may break at any time.*

  @class Carousel
  @namespace Components
  @extends Component
  @public
*/
let Carousel = (_dec = task({
  restartable: true
}), _dec2 = task({
  drop: true
}), _dec3 = task({
  restartable: true
}), _class = class Carousel extends Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "tabindex", '1');
    _initializerDefineProperty(this, "children", _descriptor, this);
    /**
     * Indicates the current index of the current slide.
     *
     * @property currentIndex
     * @private
     */
    _initializerDefineProperty(this, "currentIndex", _descriptor2, this);
    /**
     * Bootstrap style to indicate that a given slide should be moving to left/right.
     *
     * @property directionalClassName
     * @private
     * @type { 'left' | 'right' | null }
     */
    _initializerDefineProperty(this, "directionalClassName", _descriptor3, this);
    /**
     * Indicates the next slide index to move into.
     *
     * @property followingIndex
     * @private
     * @type number | null
     */
    _initializerDefineProperty(this, "followingIndex", _descriptor4, this);
    /**
     * If user is hovering its cursor on component.
     * This property is only manipulated when 'pauseOnMouseEnter' is true.
     *
     * @property isMouseHovering
     * @private
     * @type boolean
     */
    _initializerDefineProperty(this, "isMouseHovering", _descriptor5, this);
    /**
     * The class name to append to the next control link element.
     *
     * @property nextControlClassName
     * @type string
     * @private
     */
    /**
     * Bootstrap style to indicate the next/previous slide.
     *
     * @property orderClassName
     * @private
     * @type string
     */
    _initializerDefineProperty(this, "orderClassName", _descriptor6, this);
    /**
     * The current state of the current presentation, can be either "didTransition"
     * or "willTransit".
     *
     * @private
     * @property presentationState
     * @type { 'didTransition' | 'willTransit' | null }
     */
    _initializerDefineProperty(this, "presentationState", _descriptor7, this);
    /**
     * Action called after the slide has changed.
     *
     * @event onSlideChanged
     * @param toIndex
     * @public
     */
    /**
     * Do a presentation and calls itself to perform a cycle.
     *
     * @method cycle
     * @this Carousel
     * @private
     */
    _initializerDefineProperty(this, "cycle", _descriptor8, this);
    /**
     * @method transitioner
     * @this Carousel
     * @private
     */
    _initializerDefineProperty(this, "transitioner", _descriptor9, this);
    /**
     * Waits an interval time to start a cycle.
     *
     * @method waitIntervalToInitCycle
     * @this Carousel
     * @private
     */
    _initializerDefineProperty(this, "waitIntervalToInitCycle", _descriptor0, this);
  }
  /**
   * @property slideComponent
   * @type {String}
   * @private
   */

  /**
   * If a slide can turn to left, including corners.
   *
   * @private
   * @property canTurnToLeft
   */
  get canTurnToLeft() {
    return this.wrap || this.currentIndex > 0;
  }

  /**
   * If a slide can turn to right, including corners.
   *
   * @private
   * @property canTurnToRight
   */
  get canTurnToRight() {
    return this.wrap || this.currentIndex < this.childSlides.length - 1;
  }
  /**
   * All `CarouselSlide` child components.
   *
   * @private
   * @property childSlides
   * @readonly
   * @type array
   */
  get childSlides() {
    return this.children.filter(view => view instanceof (this.args.slideComponent ?? CarouselSlide));
  }

  /**
   * This observer is the entry point for real time insertion and removing of slides.
   *
   * @private
   * @property childSlidesObserver
   */
  childSlidesObserver() {
    const childSlides = this.childSlides;
    if (childSlides.length === 0) {
      return;
    }
    // Sets new current index
    let currentIndex = this.currentIndex;
    if (currentIndex >= childSlides.length) {
      currentIndex = childSlides.length - 1;
      this.currentIndex = currentIndex;
    }
    // Automatic sliding
    if (this.autoPlay) {
      this.waitIntervalToInitCycle.perform();
    }
    // Initial slide state
    this.presentationState = null;
  }
  /**
   * The current slide object that is going to be used by the nested slides components.
   *
   * @property currentSlide
   * @private
   *
   */
  get currentSlide() {
    return this.childSlides[this.currentIndex];
  }
  /**
   * The following slide object that is going to be used by the nested slides components.
   *
   * @property followingIndex
   * @private
   */
  get followingSlide() {
    return this.followingIndex != null ? this.childSlides[this.followingIndex] : undefined;
  }

  /**
   * @private
   * @property hasInterval
   * @type boolean
   */
  get hasInterval() {
    return this.interval > 0;
  }

  /**
   * This observer is the entry point for programmatically slide changing.
   *
   * @property indexObserver
   * @private
   */
  indexObserver() {
    this.toSlide(this.index);
  }

  /**
   * @property indicators
   * @private
   */
  get indicators() {
    return [...Array(this.childSlides.length)];
  }
  /**
   * The class name to append to the previous control link element.
   *
   * @property prevControlClassName
   * @type string
   * @private
   */

  /**
   * @private
   * @property shouldNotDoPresentation
   * @type boolean
   */
  get shouldNotDoPresentation() {
    return this.childSlides.length <= 1;
  }

  /**
   * @private
   * @property shouldRunAutomatically
   * @type boolean
   */
  get shouldRunAutomatically() {
    return this.hasInterval;
  }

  /**
   * Starts automatic sliding on page load.
   * This parameter has no effect if interval is less than or equal to zero.
   *
   * @default false
   * @property autoPlay
   * @public
   * @type boolean
   */
  get autoPlay() {
    return this.args.autoPlay ?? false;
  }

  /**
   * If false will hard stop on corners, i.e., first slide won't make a transition to the
   * last slide and vice versa.
   *
   * @default true
   * @property wrap
   * @public
   * @type boolean
   */
  get wrap() {
    return this.args.wrap ?? true;
  }

  /**
   * Index of starting slide.
   *
   * @default 0
   * @property index
   * @public
   * @type number
   */
  get index() {
    return this.args.index ?? 0;
  }

  /**
   * Waiting time before automatically show another slide.
   * Automatic sliding is canceled if interval is less than or equal to zero.
   *
   * @default 5000
   * @property interval
   * @public
   * @type number
   */
  get interval() {
    return this.args.interval ?? 5000;
  }

  /**
   * Should bind keyboard events into sliding.
   *
   * @default true
   * @property keyboard
   * @public
   * @type boolean
   */
  get keyboard() {
    return this.args.keyboard ?? true;
  }

  /**
   * If automatic sliding should be left-to-right or right-to-left.
   * This parameter has no effect if interval is less than or equal to zero.
   *
   * @default true
   * @property ltr
   * @public
   * @type boolean
   */
  get ltr() {
    return this.args.ltr ?? true;
  }

  /**
   * The next control icon to be displayed.
   *
   * @default null
   * @property nextControlIcon
   * @type string
   * @public
   */

  /**
   * Label for screen readers, defaults to 'Next'.
   *
   * @default 'Next'
   * @property nextControlLabel
   * @type string
   * @public
   */
  get nextControlLabel() {
    return this.args.nextControlLabel ?? 'Next';
  }

  /**
   * Pauses automatic sliding if mouse cursor is hovering the component.
   * This parameter has no effect if interval is less than or equal to zero.
   *
   * @default true
   * @property pauseOnMouseEnter
   * @public
   * @type boolean
   */
  get pauseOnMouseEnter() {
    return this.args.pauseOnMouseEnter ?? true;
  }

  /**
   * The previous control icon to be displayed.
   *
   * @default null
   * @property prevControlIcon
   * @type string
   * @public
   */

  /**
   * Label for screen readers, defaults to 'Previous'.
   *
   * @default 'Previous'
   * @property prevControlLabel
   * @type string
   * @public
   */
  get prevControlLabel() {
    return this.args.prevControlLabel ?? 'Previous';
  }

  /**
   * Show or hide controls.
   *
   * @default true
   * @property showControls
   * @public
   * @type boolean
   */
  get showControls() {
    return this.args.showControls ?? true;
  }

  /**
   * Show or hide indicators.
   *
   * @default true
   * @property showIndicators
   * @public
   * @type boolean
   */
  get showIndicators() {
    return this.args.showIndicators ?? true;
  }

  /**
   * The duration of the slide transition.
   * You should also change this parameter in Bootstrap CSS file.
   *
   * @default 600
   * @property transitionDuration
   * @public
   * @type number
   */
  get transitionDuration() {
    return this.args.transitionDuration ?? 600;
  }

  /**
   * The type slide transition to perform.
   * Options are 'fade' or 'slide'. Note: BS4 only
   *
   * @default 'slide'
   * @property transition
   * @public
   * @type string
   */
  get transition() {
    return this.args.transition ?? 'slide';
  }
  get carouselFade() {
    return this.transition === 'fade';
  }
  toSlide(toIndex) {
    if (this.currentIndex === toIndex || this.shouldNotDoPresentation) {
      return;
    }
    this.assignClassNameControls(toIndex);
    this.setFollowingIndex(toIndex);
    if (this.shouldRunAutomatically === false || this.isMouseHovering) {
      this.transitioner.perform();
    } else {
      this.cycle.perform();
    }
    this.args.onSlideChanged?.(toIndex);
  }
  toNextSlide() {
    if (this.canTurnToRight) {
      this.toSlide(this.currentIndex + 1);
    }
  }
  toPrevSlide() {
    if (this.canTurnToLeft) {
      this.toSlide(this.currentIndex - 1);
    }
  }

  /**
   * Indicates what class names should be applicable to the current transition slides.
   *
   * @method assignClassNameControls
   * @private
   */
  assignClassNameControls(toIndex) {
    if (toIndex < this.currentIndex) {
      this.directionalClassName = 'right';
      this.orderClassName = 'prev';
    } else {
      this.directionalClassName = 'left';
      this.orderClassName = 'next';
    }
  }
  handleMouseEnter() {
    if (this.pauseOnMouseEnter) {
      this.isMouseHovering = true;
      this.cycle.cancelAll();
      this.waitIntervalToInitCycle.cancelAll();
    }
  }
  handleMouseLeave() {
    if (this.pauseOnMouseEnter && (this.transitioner.last !== null || this.waitIntervalToInitCycle.last !== null)) {
      this.isMouseHovering = false;
      this.waitIntervalToInitCycle.perform();
    }
  }
  handleKeyDown(e) {
    const code = e.keyCode || e.which;
    if (this.keyboard === false || !(e.target instanceof HTMLElement) || /input|textarea/i.test(e.target.tagName)) {
      return;
    }
    switch (code) {
      case 37:
        this.toPrevSlide();
        break;
      case 39:
        this.toNextSlide();
        break;
    }
  }

  /**
   * Sets the following slide index within the lower and upper bounds.
   *
   * @method setFollowingIndex
   * @private
   */
  setFollowingIndex(toIndex) {
    const slidesLengthMinusOne = this.childSlides.length - 1;
    if (toIndex > slidesLengthMinusOne) {
      this.followingIndex = 0;
    } else if (toIndex < 0) {
      this.followingIndex = slidesLengthMinusOne;
    } else {
      this.followingIndex = toIndex;
    }
  }

  /**
   * Coordinates the correct slide movement direction.
   *
   * @method toAppropriateSlide
   * @private
   */
  toAppropriateSlide() {
    if (this.ltr) {
      this.toNextSlide();
    } else {
      this.toPrevSlide();
    }
  }
  // This means any component. Component and Component<unknown> don't work for this purpose.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerChild(element) {
    schedule('actions', this, () => {
      this.children = [...this.children, element];
    });
  }
  // This means any component. Component and Component<unknown> don't work for this purpose.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  unregisterChild(element) {
    schedule('actions', this, () => {
      this.children = this.children.filter(value => value !== element);
    });
  }
}, _descriptor = _applyDecoratedDescriptor(_class.prototype, "children", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
}), _applyDecoratedDescriptor(_class.prototype, "childSlidesObserver", [action], Object.getOwnPropertyDescriptor(_class.prototype, "childSlidesObserver"), _class.prototype), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "currentIndex", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return this.index;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "directionalClassName", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "followingIndex", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _applyDecoratedDescriptor(_class.prototype, "indexObserver", [action], Object.getOwnPropertyDescriptor(_class.prototype, "indexObserver"), _class.prototype), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "isMouseHovering", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "orderClassName", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "presentationState", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "cycle", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return function* () {
      yield this.transitioner.perform();
      yield timeout(this.interval);
      this.toAppropriateSlide();
    };
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "transitioner", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return function* () {
      this.presentationState = 'willTransit';
      yield timeout(this.transitionDuration);
      this.presentationState = 'didTransition';
      // Must change current index after execution of 'presentationStateObserver' method
      // from child components.
      yield new Promise(resolve => {
        schedule('afterRender', this, () => {
          if (this.followingIndex !== undefined && this.followingIndex !== null) {
            this.currentIndex = this.followingIndex;
          }
          resolve();
        });
      });
    };
  }
}), _descriptor0 = _applyDecoratedDescriptor(_class.prototype, "waitIntervalToInitCycle", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return function* () {
      if (this.shouldRunAutomatically === false) {
        return;
      }
      yield timeout(this.interval);
      this.toAppropriateSlide();
    };
  }
}), _applyDecoratedDescriptor(_class.prototype, "toSlide", [action], Object.getOwnPropertyDescriptor(_class.prototype, "toSlide"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toNextSlide", [action], Object.getOwnPropertyDescriptor(_class.prototype, "toNextSlide"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toPrevSlide", [action], Object.getOwnPropertyDescriptor(_class.prototype, "toPrevSlide"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleMouseEnter", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleMouseEnter"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleMouseLeave", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleMouseLeave"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleKeyDown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleKeyDown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "registerChild", [action], Object.getOwnPropertyDescriptor(_class.prototype, "registerChild"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "unregisterChild", [action], Object.getOwnPropertyDescriptor(_class.prototype, "unregisterChild"), _class.prototype), _class);
setComponentTemplate(TEMPLATE, Carousel);

export { Carousel as default };
//# sourceMappingURL=bs-carousel.js.map
