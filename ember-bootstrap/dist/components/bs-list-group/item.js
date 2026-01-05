import { _ as _applyDecoratedDescriptor, a as _initializerDefineProperty } from '../../_rollupPluginBabelHelpers-hULyhLkN.js';
import Component from '@glimmer/component';
import arg from '../../utils/decorators/arg.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n{{#let (element this.htmlTag) as |Tag|}}\n  <Tag\n    class=\"list-group-item {{if @type (bs-type-class \"list-group-item\" @type default=\"\")}} {{if @actionable \"list-group-item-action\"}} {{if @disabled \"disabled\"}} {{if @active \"active\"}}\"\n    aria-current=\"{{if @active true}}\"\n    aria-disabled=\"{{if @disabled true}}\"\n    type=\"{{if (bs-eq this.htmlTag \"button\") \"button\"}}\"\n     ...attributes>\n    {{yield}}\n  </Tag>\n{{/let}}");

var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;
let BsListGroupItemComponent = (_class = class BsListGroupItemComponent extends Component {
  constructor(...args) {
    super(...args);
    /**
     * On of the allowed bs-types, e.g. `primary`, `secondary` etc.
     *
     * Used to add contextual classes to style list items with a stateful background and color.
     *
     * Also see the [Bootstrap Docs](https://getbootstrap.com/docs/5.2/components/list-group/#contextual-classes)
     *
     * @default ''
     * @type string
     * @public
     */
    _initializerDefineProperty(this, "type", _descriptor, this);
    /**
     * Used to create actionable list group items with hover, disabled, and active states.
     *
     * Also see the [Bootstrap Docs](https://getbootstrap.com/docs/5.2/components/list-group/#links-and-buttons)
     *
     * @default false
     * @type boolean
     * @public
     */
    _initializerDefineProperty(this, "actionable", _descriptor2, this);
    /**
     * Indicate the current active selection.
     *
     * Also see the [Bootstrap Docs](https://getbootstrap.com/docs/5.2/components/list-group/#active-items)
     *
     * @default false
     * @type boolean
     * @public
     */
    _initializerDefineProperty(this, "active", _descriptor3, this);
    /**
     * Set `true` to make list group item appear disabled.
     *
     * Also see the [Bootstrap Docs](https://getbootstrap.com/docs/5.2/components/list-group/#disabled-items)
     *
     * @default false
     * @type boolean
     * @public
     */
    _initializerDefineProperty(this, "disabled", _descriptor4, this);
  }
  /**
   * HTML-tag used for list-group item
   *
   * It depends on `actionable`.
   *
   * @type string
   * @default 'li'
   * @public
   */
  get htmlTag() {
    return this.args.actionable ? 'button' : 'li';
  }
}, _descriptor = _applyDecoratedDescriptor(_class.prototype, "type", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return '';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "actionable", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "active", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "disabled", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _class);
setComponentTemplate(TEMPLATE, BsListGroupItemComponent);

export { BsListGroupItemComponent as default };
//# sourceMappingURL=item.js.map
