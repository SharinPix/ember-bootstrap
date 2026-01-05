import { _ as _applyDecoratedDescriptor, a as _initializerDefineProperty } from '../../_rollupPluginBabelHelpers-hULyhLkN.js';
import Component from '@glimmer/component';
import { next } from '@ember/runloop';
import { ref } from 'ember-ref-bucket';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { registerDestructor } from '@ember/destroyable';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<div\n  class=\"carousel-item {{if this.active \"active\"}} {{if this.left (if (macroCondition (macroGetOwnConfig \"isBS5\")) \"carousel-item-start\" \"carousel-item-left\")}} {{if this.next \"carousel-item-next\"}} {{if this.prev \"carousel-item-prev\"}} {{if this.right (if (macroCondition (macroGetOwnConfig \"isBS5\")) \"carousel-item-end\" \"carousel-item-right\")}}\"\n  ...attributes\n  {{create-ref \"mainNode\"}}\n  {{did-update this.presentationStateObserver @presentationState @currentSlide}}\n>\n  {{yield}}\n</div>");

var _dec, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
/**
  A visible user-defined slide.

  See [Components.Carousel](Components.Carousel.html) for examples.

  @class CarouselSlide
  @namespace Components
  @extends Component
  @public
 */
let CarouselSlide = (_dec = ref('mainNode'), _class = class CarouselSlide extends Component {
  /**
   * @private
   * @property isCurrentSlide
   * @type boolean
   */
  get isCurrentSlide() {
    return this.args.currentSlide === this;
  }

  /**
   * @private
   * @property isFollowingSlide
   * @type boolean
   */
  get isFollowingSlide() {
    return this.args.followingSlide === this;
  }

  /**
   * Slide is moving to the left.
   *
   * @property left
   * @type boolean
   * @private
   */

  constructor(owner, args) {
    super(owner, args);
    /**
     * @property _element
     * @type null | HTMLElement
     * @private
     */
    _initializerDefineProperty(this, "_element", _descriptor, this);
    /**
     * Defines slide visibility.
     *
     * @property active
     * @type boolean
     * @private
     */
    _initializerDefineProperty(this, "active", _descriptor2, this);
    _initializerDefineProperty(this, "left", _descriptor3, this);
    /**
     * Next to appear in a left sliding.
     *
     * @property next
     * @type boolean
     * @private
     */
    _initializerDefineProperty(this, "next", _descriptor4, this);
    /**
     * Next to appear in a right sliding.
     *
     * @property prev
     * @type boolean
     * @private
     */
    _initializerDefineProperty(this, "prev", _descriptor5, this);
    /**
     * Slide is moving to the right.
     *
     * @property right
     * @type boolean
     * @private
     */
    _initializerDefineProperty(this, "right", _descriptor6, this);
    args.registerChild?.(this);
    registerDestructor(this, () => {
      this.args.unregisterChild?.(this);
    });
  }

  /**
   * Coordinates the execution of a presentation.
   *
   * @method presentationStateObserver
   * @private
   */
  presentationStateObserver() {
    if (!this.active) {
      this.active = this.isCurrentSlide && this.args.presentationState === null;
    }
    const presentationState = this.args.presentationState;
    if (this.isCurrentSlide) {
      switch (presentationState) {
        case 'didTransition':
          this.currentSlideDidTransition();
          break;
        case 'willTransit':
          this.currentSlideWillTransit();
          break;
      }
    }
    if (this.isFollowingSlide) {
      switch (presentationState) {
        case 'didTransition':
          this.followingSlideDidTransition();
          break;
        case 'willTransit':
          this.followingSlideWillTransit();
          break;
      }
    }
  }

  /**
   * @method currentSlideDidTransition
   * @private
   */
  currentSlideDidTransition() {
    if (this.args.directionalClassName) {
      this[this.args.directionalClassName] = false;
    }
    this.active = false;
  }

  /**
   * @method currentSlideWillTransit
   * @private
   */
  currentSlideWillTransit() {
    this.active = true;
    next(this, function () {
      if (this.args.directionalClassName) {
        this[this.args.directionalClassName] = true;
      }
    });
  }

  /**
   * @method followingSlideDidTransition
   * @private
   */
  followingSlideDidTransition() {
    this.active = true;
    if (this.args.directionalClassName) {
      this[this.args.directionalClassName] = false;
    }
    if (this.args.orderClassName) {
      this[this.args.orderClassName] = false;
    }
  }

  /**
   * @method followingSlideWillTransit
   * @private
   */
  followingSlideWillTransit() {
    if (this.args.orderClassName) {
      this[this.args.orderClassName] = true;
    }
    next(this, () => {
      this.reflow();
      if (this.args.directionalClassName) {
        this[this.args.directionalClassName] = true;
      }
    });
  }

  /**
   * Makes things more stable, especially when fast changing.
   */
  reflow() {
    this._element?.offsetHeight;
  }
}, _descriptor = _applyDecoratedDescriptor(_class.prototype, "_element", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "active", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return this.isCurrentSlide && this.args.presentationState === null;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "left", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "next", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "prev", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "right", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _applyDecoratedDescriptor(_class.prototype, "presentationStateObserver", [action], Object.getOwnPropertyDescriptor(_class.prototype, "presentationStateObserver"), _class.prototype), _class);
setComponentTemplate(TEMPLATE, CarouselSlide);

export { CarouselSlide as default };
//# sourceMappingURL=slide.js.map
