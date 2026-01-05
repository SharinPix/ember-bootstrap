import Component from '@glimmer/component';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n<ul class=\"nav {{this.typeClass}} {{this.additionalClass}} {{if this.justified \"nav-justified\"}} {{if this.stacked \"flex-column\"}} {{if this.fill \"nav-fill\"}}\" ...attributes>\n  {{yield\n    (hash\n      item=(ensure-safe-component (bs-default @itemComponent (component \"bs-nav/item\")))\n      link-to=(ensure-safe-component (bs-default @linkToComponent (component \"bs-link-to\" attrClassInternal=\"nav-link\")))\n      linkTo=(ensure-safe-component (bs-default @linkToComponent (component \"bs-link-to\" attrClassInternal=\"nav-link\")))\n      dropdown=(component (ensure-safe-component (bs-default @dropdownComponent (component \"bs-dropdown\"))) inNav=true htmlTag=\"li\")\n    )\n  }}\n</ul>");

class Nav extends Component {
  get typeClass() {
    let type = this.type;
    return type ? `nav-${type}` : undefined;
  }

  /**
   * Special type of nav, either "pills" or "tabs"
   *
   * @property type
   * @type String
   * @default null
   * @public
   */
  get type() {
    return this.args.type ?? null;
  }

  /**
   * Make the nav justified, see [bootstrap docs](http://getbootstrap.com/components/#nav-justified)
   *
   * @property justified
   * @type boolean
   * @default false
   * @public
   */
  get justified() {
    return this.args.justified ?? false;
  }

  /**
   * Make the nav pills stacked, see [bootstrap docs](http://getbootstrap.com/components/#nav-pills)
   *
   * @property stacked
   * @type boolean
   * @default false
   * @public
   */
  get stacked() {
    return this.args.stacked ?? false;
  }

  /**
   * Make the nav flex fill (BS4 only), see [bootstrap docs](http://getbootstrap.com/docs/4.1/components/navs/#fill-and-justify)
   *
   * @property fill
   * @type boolean
   * @default false
   * @public
   */
  get fill() {
    return this.args.fill ?? false;
  }

  /**
   * @property itemComponent
   * @type {String}
   * @private
   */

  /**
   * @property linkToComponent
   * @type {String}
   * @private
   */

  /**
   * @property dropdownComponent
   * @type {String}
   * @private
   */
}
setComponentTemplate(TEMPLATE, Nav);

export { Nav as default };
//# sourceMappingURL=bs-nav.js.map
