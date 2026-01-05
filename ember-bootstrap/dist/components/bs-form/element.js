import { _ as _applyDecoratedDescriptor, a as _initializerDefineProperty, b as _defineProperty } from '../../_rollupPluginBabelHelpers-hULyhLkN.js';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, get } from '@ember/object';
import { assert } from '@ember/debug';
import { isBlank, isPresent, typeOf } from '@ember/utils';
import { A, isArray } from '@ember/array';
import { getOwner } from '@ember/application';
import { guidFor } from '@ember/object/internals';
import { ref } from 'ember-ref-bucket';
import FormElementControlInput from './element/control/input.js';
import FormElementControlCheckbox from './element/control/checkbox.js';
import FormElementControlTextarea from './element/control/textarea.js';
import FormElementControlRadio from './element/control/radio.js';
import FormElementControlSwitch from './element/control/switch.js';
import arg from '../../utils/decorators/arg.js';
import { dedupeTracked } from 'tracked-toolbox';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n{{!-- template-lint-disable no-invalid-interactive --}}\n<div\n  class=\"{{if (macroCondition (macroGetOwnConfig \"isNotBS5\")) \"form-group\"}} {{if (macroCondition (macroGetOwnConfig \"isBS5\")) (if (bs-eq @formLayout \"vertical\") \"mb-3\")}} {{if (bs-eq @formLayout \"horizontal\") (if (macroCondition (macroGetOwnConfig \"isBS5\")) \"row mb-3\" \"row\")}}\"\n  ...attributes\n  {{create-ref \"mainNode\"}}\n  {{on \"focusout\" this.showValidationOnHandler}}\n  {{on \"change\" this.showValidationOnHandler}}\n  {{on \"input\" this.showValidationOnHandler}}\n  {{did-update this.handleShowAllValidationsChange this.showAllValidations}}\n>\n  {{#component\n    (ensure-safe-component\n      (bs-default\n        @layoutComponent\n        (if\n          (bs-contains (array \"checkbox\" \"switch\") this.controlType)\n          (if\n            (bs-eq @formLayout \"inline\")\n            (component \"bs-form/element/layout/inline/checkbox\" controlType=this.controlType)\n            (if\n              (bs-eq @formLayout \"horizontal\")\n              (component \"bs-form/element/layout/horizontal/checkbox\" controlType=this.controlType)\n              (component \"bs-form/element/layout/vertical/checkbox\" controlType=this.controlType)\n            )\n          )\n          (if\n            (bs-eq @formLayout \"inline\")\n            (component \"bs-form/element/layout/inline\")\n            (if\n              (bs-eq @formLayout \"horizontal\")\n              (component \"bs-form/element/layout/horizontal\")\n              (component \"bs-form/element/layout/vertical\")\n            )\n          )\n        )\n      )\n    )\n    hasLabel=(if @label true false)\n    formElementId=this.formElementId\n    horizontalLabelGridClass=@horizontalLabelGridClass\n    errorsComponent=(component (ensure-safe-component (bs-default @errorsComponent (component \"bs-form/element/errors\")))\n      messages=this.validationMessages\n      show=this.showValidationMessages\n      showMultipleErrors=this.showMultipleErrors\n    )\n    feedbackIconComponent=(component (ensure-safe-component (bs-default @feedbackIconComponent (component \"bs-form/element/feedback-icon\")))\n      iconName=@iconName\n      show=this.hasFeedback\n    )\n    labelComponent=(component\n      (ensure-safe-component\n        (bs-default\n          @labelComponent\n          (if\n            (bs-eq this.controlType \"radio\")\n            (component \"bs-form/element/legend\")\n            (component \"bs-form/element/label\")\n          )\n        )\n      )\n      label=@label\n      invisibleLabel=@invisibleLabel\n      formElementId=this.formElementId\n      controlType=this.controlType\n      formLayout=@formLayout\n      size=@size\n    )\n    helpTextComponent=(if @helpText\n      (component (ensure-safe-component (bs-default @helpTextComponent (component \"bs-form/element/help-text\")))\n        text=@helpText\n        id=this.ariaDescribedBy\n      )\n    )\n  }}\n    {{!\n      Ember does not allow to access a variable with `@` in template if its name start with an underscore.\n      `@_disabled` and `@_readonly` are affected by this. As a work-a-round we access them on `this.args`.\n    }}\n    {{!-- template-lint-disable no-args-paths --}}\n    {{#let\n      (component\n        (ensure-safe-component\n          (bs-default\n            @controlComponent\n            this.controlComponent\n          )\n        )\n        value=this.value\n        id=this.formElementId\n        type=this.controlType\n        label=@label\n        disabled=this.args._disabled\n        readonly=this.args._readonly\n        required=@required\n        options=@options\n        optionLabelPath=@optionLabelPath\n        ariaDescribedBy=(if @helpText this.ariaDescribedBy)\n        onChange=this.doChange\n        validationType=this.validation\n        size=@size\n    ) as |Control|}}\n    {{!-- template-lint-enable no-args-paths --}}\n      {{#if (has-block)}}\n        {{yield\n          (hash\n            value=this.value\n            setValue=this.doChange\n            id=this.formElementId\n            validation=this.validation\n            control=Control\n          )\n        }}\n      {{else}}\n        <Control />\n      {{/if}}\n    {{/let}}\n  {{/component}}\n</div>\n");

