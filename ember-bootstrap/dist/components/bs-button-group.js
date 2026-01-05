import { _ as _applyDecoratedDescriptor } from '../_rollupPluginBabelHelpers-hULyhLkN.js';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { isArray, A } from '@ember/array';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n<div class=\"{{if @vertical \"btn-group-vertical\" \"btn-group\"}} {{bs-size-class \"btn-group\" @size}}\" role=\"group\" ...attributes>\n  {{yield\n    (hash\n      button=(component (ensure-safe-component (bs-default @buttonComponent (component \"bs-button-group/button\"))) buttonGroupType=@type groupValue=@value onClick=this.buttonPressed)\n    )\n  }}\n</div>");

var _class;
let ButtonGroup = (_class = class ButtonGroup extends Component {
  /**
   * @property buttonComponent
   * @type {String}
   * @private
   */

  /**
   * Set to true for a vertically stacked button group, see http://getbootstrap.com/components/#btn-groups-vertical
   *
   * @property vertical
   * @type boolean
   * @default false
   * @public
   */

  /**
   * The type of the button group specifies how child buttons behave and how the `value` property will be computed:
   *
   * ### null
   * If `type` is not set (null), the button group will add no functionality besides Bootstrap styling
   *
   * ### radio
   * if `type` is set to "radio", the buttons will behave like radio buttons:
   * * the `value` property of the button group will reflect the `value` property of the active button
   * * thus only one button may be active
   *
   * ### checkbox
   * if `type` is set to "checkbox", the buttons will behave like checkboxes:
   * * any number of buttons may be active
   * * the `value` property of the button group will be an array containing the `value` properties of all active buttons
   *
   * @property type
   * @type string
   * @default null
   * @public
   */

  /**
   * The value of the button group, computed by its child buttons.
   * See the `type` property for how the value property is constructed.
   *
   * When you set the value, the corresponding buttons will be activated:
   * * use a single value for a radio button group to activate the button with the same value
   * * use an array of values for a checkbox button group to activate all the buttons with values contained in the array
   *
   * @property value
   * @type array
   * @public
   */

  /**
   * Property for size styling, set to 'lg', 'sm' or 'xs'
   *
   * Also see the [Bootstrap docs](https://getbootstrap.com/docs/4.3/components/button-group/#sizing)
   *
   * @property size
   * @type String
   * @public
   */

  /**
   * This action is called whenever the button group's value should be changed because the user clicked a button.
   * You will receive the new value of the button group (based on the `type` property), which you should use to update the
   * `value` property.
   *
   * @event onChange
   * @param {*} value
   * @public
   */

  buttonPressed(pressedValue) {
    if (!this.args.onChange) {
      return;
    }
    let newValue;
    if (this.args.type === 'radio') {
      if (pressedValue === this.args.value) {
        return;
      }
      newValue = pressedValue;
    } else {
      if (!isArray(this.args.value)) {
        newValue = [pressedValue];
      } else {
        if (this.args.value.includes(pressedValue)) {
          newValue = this.args.value.filter(v => v !== pressedValue);
        } else {
          newValue = [...this.args.value, pressedValue];
        }
      }

      // For compatibility we continue to return an EmberArray instance for now
      // @todo this should be changed for the next major release!
      newValue = A(newValue);
    }
    this.args.onChange(newValue);
  }
}, _applyDecoratedDescriptor(_class.prototype, "buttonPressed", [action], Object.getOwnPropertyDescriptor(_class.prototype, "buttonPressed"), _class.prototype), _class);
setComponentTemplate(TEMPLATE, ButtonGroup);

export { ButtonGroup as default };
//# sourceMappingURL=bs-button-group.js.map
