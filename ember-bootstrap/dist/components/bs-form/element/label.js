import { _ as _applyDecoratedDescriptor, a as _initializerDefineProperty } from '../../../_rollupPluginBabelHelpers-hULyhLkN.js';
import Component from '@glimmer/component';
import arg from '../../../utils/decorators/arg.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n<label\n  class=\"\n    {{if (macroCondition (macroGetOwnConfig \"isBS5\")) \"form-label\"}}\n    {{if @invisibleLabel (if (macroCondition (macroGetOwnConfig \"isBS5\")) \"visually-hidden\" \"sr-only\")}}\n    {{@labelClass}}\n    {{if this.isHorizontalAndNotCheckbox \"col-form-label\"}}\n    {{if this.isCheckbox \"form-check-label\"}}\n    {{if (bs-eq \"switch\" @controlType) (if (macroCondition (macroGetOwnConfig \"isBS5\")) \"form-check-label\" \"custom-control-label\")}}\n    {{if this.isHorizontal (bs-size-class \"col-form-label\" @size)}}\"\n  for={{@formElementId}}\n  ...attributes\n>\n  {{#if (has-block)}}\n    {{yield}}\n  {{/if}}\n  {{@label}}\n</label>\n");

var _class, _descriptor, _descriptor2;
let FormElementLabel = (_class = class FormElementLabel extends Component {
  constructor(...args) {
    super(...args);
    /**
     * [BS4 only] Property for size styling, set to 'lg', 'sm'
     *
     * @property size
     * @type String
     * @public
     */
    /**
     * @property formElementId
     * @type {String}
     * @public
     */
    /**
     * @property labelClass
     * @type {String}
     * @public
     */
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
    _initializerDefineProperty(this, "formLayout", _descriptor, this);
    /**
     * The type of the control widget.
     * Supported types:
     *
     * * 'text'
     * * 'checkbox'
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
  }
  /**
   * @property label
   * @type string
   * @public
   */

  /**
   * @property invisibleLabel
   * @type boolean
   * @public
   */

  get isHorizontalAndNotCheckbox() {
    return this.isHorizontal && !this.isCheckbox;
  }
  /**
   * Indicates whether the type of the control widget equals `checkbox`
   *
   * @property isCheckbox
   * @type boolean
   * @private
   */
  get isCheckbox() {
    return this.args.controlType === 'checkbox';
  }

  /**
   * Indicates whether the form type equals `horizontal`
   *
   * @property isHorizontal
   * @type boolean
   * @private
   */
  get isHorizontal() {
    return this.args.formLayout === 'horizontal';
  }
}, _descriptor = _applyDecoratedDescriptor(_class.prototype, "formLayout", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'vertical';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "controlType", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'text';
  }
}), _class);
setComponentTemplate(TEMPLATE, FormElementLabel);

export { FormElementLabel as default };
//# sourceMappingURL=label.js.map
