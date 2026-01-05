import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<div class=\"progress\" ...attributes>\n  {{yield\n    (hash\n      bar=(bs-default @progressBarComponent (component \"bs-progress/bar\"))\n    )\n  }}\n</div>\n");

/**
  Component to display a Bootstrap progress bar, see http://getbootstrap.com/components/#progress.

  ### Usage

  The component yields a [Components.ProgressBar](Components.ProgressBar.html) component that represents a single bar.
  Use the `value` property to control the progress bar's width. To apply the different styling options supplied by
  Bootstrap, use the appropriate properties like `type`, `showLabel`, `striped` or `animate`.

  ```hbs
  <BsProgress as |pg| >
    <pg.bar @value={{this.progressValue}} @minValue={{0}} @maxValue={{10}} @showLabel={{true}} @type="danger" aria-label="Loading" />
  </BsProgress>
  ```

  > Don't forget to add a `aria-label` attribute to the progress bar for accessibility!

  ### Stacked

  You can place multiple progress bar components in a single progress component to
  create a stack of progress bars as seen in http://getbootstrap.com/components/#progress-stacked.

  ```hbs
  <BsProgress as |pg| >
    <pg.bar @value={{this.progressValue1}} @type="success" />
    <pg.bar @value={{this.progressValue2}} @type="warning" />
    <pg.bar @value={{this.progressValue3}} @type="danger" />
  </BsProgress>
  ```

  *Note that only invoking the component in a template as shown above is considered part of its public API. Extending from it (subclassing) is generally not supported, and may break at any time.*

  @class Progress
  @namespace Components
  @extends Ember.Component
  @public
*/
var bsProgress = setComponentTemplate(TEMPLATE, templateOnly());

/**
 * @property progressBarComponent
 * @type {String}
 * @private
 */

export { bsProgress as default };
//# sourceMappingURL=bs-progress.js.map
