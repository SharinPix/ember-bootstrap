import { _ as _applyDecoratedDescriptor, a as _initializerDefineProperty, b as _defineProperty } from '../_rollupPluginBabelHelpers-hULyhLkN.js';
import Component from '@glimmer/component';
import arg from '../utils/decorators/arg.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n{{#let (element this.htmlTag) as |Tag|}}\n  <Tag\n    class=\"list-group {{this.horizontalClass}} {{if this.numbered \"list-group-numbered\"}} {{if this.flush \"list-group-flush\"}}\"\n    ...attributes>\n    {{yield\n      (hash\n        item=(component (ensure-safe-component (bs-default @listGroupItemComponent (component \"bs-list-group/item\"))))\n      )\n    }}\n  </Tag>\n{{/let}}");

var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;
let BsListGroupComponent = (_class = class BsListGroupComponent extends Component {
  constructor(...args) {
    super(...args);
    /**
     * Determines if list should be numbered (e.g. `ol` or `ul` should be used)
     *
     * Also see the [Bootstrap Docs](https://getbootstrap.com/docs/5.2/components/list-group/#numbered)
     *
     * @default false
     * @type boolean
     * @public
     */
    _initializerDefineProperty(this, "numbered", _descriptor, this);
    /**
     * If `true` then some borders and rounded corners are removed
     *
     * Also see the [Bootstrap Docs](https://getbootstrap.com/docs/5.2/components/list-group/#flush)
     *
     * @default false
     * @type boolean
     * @public
     */
    _initializerDefineProperty(this, "flush", _descriptor2, this);
    /**
     * If `true` list group layout will be horizontal
     *
     * Also see the [Bootstrap Docs](https://getbootstrap.com/docs/5.2/components/list-group/#horizontal)
     *
     * @default false
     * @type boolean
     * @public
     */
    _initializerDefineProperty(this, "horizontal", _descriptor3, this);
    /**
     * Determines the responsive variant to make a list group horizontal starting at that breakpoint’s `min-width`.
     *
     * Supported values are `{sm|md|lg|xl|xxl}`
     *
     * Live this property empty to change the layout of list group items to horizontal across all breakpoints.
     *
     * Also see the [Bootstrap Docs](https://getbootstrap.com/docs/5.2/components/list-group/#horizontal)
     *
     * @default ''
     * @type string
     * @public
     */
    _initializerDefineProperty(this, "horizontalSize", _descriptor4, this);
    _defineProperty(this, "htmlTag", this.numbered ? 'ol' : 'ul');
  }
  get horizontalClass() {
    if (this.horizontal) {
      return this.horizontalSize ? `list-group-horizontal-${this.horizontalSize}` : 'list-group-horizontal';
    }
    return '';
  }
}, _descriptor = _applyDecoratedDescriptor(_class.prototype, "numbered", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "flush", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "horizontal", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "horizontalSize", [arg], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return '';
  }
}), _class);
setComponentTemplate(TEMPLATE, BsListGroupComponent);

export { BsListGroupComponent as default };
//# sourceMappingURL=bs-list-group.js.map
