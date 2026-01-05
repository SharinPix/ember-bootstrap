import { _ as _applyDecoratedDescriptor, a as _initializerDefineProperty } from '../_rollupPluginBabelHelpers-hULyhLkN.js';
import Component from '@glimmer/component';
import arg from '../utils/decorators/arg.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<div\n  class=\"{{this.spinnerClass}} {{if @size (bs-size-class this.spinnerClass @size)}} {{bs-type-class \'text\' @type default=\"primary\" outline=false}}\"\n  role=\"status\"\n  ...attributes\n>\n  {{#if (has-block)}}\n    <span\n      class={{if\n        (macroCondition (macroGetOwnConfig \"isBS5\"))\n        \"visually-hidden\"\n        \"sr-only\"\n      }}\n    >{{yield}}</span>\n  {{/if}}\n</div>");

var _class, _descriptor;
/**
  Implements a [Spinner element](https://getbootstrap.com/docs/5.2/components/spinners/).

  ### Basic Usage

  ```hbs
  <BsSpinner/>
  <BsSpinner>Loading...</BsSpinner>
  ```

  The (optional) component's block will render as visually invisible but accessible text for assistive technology like screen readers.

  ### Advanced Usage

  ```hbs
  <BsSpinner @spinnerType="grow" @size="sm" @type="warning"/>
  ```

  ### Usage with `BsButton`

  ```hbs
  <BsButton @onClick={{this.download}} as |button|>
    Download
    {{#if button.isPending}}
      <BsSpinner @size="sm"/>
    {{/if}}
  </BsButton>
  ```

  @class Spinner
  @namespace Components
  @extends Glimmer.Component
  @public
*/
let BsSpinner = (_class = class BsSpinner extends Component {
  constructor(...args) {
    super(...args);
    /**
     * Property for size styling, set to 'sm'
     *
     * Also see the [Bootstrap docs](https://getbootstrap.com/docs/5.2/components/spinners/#size)
     *
     * @property size
     * @type String
     * @public
     */
    /**
     * Property for type styling
     *
     * For the available types see the [Bootstrap docs](https://getbootstrap.com/docs/5.2/components/spinners/#colors)
     *
     * @property type
     * @type String
     * @default 'primary'
     * @public
     */
    /**
     * Spinner type - 'border' or 'grow'
     *
     * @property spinnerType
     * @type string
     * @default 'border'
     * @public
     */
    _initializerDefineProperty(this, "spinnerType", _descriptor, this);
  }
  get spinnerClass() {
    return `spinner-${this.spinnerType}`;
  }
}, _descriptor = _applyDecoratedDescriptor(_class.prototype, "spinnerType", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'border';
  }
}), _class);
setComponentTemplate(TEMPLATE, BsSpinner);

export { BsSpinner as default };
//# sourceMappingURL=bs-spinner.js.map
