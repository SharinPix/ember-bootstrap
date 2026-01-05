import { _ as _applyDecoratedDescriptor, a as _initializerDefineProperty } from '../_rollupPluginBabelHelpers-hULyhLkN.js';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { later } from '@ember/runloop';
import arg from '../utils/decorators/uses-transition.js';
import arg$1 from '../utils/decorators/arg.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<div\n  class=\"{{unless this.hidden \"alert\"}} {{if this.fade \"fade\"}} {{if this.dismissible \"alert-dismissible\"}} {{bs-type-class \"alert\" @type}} {{if this.showAlert \"show\"}}\"\n  ...attributes\n  {{did-update this.showOrHide this._visible}}\n  {{did-update this.updateVisibility @visible}}\n>\n  {{#unless this.hidden}}\n    {{#if this.dismissible}}\n      <button type=\"button\" class={{if (macroCondition (macroGetOwnConfig \"isBS5\")) \"btn-close\" \"close\"}} aria-label=\"Close\" {{on \"click\" this.dismiss}}>\n        {{#if (macroCondition (macroGetOwnConfig \"isBS4\"))}}<span aria-hidden=\"true\">&times;</span>{{/if}}\n      </button>\n    {{/if}}\n\n    {{#if (has-block \"header\")}}\n      {{#let (element (bs-default @headerTag \"h4\")) as |Tag|}}\n        <Tag class=\"alert-heading\">\n          {{yield to=\"header\"}}\n        </Tag>\n      {{/let}}\n    {{/if}}\n\n    {{#if (has-block \"body\")}}\n      {{yield to=\"body\"}}\n    {{else}}\n      {{yield}}\n    {{/if}}\n  {{/unless}}\n</div>");

var _dec, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
/**
  Implements [Bootstrap alerts](http://getbootstrap.com/components/#alerts)

  ### Usage

  By default, it is a user dismissible alert with a fade out animation, both of which can be disabled. Be sure to set the
  `type` property for proper styling.

  ```hbs
  <BsAlert @type="success">
    <strong>Well done!</strong> You successfully read this important alert message.
  </BsAlert>
  ```

  Optionally you can render a header for the alert using named blocks syntax:

  ```hbs
  <BsAlert>
    <:header>
      Well done!
    </:header>
    <:body>
      You successfully read this important alert message.
    </:body>
  </BsAlert>
  ```

  The header is rendered using a `<h4>` element by default. You can customize
  that one by setting `@headerTag` argument of `<BsAlert>`.

  Using named block syntax as shown above may require installing
  [ember-named-blocks-polyfill](https://github.com/ember-polyfills/ember-named-blocks-polyfill)
  in your project depending on the Ember version used.

  *Note that only invoking the component in a template as shown above is considered part of its public API. Extending from it (subclassing) is generally not supported, and may break at any time.*

  @class Alert
  @namespace Components
  @extends Glimmer.Component
  @public
*/
let Alert = (_dec = arg('fade'), _class = class Alert extends Component {
  constructor(...args) {
    super(...args);
    /**
     * A dismissible alert will have a close button in the upper right corner, that the user can click to dismiss
     * the alert.
     *
     * @property dismissible
     * @type boolean
     * @default true
     * @public
     */
    _initializerDefineProperty(this, "dismissible", _descriptor, this);
    /**
     * If true the alert is completely hidden. Will be set when the fade animation has finished.
     *
     * @property hidden
     * @type boolean
     * @default false
     * @readonly
     * @private
     */
    _initializerDefineProperty(this, "hidden", _descriptor2, this);
    /**
     * @property _visible
     * @private
     */
    // Changes to `@visible` argument are observed implicitly through a `{{did-update}}`
    // template helper and the `updateVisibility` method.
    //
    // We should evaluate if we can refactor to localCopy decorator from the tracked-toolbox
    // to reduce complexity.
    //
    // eslint-disable-next-line ember/no-tracked-properties-from-args
    _initializerDefineProperty(this, "_visible", _descriptor3, this);
    /**
     * Set to false to disable the fade out animation when hiding the alert.
     *
     * @property fade
     * @type boolean
     * @default true
     * @public
     */
    _initializerDefineProperty(this, "fade", _descriptor4, this);
    /**
     * The duration of the fade out animation
     *
     * @property fadeDuration
     * @type number
     * @default 150
     * @public
     */
    _initializerDefineProperty(this, "fadeDuration", _descriptor5, this);
    /**
     * HTML tag to be used for the header
     *
     * @property headerTag
     * @type string
     * @default 'h4'
     * @public
     */
    /**
     * Property for type styling
     *
     * For the available types see the [Bootstrap docs](https://getbootstrap.com/docs/4.3/components/alerts/)
     *
     * @property type
     * @type String
     * @public
     */
    /**
     * Use CSS transitions?
     *
     * @property usesTransition
     * @type boolean
     * @readonly
     * @private
     */
    _initializerDefineProperty(this, "usesTransition", _descriptor6, this);
  }
  /**
   * This property controls if the alert should be visible. If false it might still be in the DOM until the fade animation
   * has completed.
   *
   * When the alert is dismissed by user interaction this property will not update by using two-way bindings in order
   * to follow DDAU best practices. If you want to react to such changes, subscribe to the `onDismiss` action
   *
   * @property visible
   * @type boolean
   * @default true
   * @public
   */
  get visible() {
    return this._visible ?? true;
  }
  get showAlert() {
    return this.visible && this.args.fade !== false;
  }
  /**
   * The action to be sent after the alert has been dismissed (including the CSS transition).
   *
   * @event onDismissed
   * @public
   */

  /**
   * The action is called when the close button is clicked.
   *
   * You can return false to prevent closing the alert automatically, and do that in your action by
   * setting `visible` to false.
   *
   * @event onDismiss
   * @public
   */

  dismiss() {
    if (this.args.onDismiss?.() !== false) {
      this._visible = false;
    }
  }

  /**
   * Call to make the alert visible again after it has been hidden
   *
   * @method show
   * @private
   */
  show() {
    this.hidden = false;
  }

  /**
   * Call to hide the alert. If the `fade` property is true, this will fade out the alert before being finally
   * dismissed.
   *
   * @method hide
   * @private
   */
  hide() {
    if (this.hidden) {
      return;
    }
    if (this.usesTransition) {
      later(this, function () {
        if (!this.isDestroyed) {
          this.hidden = true;
          this.args.onDismissed?.();
        }
      }, this.fadeDuration);
    } else {
      this.hidden = true;
      this.args.onDismissed?.();
    }
  }
  showOrHide() {
    if (this.visible) {
      this.show();
    } else {
      this.hide();
    }
  }
  updateVisibility() {
    this._visible = this.args.visible;
  }
}, _descriptor = _applyDecoratedDescriptor(_class.prototype, "dismissible", [arg$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "hidden", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return !this.visible;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "_visible", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return this.args.visible;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "fade", [arg$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "fadeDuration", [arg$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 150;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "usesTransition", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, "dismiss", [action], Object.getOwnPropertyDescriptor(_class.prototype, "dismiss"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "showOrHide", [action], Object.getOwnPropertyDescriptor(_class.prototype, "showOrHide"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateVisibility", [action], Object.getOwnPropertyDescriptor(_class.prototype, "updateVisibility"), _class.prototype), _class);
setComponentTemplate(TEMPLATE, Alert);

export { Alert as default };
//# sourceMappingURL=bs-alert.js.map
