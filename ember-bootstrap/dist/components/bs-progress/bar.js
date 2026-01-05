import Component from '@glimmer/component';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<div\n  role=\"progressbar\"\n  aria-valuenow={{this.value}}\n  aria-valuemin={{this.minValue}}\n  aria-valuemax={{this.maxValue}}\n  class=\"progress-bar {{if this.striped \"progress-bar-striped\"}} {{this.typeClass}} {{if this.animate \"progress-bar-animated\"}}\"\n  ...attributes\n  {{style width=this.percentStyleValue}}\n>\n  {{#if this.showLabel}}\n    {{#if (has-block)}}\n      {{yield this.percentRounded}}\n    {{else}}\n      {{this.percentRounded}}%\n    {{/if}}\n  {{else}}\n    {{#if (has-block)}}\n      <span class={{if (macroCondition (macroGetOwnConfig \"isBS5\")) \"visually-hidden\" \"sr-only\"}}>{{yield this.percentRounded}}</span>\n    {{else}}\n      <span class={{if (macroCondition (macroGetOwnConfig \"isBS5\")) \"visually-hidden\" \"sr-only\"}}>{{this.percentRounded}}%</span>\n    {{/if}}\n  {{/if}}\n</div>");

/**
 Component for a single progress bar, see [Components.Progress](Components.Progress.html) for more examples.

 @class ProgressBar
 @namespace Components
 @extends Ember.Component
 @public
 */
class ProgressBar extends Component {
  /**
   * The lower limit of the value range
   *
   * @property minValue
   * @type number
   * @default 0
   * @public
   */
  get minValue() {
    return this.args.minValue ?? 0;
  }

  /**
   * The upper limit of the value range
   *
   * @property maxValue
   * @type number
   * @default 100
   * @public
   */
  get maxValue() {
    return this.args.maxValue ?? 100;
  }

  /**
   * The value the progress bar should represent
   *
   * @property value
   * @type number
   * @default 0
   * @public
   */
  get value() {
    return this.args.value ?? 0;
  }

  /**
   If true a label will be shown inside the progress bar.
    By default, it will be the percentage corresponding to the `value` property, rounded to `roundDigits` digits.
   You can customize it by using the component with a block template, which the component yields the percentage
   value to:
    ```hbs
   {{#bs-progress}}
   {{#bs-progress-bar value=progressValue as |percent|}}{{progressValue}} ({{percent}}%){{/bs-progress-bar}}
   {{/bs-progress}}
   ```
    @property showLabel
   @type boolean
   @default false
   @public
   */
  get showLabel() {
    return this.args.showLabel ?? false;
  }

  /**
   * Create a striped effect, see http://getbootstrap.com/components/#progress-striped
   *
   * @property striped
   * @type boolean
   * @default false
   * @public
   */
  get striped() {
    return this.args.striped ?? false;
  }

  /**
   * Animate the stripes, see http://getbootstrap.com/components/#progress-animated
   *
   * @property animate
   * @type boolean
   * @default false
   * @public
   */
  get animate() {
    return this.args.animate ?? false;
  }

  /**
   * Specify to how many digits the progress bar label should be rounded.
   *
   * @property roundDigits
   * @type number
   * @default 0
   * @public
   */
  get roundDigits() {
    return this.args.roundDigits ?? 0;
  }

  /**
   * Property for type styling
   *
   * For the available types see the [Bootstrap docs](https://getbootstrap.com/docs/4.3/components/progress/#backgrounds)
   *
   * @property type
   * @type String
   * @default 'default'
   * @public
   */
  get type() {
    return this.args.type ?? 'default';
  }
  get typeClass() {
    return `bg-${this.type}`;
  }

  /**
   * The percentage of `value`
   *
   * @property percent
   * @type number
   * @protected
   * @readonly
   */
  get percent() {
    // `parseFloat`'s types only accepts string values, but will handle numbers just fine.
    // The casting here is meant to keep the type checking active without changing behaviour for
    // consumers that still expect these values can be strings.
    const value = parseFloat(this.value);
    const minValue = parseFloat(this.minValue);
    const maxValue = parseFloat(this.maxValue);
    return Math.min(Math.max((value - minValue) / (maxValue - minValue), 0), 1) * 100;
  }

  /**
   * The percentage of `value`, rounded to `roundDigits` digits
   *
   * @property percentRounded
   * @type number
   * @protected
   * @readonly
   */
  get percentRounded() {
    const roundFactor = Math.pow(10, this.roundDigits);
    return Math.round(this.percent * roundFactor) / roundFactor;
  }
  get percentStyleValue() {
    const percent = this.percent;
    return !isNaN(percent) ? `${percent}%` : '';
  }
}
setComponentTemplate(TEMPLATE, ProgressBar);

export { ProgressBar as default };
//# sourceMappingURL=bar.js.map
