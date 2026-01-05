import { _ as _applyDecoratedDescriptor, a as _initializerDefineProperty, b as _defineProperty } from '../../_rollupPluginBabelHelpers-hULyhLkN.js';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { getDestinationElement } from '../../utils/dom.js';
import { ref } from 'ember-ref-bucket';
import { macroCondition, getOwnConfig } from '@embroider/macros';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n{{#if @isOpen}}\n  {{#if this._renderInPlace}}\n    <div\n      data-bs-popper\n      class=\"dropdown-menu {{this.alignClass}} show\"\n      tabindex=\"-1\"\n      ...attributes\n      {{popper-tooltip @toggleElement this.popperOptions}}\n      {{did-insert @registerChildElement \"menu\"}}\n      {{will-destroy @unregisterChildElement \"menu\"}}\n      {{create-ref \"menuElement\"}}\n    >\n      {{yield\n        (hash\n          item=(ensure-safe-component (bs-default @itemComponent (component \"bs-dropdown/menu/item\")))\n          link-to=(ensure-safe-component (bs-default @linkToComponent (component \"bs-link-to\" attrClassInternal=\"dropdown-item\")))\n          linkTo=(ensure-safe-component (bs-default @linkToComponent (component \"bs-link-to\" attrClassInternal=\"dropdown-item\")))\n          divider=(ensure-safe-component (bs-default @dividerComponent (component \"bs-dropdown/menu/divider\")))\n        )\n      }}\n    </div>\n  {{else}}\n    {{#in-element this.destinationElement insertBefore=null}}\n      <div\n        data-bs-popper\n        class=\"dropdown-menu {{this.alignClass}} show\"\n        tabindex=\"-1\"\n        ...attributes\n        {{popper-tooltip @toggleElement this.popperOptions}}\n        {{did-insert @registerChildElement \"menu\"}}\n        {{will-destroy @unregisterChildElement \"menu\"}}\n        {{create-ref \"menuElement\"}}\n      >\n        {{yield\n          (hash\n            item=(ensure-safe-component (bs-default @itemComponent (component \"bs-dropdown/menu/item\")))\n            link-to=(ensure-safe-component (bs-default @linkToComponent (component \"bs-link-to\" attrClassInternal=\"dropdown-item\")))\n            linkTo=(ensure-safe-component (bs-default @linkToComponent (component \"bs-link-to\" attrClassInternal=\"dropdown-item\")))\n            divider=(ensure-safe-component (bs-default @dividerComponent (component \"bs-dropdown/menu/divider\")))\n          )\n        }}\n      </div>\n    {{/in-element}}\n  {{/if}}\n{{/if}}\n");

var _dec, _class, _descriptor;
let DropdownMenu = (_dec = ref('menuElement'), _class = class DropdownMenu extends Component {
  constructor(...args) {
    super(...args);
    /**
     * @property _element
     * @type null | HTMLElement
     * @private
     */
    _initializerDefineProperty(this, "menuElement", _descriptor, this);
    _defineProperty(this, "flip", true);
  }
  /**
   * Alignment of the menu, either "left" or "right"
   *
   * @property align
   * @type string
   * @default left
   * @public
   */
  get align() {
    return this.args.align ?? 'left';
  }

  /**
   * @property direction
   * @default 'down'
   * @type string
   * @private
   */
  get direction() {
    return this.args.direction ?? 'down';
  }

  /**
   * By default, the menu is rendered in the same place as the dropdown. If you experience clipping
   * issues, you can set this to false to render the menu in a wormhole at the top of the DOM.
   *
   * @property renderInPlace
   * @type boolean
   * @default true
   * @public
   */
  get renderInPlace() {
    return this.args.renderInPlace ?? true;
  }

  /**
   * @property inNav
   * @type {boolean}
   * @private
   */
  get inNav() {
    return this.args.inNav ?? false;
  }

  /**
   * @property _renderInPlace
   * @type boolean
   * @private
   */
  get _renderInPlace() {
    return this.renderInPlace || !this.destinationElement;
  }

  /**
   * The wormhole destinationElement
   *
   * @property destinationElement
   * @type object
   * @readonly
   * @private
   */
  get destinationElement() {
    return getDestinationElement(this);
  }
  get alignClass() {
    if (this.align === 'right') {
      const alignClass = macroCondition(getOwnConfig().isBS4) ? 'right' : 'end';
      return `dropdown-menu-${alignClass}`;
    }
    return undefined;
  }
  get popperPlacement() {
    let placement = 'bottom-start';
    let {
      direction,
      align
    } = this;
    if (direction === 'up') {
      placement = 'top-start';
      if (align === 'right') {
        placement = 'top-end';
      }
    } else if (direction === 'left') {
      placement = 'left-start';
    } else if (direction === 'right') {
      placement = 'right-start';
    } else if (align === 'right') {
      placement = 'bottom-end';
    }
    return placement;
  }
  setFocus() {
    // when the dropdown menu is rendered in place, focus can stay on the toggle element
    if (this._renderInPlace) {
      return;
    }
    if (this.menuElement) {
      this.menuElement.focus();
    }
  }
  get popperOptions() {
    return {
      placement: this.popperPlacement,
      onFirstUpdate: () => this.setFocus(),
      modifiers: [{
        name: 'flip',
        enabled: this.flip
      }, {
        name: 'applyStyles',
        enabled: !this.inNav
      }]
    };
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
   * @property dividerComponent
   * @type {String}
   * @private
   */
}, _descriptor = _applyDecoratedDescriptor(_class.prototype, "menuElement", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _applyDecoratedDescriptor(_class.prototype, "setFocus", [action], Object.getOwnPropertyDescriptor(_class.prototype, "setFocus"), _class.prototype), _class);
setComponentTemplate(TEMPLATE, DropdownMenu);

export { DropdownMenu as default };
//# sourceMappingURL=menu.js.map
