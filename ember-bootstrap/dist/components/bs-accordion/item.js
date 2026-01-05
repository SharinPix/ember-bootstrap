import { _ as _applyDecoratedDescriptor, a as _initializerDefineProperty } from '../../_rollupPluginBabelHelpers-hULyhLkN.js';
import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import arg from '../../utils/decorators/arg.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{#let\n  (component (ensure-safe-component (bs-default @titleComponent (component \"bs-accordion/item/title\"))) collapsed=this.collapsed disabled=@disabled onClick=(fn (bs-default @onClick (bs-noop)) this.value))\n  (component (ensure-safe-component (bs-default @bodyComponent (component \"bs-accordion/item/body\"))) collapsed=this.collapsed)\n  (unique-id)\n  (unique-id)\nas |Title Body titleId collapsableId|\n}}\n  <div\n    class=\"{{if @disabled \"disabled\"}} {{this.typeClass}} {{if (macroCondition (macroGetOwnConfig \"isBS4\")) \"card\"}} {{if (macroCondition (macroGetOwnConfig \"isBS5\")) \"accordion-item\"}}\"\n    ...attributes\n  >\n    {{#if (has-block-params)}}\n      {{yield\n        (hash\n          title=Title\n          body=Body\n        )\n      }}\n    {{else}}\n      <Title id={{titleId}} @controls={{collapsableId}}>\n        {{@title}}\n      </Title>\n      <Body @collapsableId={{collapsableId}} @describedby={{titleId}}>\n        {{yield\n          (hash\n            title=Title\n            body=Body\n          )\n        }}\n      </Body>\n    {{/if}}\n  </div>\n{{/let}}");

var _class, _descriptor, _descriptor2;
/**
 A collapsible/expandable item within an accordion

 See [Components.Accordion](Components.Accordion.html) for examples.

 @class AccordionItem
 @namespace Components
 @extends Ember.Component
 @public
 */
let AccordionItem = (_class = class AccordionItem extends Component {
  constructor(...args) {
    super(...args);
    /**
     * The title of the accordion item, displayed as a .panel-title element
     *
     * @property title
     * @type string
     * @public
     */
    /**
     * The value of the accordion item, which is used as the value of the `selected` property of the parent [Components.Accordion](Components.Accordion.html) component
     *
     * @property value
     * @public
     */
    _initializerDefineProperty(this, "value", _descriptor, this);
    /**
     * @property disabled
     * @type boolean
     * @public
     */
    /**
     * Property for type styling
     *
     * For the available types see the [Bootstrap docs](https://getbootstrap.com/docs/4.3/components/navbar/#color-schemes)
     *
     * @property type
     * @type String
     * @default 'default'
     * @public
     */
    _initializerDefineProperty(this, "type", _descriptor2, this);
  }
  /**
   * @property selected
   * @private
   */

  /**
   * @property titleComponent
   * @type {String}
   * @private
   */

  /**
   * @property bodyComponent
   * @type {String}
   * @private
   */

  /**
   * @property collapsed
   * @type boolean
   * @readonly
   * @private
   */
  get collapsed() {
    return this.value !== this.args.selected;
  }
  get typeClass() {
    return `bg-${this.type}`;
  }

  /**
   * Reference to the parent `Components.Accordion` class.
   *
   * @property accordion
   * @private
   */

  /**
   * @event onClick
   * @public
   */
}, _descriptor = _applyDecoratedDescriptor(_class.prototype, "value", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return guidFor(this);
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "type", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'default';
  }
}), _class);
setComponentTemplate(TEMPLATE, AccordionItem);

export { AccordionItem as default };
//# sourceMappingURL=item.js.map
