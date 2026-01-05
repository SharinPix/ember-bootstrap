import { _ as _applyDecoratedDescriptor, a as _initializerDefineProperty } from '../../_rollupPluginBabelHelpers-hULyhLkN.js';
import Component from '@glimmer/component';
import { scheduleOnce } from '@ember/runloop';
import waitForTransitionEnd from '../../utils/transition-end.js';
import arg from '../../utils/decorators/uses-transition.js';
import { guidFor } from '@ember/object/internals';
import { ref } from 'ember-ref-bucket';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n<div\n  class=\"tab-pane {{if this.showContent \"show\"}} {{if this.active \"active\"}} {{if this.usesTransition \"fade\"}}\"\n  role=\"tabpanel\"\n  ...attributes\n  {{create-ref \"mainNode\"}}\n  {{did-insert this.updateActive @active}}\n  {{did-update this.showHide this.isActive}}\n>\n  {{yield}}\n</div>");

var _dec, _dec2, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;
let TabPane = (_dec = ref('mainNode'), _dec2 = arg('fade'), _class = class TabPane extends Component {
  /**
   * @property id
   * @type string
   * @public
   */
  get id() {
    return this.args.id ?? guidFor(this);
  }

  /**
   * @property activeId
   * @private
   */
  get activeId() {
    return this.args.activeId ?? null;
  }

  /**
   * True if this pane is active (visible)
   *
   * @property isActive
   * @type boolean
   * @readonly
   * @private
   */
  get isActive() {
    return this.activeId === this.id;
  }

  /**
   * Used to apply Bootstrap's "active" class
   *
   * @property active
   * @type boolean
   * @default false
   * @private
   */

  /**
   * The title for this tab pane. This is used by the `bs-tab` component to automatically generate
   * the tab navigation.
   * See the [Components.Tab](Components.Tab.html) for examples.
   *
   * @property title
   * @type string
   * @default null
   * @public
   */
  get title() {
    return this.args.title ?? null;
  }

  /**
   * An optional group title used by the `bs-tab` component to group all panes with the same group title
   * under a common drop down in the tab navigation.
   * See the [Components.Tab](Components.Tab.html) for examples.
   *
   * @property groupTitle
   * @type string
   * @default null
   * @public
   */
  get groupTitle() {
    return this.args.groupTitle ?? null;
  }

  /**
   * Use fade animation when switching tabs.
   *
   * @property fade
   * @type boolean
   * @private
   */
  get fade() {
    return this.args.fade ?? true;
  }

  /**
   * The duration of the fade out animation
   *
   * @property fadeDuration
   * @type number
   * @default 150
   * @private
   */
  get fadeDuration() {
    return this.args.fadeDuration ?? 150;
  }

  /**
   * Use CSS transitions?
   *
   * @property usesTransition
   * @type boolean
   * @readonly
   * @private
   */

  /**
   * Show the pane
   *
   * @method show
   * @protected
   */
  show() {
    if (this.usesTransition) {
      if (!this._element) {
        // _element is initially set by `{{create-ref}}` which happens in next run loop, so can be undefined here.
        this.active = true;
        this.showContent = true;
      } else {
        waitForTransitionEnd(this._element, this.fadeDuration).then(() => {
          if (!this.isDestroyed) {
            this.active = true;
            this.showContent = true;
          }
        });
      }
    } else {
      this.active = true;
    }
  }

  /**
   * Hide the pane
   *
   * @method hide
   * @protected
   */
  hide() {
    if (this.usesTransition) {
      waitForTransitionEnd(this._element, this.fadeDuration).then(() => {
        if (!this.isDestroyed) {
          this.active = false;
        }
      });
      this.showContent = false;
    } else {
      this.active = false;
    }
  }
  showHide() {
    if (this.isActive) {
      this.show();
    } else {
      this.hide();
    }
  }
  _setActive() {
    this.active = this.isActive;
    this.showContent = this.isActive && this.fade;
  }
  constructor(owner, args) {
    super(owner, args);
    /**
     * @property id
     * @type null | HTMLElement
     */
    _initializerDefineProperty(this, "_element", _descriptor, this);
    _initializerDefineProperty(this, "active", _descriptor2, this);
    /**
     * Used to trigger the Bootstrap visibility classes.
     *
     * @property showContent
     * @type boolean
     * @default false
     * @private
     */
    _initializerDefineProperty(this, "showContent", _descriptor3, this);
    _initializerDefineProperty(this, "usesTransition", _descriptor4, this);
    args.registerChild?.(this);

    // isActive comes from parent component, so only available after render...
    scheduleOnce('afterRender', this, this._setActive);
  }
  willDestroy() {
    super.willDestroy();
    this.args.unregisterChild?.(this);
  }
  updateActive() {
    this.active = this.args.active;
  }
  updateShowContent() {
    this.showContent = this.args.showContent;
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
    return this.args.active ?? false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "showContent", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return this.args.showContent ?? false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "usesTransition", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, "showHide", [action], Object.getOwnPropertyDescriptor(_class.prototype, "showHide"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateActive", [action], Object.getOwnPropertyDescriptor(_class.prototype, "updateActive"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateShowContent", [action], Object.getOwnPropertyDescriptor(_class.prototype, "updateShowContent"), _class.prototype), _class);
setComponentTemplate(TEMPLATE, TabPane);

export { TabPane as default };
//# sourceMappingURL=pane.js.map