var _dec, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor0;
let FormElement = (_dec = ref('mainNode'), _class = class FormElement extends Component {
  /**
   * The value of the control element is bound to this property:
   *
   * ```hbs
   * <form.element @controlType="email" @label="Email" @value={{this.email}} />
   * ```
   *
   * Note two things:
   * * the binding is uni-directional (DDAU), so you would have to use the `onChange` action to subscribe to changes.
   * * you lose the ability to validate this form element by directly binding to its value. It is recommended
   * to use the `property` feature instead.
   *
   * @property value
   * @public
   */
  get value() {
    assert('You can not set both property and value on a form element', isBlank(this.args.property) || isBlank(this.args.value));
    if (this.args.property && this.args.model) {
      return get(this.args.model, this.args.property);
    }
    return this.args.value;
  }

  /**
   The property name of the form element's `model` (by default the `model` of its parent `Components.Form`) that this
   form element should represent. The control element's value will automatically be bound to the model property's
   value.
    Using this property enables form validation on this element.
    @property property
   @type string
   @public
   */

  /**
   * The model used for validation. Defaults to the parent `Components.Form`'s `model`
   *
   * @property model
   * @public
   */

  /**
   * Show a help text next to the control
   *
   * @property helpText
   * @type {string}
   * @public
   */

  /**
   * Only if there is a validator, this property makes all errors to be displayed at once
   * inside a scrollable container.
   *
   * @default false
   * @property showMultipleErrors
   * @public
   * @type {Boolean}
   */

  /**
   * @property hasErrors
   * @type boolean
   * @readonly
   * @private
   */
  get hasErrors() {
    return Array.isArray(this.errors) && this.errors.length > 0;
  }

  /**
   * The array of warning messages from the `model`'s validation.
   *
   * @property warnings
   * @type array
   * @protected
   */
  // This shouldn't be an argument. It's only an argument because tests rely on
  // setting it as an argument. See https://github.com/kaliber5/ember-bootstrap/issues/1338
  // for details.

  /**
   * @property hasWarnings
   * @type boolean
   * @readonly
   * @private
   */
  get hasWarnings() {
    return Array.isArray(this.warnings) && this.warnings.length > 0;
  }

  /**
   * Show a custom error message that does not come from the model's validation. Will be immediately shown, regardless
   * of any user interaction (i.e. no `focusOut` event required)
   *
   * @property customError
   * @type string
   * @public
   */

  /**
   * @property hasCustomError
   * @type boolean
   * @readonly
   * @private
   */
  get hasCustomError() {
    return isPresent(this.args.customError);
  }

  /**
   * Show a custom warning message that does not come from the model's validation. Will be immediately shown, regardless
   * of any user interaction (i.e. no `focusOut` event required). If the model's validation has an error then the error
   * will be shown in place of this warning.
   *
   * @property customWarning
   * @type string
   * @public
   */

  /**
   * @property hasCustomWarning
   * @type boolean
   * @readonly
   * @private
   */
  get hasCustomWarning() {
    return isPresent(this.args.customWarning);
  }

  /**
   * Property for size styling, set to 'lg', 'sm' or 'xs' (the latter only for BS3)
   *
   * @property size
   * @type String
   * @public
   */

  /**
   * The array of validation messages (either errors or warnings) from either custom error/warnings or , if we are showing model validation messages, the model's validation
   *
   * @property validationMessages
   * @type array
   * @private
   */
  get validationMessages() {
    if (this.hasCustomError) {
      return A([this.args.customError]);
    }
    if (this.hasErrors && this.showModelValidation) {
      return A(this.errors);
    }
    if (this.hasCustomWarning) {
      return A([this.args.customWarning]);
    }
    if (this.hasWarnings && this.showModelValidation) {
      return A(this.warnings);
    }
    return null;
  }

  /**
   * @property hasValidationMessages
   * @type boolean
   * @readonly
   * @private
   */
  get hasValidationMessages() {
    return Array.isArray(this.validationMessages) && this.validationMessages.length > 0;
  }

  /**
   * Set a validating state for async validations
   *
   * @property isValidating
   * @type boolean
   * @default false
   * @protected
   */

  /**
   * If `true` form validation markup is rendered (requires a validatable `model`).
   *
   * @property showValidation
   * @type boolean
   * @default false
   * @private
   */
  get showValidation() {
    return this.showOwnValidation || this.showAllValidations || this.hasCustomError || this.hasCustomWarning;
  }

  /**
   * @property showOwnValidation
   * @type boolean
   * @default false
   * @private
   */

  /*
   * Resets `showOwnValidation` if `@showAllValidations` argument is changed to `false`.
   * Must be called whenever `@showAllValidations` argument changes.
   */
  handleShowAllValidationsChange() {
    if (this.args.showAllValidations === false) {
      this.showOwnValidation = false;
    }
  }

  /**
   * @property showModelValidations
   * @type boolean
   * @readonly
   * @private
   */
  get showModelValidation() {
    return this.showOwnValidation || this.showAllValidations;
  }

  /**
   * @property showValidationMessages
   * @type boolean
   * @readonly
   * @private
   */
  get showValidationMessages() {
    return this.showValidation && this.hasValidationMessages;
  }

  /**
   * Event or list of events which enable form validation markup rendering.
   * Supported events: ['focusout', 'change', 'input']
   *
   * @property showValidationOn
   * @type string|array
   * @default ['focusout']
   * @public
   */

  /**
   * @property _showValidationOn
   * @type array
   * @readonly
   * @private
   */
  get _showValidationOn() {
    let showValidationOn = this.showValidationOn;
    assert('showValidationOn must be a String or an Array', isArray(showValidationOn) || typeOf(showValidationOn) === 'string');
    if (isArray(showValidationOn)) {
      return showValidationOn.map(type => {
        return type.toLowerCase();
      });
    }
    if (typeof showValidationOn.toString === 'function') {
      return [showValidationOn.toLowerCase()];
    }
    return [];
  }

  /**
   * @method showValidationOnHandler
   * @param {Event} event
   * @private
   */
  showValidationOnHandler({
    target,
    type
  }) {
    // Should not do anything if
    if (
    // validations should not be shown for this event type or
    this._showValidationOn.indexOf(type) === -1 ||
    // validation should not be shown for this event target
    isArray(this.doNotShowValidationForEventTargets) && this.doNotShowValidationForEventTargets.length > 0 && this._element && [...this._element.querySelectorAll(this.doNotShowValidationForEventTargets.join(','))].some(el => el.contains(target))) {
      return;
    }
    this.showOwnValidation = true;
  }

  /**
   * Controls if validation should be shown for specified event targets.
   *
   * It expects an array of query selectors. If event target is a children of an event that matches
   * these selectors, an event triggered for it will not trigger validation errors to be shown.
   *
   * By default, events fired on elements inside an input group are skipped.
   *
   * If `null` or an empty array is passed validation errors are shown for all events regardless
   * of event target.
   *
   * @property doNotShowValidationForEventTargets
   * @type ?array
   * @public
   */

  /**
   * The validation ("error" (BS3)/"danger" (BS4), "warning", or "success") or null if no validation is to be shown. Automatically computed from the
   * model's validation state.
   *
   * @property validation
   * @readonly
   * @type string
   * @private
   */
  get validation() {
    const shouldShowValidationState = this.showModelValidation && this.hasValidator && !this.isValidating && !this.args._disabled;
    if (/* custom errors should be always shown */
    this.hasCustomError || (/* validation error should be shown in preference to warnings */
    shouldShowValidationState && this.hasErrors)) {
      return 'error';
    }
    if (/* custom warning should be always shown unless there is a validation error */
    this.hasCustomWarning || shouldShowValidationState && this.hasWarnings) {
      return 'warning';
    }
    if (shouldShowValidationState) {
      return 'success';
    }
    return null;
  }

  /**
   * The form layout used for the markup generation (see http://getbootstrap.com/css/#forms):
   *
   * * 'horizontal'
   * * 'vertical'
   * * 'inline'
   *
   * Defaults to the parent `form`'s `formLayout` property.
   *
   * @property formLayout
   * @type string
   * @default 'vertical'
   * @public
   */

  /**
   * The Bootstrap grid classes for form labels within a horizontal layout form. Defaults to the value of the same
   * property of the parent form. The corresponding grid classes for form controls are automatically computed.
   *
   * @property horizontalLabelGridClass
   * @type string
   * @public
   */

  /**
   * ID for input field and the corresponding label's "for" attribute
   *
   * @property formElementId
   * @type string
   * @private
   */
  get formElementId() {
    return `${this._elementId}-field`;
  }

  /**
   * ID of the helpText, used for aria-describedby attribute of the control element
   *
   * @property ariaDescribedBy
   * @type string
   * @private
   */
  get ariaDescribedBy() {
    return `${this._elementId}-help`;
  }

  /**
   * @property layoutComponent
   * @type {String}
   * @private
   */

  /**
   * @property controlComponent
   * @private
   */
  get controlComponent() {
    let owner = getOwner(this);
    let componentClass = owner.resolveRegistration(`component:bs-form/element/control/${this.controlType}`);
    if (componentClass) {
      return componentClass;
    }
    if (this.controlType === 'checkbox') {
      return FormElementControlCheckbox;
    } else if (this.controlType === 'textarea') {
      return FormElementControlTextarea;
    } else if (this.controlType === 'radio') {
      return FormElementControlRadio;
    } else if (this.controlType === 'switch') {
      return FormElementControlSwitch;
    } else {
      return FormElementControlInput;
    }
  }

  /**
   * @property errorsComponent
   * @type {String}
   * @private
   */

  /**
   * @property feedbackIconComponent
   * @type {String}
   * @private
   */

  /**
   * @property labelComponent
   * @type {String}
   * @private
   */

  /**
   * @property helpTextComponent
   * @type {String}
   * @private
   */

  /**
   * Setup validation properties. This method acts as a hook for external validation
   * libraries to overwrite. In case of failed validations the `errors` property should contain an array of error messages.
   *
   * @method setupValidations
   * @private
   */

  /**
   * The action is called whenever the input value is changed, e.g. by typing text
   *
   * @event onChange
   * @param {String} value The new value of the form control
   * @param {Object} model The form element's model
   * @param {String} property The value of `property`
   * @public
   */

  /**
   * Private duplicate of onChange event used for internal state handling between form and it's elements.
   *
   * @event _onChange
   * @private
   */

  constructor() {
    super(...arguments);
    /**
     * @property _element
     * @type null | HTMLElement
     * @private
     */
    _initializerDefineProperty(this, "_element", _descriptor, this);
    /**
     * Text to display within a `<label>` tag.
     *
     * You should include a label for every form input cause otherwise screen readers
     * will have trouble with your forms. Use `invisibleLabel` property if you want
     * to hide them.
     *
     * @property label
     * @type string
     * @public
     */
    /**
     * Controls label visibility by adding 'sr-only' class.
     *
     * @property invisibleLabel
     * @type boolean
     * @default false
     * @public
     */
    /**
     * The type of the control widget.
     * Supported types:
     *
     * * 'text'
     * * 'checkbox'
     * * 'radio'
     * * 'switch'
     * * 'textarea'
     * * any other type will use an input tag with the `controlType` value as the type attribute (for e.g. HTML5 input
     * types like 'email'), and the same layout as the 'text' type
     *
     * @property controlType
     * @type string
     * @default 'text'
     * @public
     */
    _initializerDefineProperty(this, "controlType", _descriptor2, this);
    _initializerDefineProperty(this, "showMultipleErrors", _descriptor3, this);
    /**
     * Array of options for control types that show a selection (e.g. radio button groups)
     * Can be an array of simple strings or objects. For objects use `optionLabelPath` to specify the path containing the
     * label.
     *
     * @property options
     * @type {Array}
     * @public
     */
    /**
     * Property path (e.g. 'title' or 'related.name') to render the label of a selection option. See `options`.
     *
     * @property optionLabelPath
     * @type {String}
     * @public
     */
    /**
     * The array of error messages from the `model`'s validation.
     *
     * @property errors
     * @type array
     * @protected
     */
    // This shouldn't be an argument. It's only an argument because tests rely on
    // setting it as an argument. See https://github.com/kaliber5/ember-bootstrap/issues/1338
    // for details.
    _initializerDefineProperty(this, "errors", _descriptor4, this);
    _initializerDefineProperty(this, "warnings", _descriptor5, this);
    _initializerDefineProperty(this, "isValidating", _descriptor6, this);
    _initializerDefineProperty(this, "showOwnValidation", _descriptor7, this);
    /**
     * @property showAllValidations
     * @type boolean
     * @default false
     * @private
     */
    _initializerDefineProperty(this, "showAllValidations", _descriptor8, this);
    _initializerDefineProperty(this, "showValidationOn", _descriptor9, this);
    _initializerDefineProperty(this, "doNotShowValidationForEventTargets", _descriptor0, this);
    _defineProperty(this, "_elementId", guidFor(this));
    if (!isBlank(this.args.property)) {
      this.setupValidations?.();
    }
  }
  doChange(value) {
    let {
      onChange,
      model,
      property,
      _onChange
    } = this.args;
    onChange?.(value, model, property);
    _onChange?.();
  }
}, _descriptor = _applyDecoratedDescriptor(_class.prototype, "_element", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "controlType", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'text';
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "showMultipleErrors", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "errors", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "warnings", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "isValidating", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "showOwnValidation", [dedupeTracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "showAllValidations", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _applyDecoratedDescriptor(_class.prototype, "handleShowAllValidationsChange", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleShowAllValidationsChange"), _class.prototype), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "showValidationOn", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return ['focusOut'];
  }
}), _applyDecoratedDescriptor(_class.prototype, "showValidationOnHandler", [action], Object.getOwnPropertyDescriptor(_class.prototype, "showValidationOnHandler"), _class.prototype), _descriptor0 = _applyDecoratedDescriptor(_class.prototype, "doNotShowValidationForEventTargets", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return ['.input-group-append', '.input-group-prepend'];
  }
}), _applyDecoratedDescriptor(_class.prototype, "doChange", [action], Object.getOwnPropertyDescriptor(_class.prototype, "doChange"), _class.prototype), _class);
setComponentTemplate(TEMPLATE, FormElement);

export { FormElement as default };
//# sourceMappingURL=element.js.map
