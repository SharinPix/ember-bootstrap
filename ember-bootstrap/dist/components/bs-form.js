import { _ as _applyDecoratedDescriptor, a as _initializerDefineProperty } from '../_rollupPluginBabelHelpers-hULyhLkN.js';
import Component from '@glimmer/component';
import { action, set } from '@ember/object';
import { assert } from '@ember/debug';
import { isPresent } from '@ember/utils';
import { next } from '@ember/runloop';
import { macroCondition, getOwnConfig } from '@embroider/macros';
import arg from '../utils/decorators/arg.js';
import { cached, tracked } from '@glimmer/tracking';
import { ref } from 'ember-ref-bucket';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n{{!-- template-lint-disable no-invalid-interactive --}}\n<form\n  novalidate={{this.hasValidator}}\n  class={{this.layoutClass}}\n  ...attributes\n  {{on \"keypress\" this.handleKeyPress}}\n  {{on \"submit\" this.handleSubmit}}\n  {{create-ref \"formElement\"}}\n>\n  {{yield\n    (hash\n      element=(component (ensure-safe-component (bs-default @elementComponent (component \"bs-form/element\")))\n        model=this.model\n        formLayout=this.formLayout\n        horizontalLabelGridClass=this.horizontalLabelGridClass\n        showAllValidations=this.showAllValidations\n        _disabled=@disabled\n        _readonly=@readonly\n        onChange=this.elementChanged\n        _onChange=this.resetSubmissionState\n      )\n      isSubmitting=this.isSubmitting\n      isSubmitted=this.isSubmitted\n      isRejected=this.isRejected\n      model=this.model\n      resetSubmissionState=this.resetSubmissionState\n      submit=this.doSubmit\n      submitButton=(component (ensure-safe-component (bs-default @submitButtonComponent (component \"bs-button\")))\n        type=\"primary\"\n        state=this.submitButtonState\n        _disabled=this.isSubmitting\n        attrTypePrivateWorkaround=\"submit\"\n      )\n    )\n  }}\n</form>\n");

var _dec, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
let Form = (_dec = ref('formElement'), _class = class Form extends Component {
  /**
   * Bootstrap form class name (computed)
   *
   * @property layoutClass
   * @type string
   * @readonly
   * @protected
   *
   */
  get layoutClass() {
    let layout = this.formLayout;
    if (macroCondition(getOwnConfig().isBS4)) {
      return layout === 'inline' ? 'form-inline' : null;
    } else {
      return null;
    }
  }

  /**
   * Set a model that this form should represent. This serves several purposes:
   *
   * * child `Components.FormElement`s can access and bind to this model by their `property`
   * * when the model supports validation by using the [ember-validations](https://github.com/dockyard/ember-validations) mixin,
   * child `Components.FormElement`s will look at the validation information of their `property` and render their form group accordingly.
   * Moreover, the form's `submit` event handler will validate the model and deny submitting if the model is not validated successfully.
   *
   * `<BsForm>` yields the form's model as `form` property:
   *
   * ```hbs
   * <BsForm @model={{this.formModel}} as |form|>
   *   {{! this.formModel === form.model }}
   * </BsForm>
   * ```
   *
   * @property model
   * @type object
   * @public
   */
  get model() {
    return this.args.model ?? {};
  }

  /**
   * Set the layout of the form to either "vertical", "horizontal" or "inline". See http://getbootstrap.com/css/#forms-inline and http://getbootstrap.com/css/#forms-horizontal
   *
   * @property formLayout
   * @type string
   * @public
   */

  /**
   * @property elementComponent
   * @type {String}
   * @private
   */

  /**
   * @property submitButtonComponent
   * @type {String}
   * @private
   */

  /**
   * `isSubmitting` is `true` after `submit` event has been triggered and until Promise returned by `onSubmit` is
   * fulfilled. If `validate` returns a Promise that one is also taken into consideration.
   *
   * If multiple concurrent submit events are fired, it stays `true` until all submit events have been fulfilled.
   *
   * @property isSubmitting
   * @type {Boolean}
   * @readonly
   * @private
   */
  get isSubmitting() {
    return this.pendingSubmissions > 0;
  }

  /**
   * `isSubmitted` is `true` if last submission was successful.
   * A change to any form element resets its value to `false`.
   *
   * If not using `Components.FormElement`, `resetSubmissionState` action must be triggered on each change to reset
   * form's submission state.
   *
   * @property isSubmitted
   * @type {Boolean}
   * @private
   */

  /**
   * State of the form expressed as state values expected by `<BsButton>`.
   *
   * @property submitButtonState
   * @type {String}
   * @private
   */
  get submitButtonState() {
    if (this.isSubmitting) {
      return 'pending';
    }
    if (this.isSubmitted) {
      return 'fulfilled';
    }
    if (this.isRejected) {
      return 'rejected';
    }
    return 'default';
  }

  /**
   * Count of pending submissions.
   *
   * @property pendingSubmissions
   * @type {Integer}
   * @private
   */

  /**
   * If true, after successful validation and upon submitting the form, all current element validations will be hidden.
   * If the form remains visible, the user would have to focus out of elements of submit the form again for the
   * validations to show up again, as if a fresh new form component had been rendered.
   *
   * @property hideValidationsOnSubmit
   * @type {Boolean}
   * @default false
   * @public
   */

  /**
   * If set to true the `readonly` property of all yielded form elements will be set, making their form controls read-only.
   *
   * @property readonly
   * @type boolean
   * @default false
   * @public
   */

  /**
   * If set to true the `disabled` property of all yielded form elements will be set, making their form controls disabled.
   *
   * @property disabled
   * @type boolean
   * @default false
   * @public
   */

  /**
   * Validate hook which will return a promise that will either resolve if the model is valid
   * or reject if it's not. This should be overridden to add validation support.
   *
   * @method validate
   * @param {Object} model
   * @param {HTMLFormElement} form
   * @return {Promise}
   * @public
   */
  validate(model, form) {} // eslint-disable-line no-unused-vars

  /**
   * @property _showAllValidations
   * @type boolean
   * @default undefined
   * @private
   */

  get showAllValidations() {
    return this.showValidations ?? this._showAllValidations;
  }
  set showAllValidations(showAllValidations) {
    this._showAllValidations = showAllValidations;
  }

  /**
   * Controls visibility of validation errors. If `null` (default) validation errors are shown after user
   * interactions like form submission, focus out event of input fields etc. If `true` all validation errors are shown
   * immediately independently of user interactions. If `false` validation errors are not shown in any case (but
   * prevent form submission if form is invalid).
   *
   * @property showValidations
   * @type Boolean|null
   * @default null
   * @public
   */

  /**
   * Action is called before the form is validated (if possible) and submitted.
   *
   * @event onBefore
   * @param { Object } model  The form's `model`
   * @public
   */

  /**
   * Action is called when submit has been triggered and the model has passed all validations (if present).
   *
   * @event onSubmit
   * @param { Object } model  The form's `model`
   * @param { Object } result The returned result from the validate method, if validation is available
   * @public
   */

  /**
   * Action is called when validation of the model has failed.
   *
   * @event onInvalid
   * @param { Object } model  The form's `model`
   * @param { Object } error
   * @public
   */

  /**
   * Submit handler that will send the default action ("action") to the controller when submitting the form.
   *
   * If there is a supplied `model` that supports validation (`hasValidator`) the model will be validated before, and
   * only if validation is successful the default action will be sent. Otherwise, an "invalid" action will be sent, and
   * all the `showValidation` property of all child `Components.FormElement`s will be set to true, so error state and
   * messages will be shown automatically.
   *
   * @method submit
   * @private
   */
  submitHandler(e, throwValidationErrors = true) {
    if (e) {
      e.preventDefault();
    }
    if (this.preventConcurrency && this.isSubmitting) {
      return Promise.resolve();
    }
    let model = this.model;
    this.pendingSubmissions++;
    this.args.onBefore?.(model);
    return Promise.resolve().then(() => {
      return this.hasValidator ? this.validate(model, this._element) : null;
    }).then(record => {
      if (this.args.hideValidationsOnSubmit === true) {
        this.showAllValidations = false;
      }
      return Promise.resolve().then(() => {
        return this.args.onSubmit?.(model, record);
      }).then(() => {
        if (this.isDestroyed) {
          return;
        }
        this.isSubmitted = true;
      }).catch(error => {
        if (this.isDestroyed) {
          return;
        }
        this.isRejected = true;
        throw error;
      }).finally(() => {
        if (this.isDestroyed) {
          return;
        }
        this.pendingSubmissions--;

        // reset forced hiding of validations
        if (this.showAllValidations === false) {
          next(() => this.showAllValidations = undefined);
        }
      });
    }, error => {
      return Promise.resolve().then(() => {
        return this.args.onInvalid?.(model, error);
      }).finally(() => {
        if (this.isDestroyed) {
          return;
        }
        this.showAllValidations = true;
        this.isRejected = true;
        this.pendingSubmissions = this.pendingSubmissions - 1;
        if (throwValidationErrors) {
          throw error;
        }
      });
    });
  }
  handleSubmit(event) {
    this.submitHandler(event, false);
  }
  handleKeyPress(event) {
    let code = event.keyCode || event.which;
    if (code === 13 && this.args.submitOnEnter) {
      this.submitHandler();
    }
  }
  constructor() {
    super(...arguments);
    /**
     * @property _element
     * @type null | HTMLFormElement
     * @private
     */
    _initializerDefineProperty(this, "_element", _descriptor, this);
    _initializerDefineProperty(this, "formLayout", _descriptor2, this);
    /**
     * Check if validating the model is supported. This needs to be implemented by another addon.
     *
     * @property hasValidator
     * @type boolean
     * @readonly
     * @protected
     */
    /**
     * The Bootstrap grid classes for form labels. This is used by the `Components.FormElement` class as a default for the
     * whole form.
     *
     * @property horizontalLabelGridClass
     * @type string
     * @default 'col-md-4'
     * @public
     */
    _initializerDefineProperty(this, "horizontalLabelGridClass", _descriptor3, this);
    _initializerDefineProperty(this, "isSubmitted", _descriptor4, this);
    /**
     * `isRejected` is `true` if last submission was rejected.
     * A submission is considered as rejected if form is invalid as well as if `onSubmit` rejects.
     * A change to any form element resets its value to `false`.
     *
     * If not using `Components.FormElement`, `resetSubmissionState` action must be triggered on each change to reset
     * form's submission state.
     *
     * @property isRejected
     * @type {Boolean}
     * @private
     */
    _initializerDefineProperty(this, "isRejected", _descriptor5, this);
    _initializerDefineProperty(this, "pendingSubmissions", _descriptor6, this);
    /**
     * If set to true pressing enter will submit the form, even if no submit button is present
     *
     * @property submitOnEnter
     * @type boolean
     * @default false
     * @public
     */
    /**
     * Controls if `onSubmit` action is fired concurrently. If `true` submitting form multiple
     * times will not trigger `onSubmit` action if a Promise returned by previous submission is
     * not settled yet.
     *
     * Dropping a submission also prevents rerunning validation and `onBefore` hook.
     *
     * @property preventConcurrency
     * @type Boolean
     * @default true
     * @public
     */
    _initializerDefineProperty(this, "preventConcurrency", _descriptor7, this);
    _initializerDefineProperty(this, "_showAllValidations", _descriptor8, this);
    _initializerDefineProperty(this, "showValidations", _descriptor9, this);
    let formLayout = this.formLayout;
    assert(`Invalid formLayout property given: ${formLayout}`, ['vertical', 'horizontal', 'inline'].indexOf(formLayout) >= 0);
  }
  elementChanged(value, model, property) {
    assert("You cannot use the form element's default onChange action for form elements if not using a model or setting the value directly on a form element. You must add your own onChange action to the form element in this case!", isPresent(model) && isPresent(property));
    if (typeof model.set === 'function') {
      model.set(property, value);
    } else {
      set(model, property, value);
    }
  }
  resetSubmissionState() {
    this.isSubmitted = false;
    this.isRejected = false;
  }
  doSubmit() {
    return this.submitHandler();
  }
}, _descriptor = _applyDecoratedDescriptor(_class.prototype, "_element", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _applyDecoratedDescriptor(_class.prototype, "model", [cached], Object.getOwnPropertyDescriptor(_class.prototype, "model"), _class.prototype), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "formLayout", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'vertical';
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "horizontalLabelGridClass", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'col-md-4';
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "isSubmitted", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "isRejected", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "pendingSubmissions", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "preventConcurrency", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "_showAllValidations", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return undefined;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "showValidations", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _applyDecoratedDescriptor(_class.prototype, "handleSubmit", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleSubmit"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleKeyPress", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleKeyPress"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "elementChanged", [action], Object.getOwnPropertyDescriptor(_class.prototype, "elementChanged"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "resetSubmissionState", [action], Object.getOwnPropertyDescriptor(_class.prototype, "resetSubmissionState"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "doSubmit", [action], Object.getOwnPropertyDescriptor(_class.prototype, "doSubmit"), _class.prototype), _class);
setComponentTemplate(TEMPLATE, Form);

export { Form as default };
//# sourceMappingURL=bs-form.js.map
