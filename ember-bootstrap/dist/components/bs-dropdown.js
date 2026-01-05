import { _ as _applyDecoratedDescriptor, a as _initializerDefineProperty } from '../_rollupPluginBabelHelpers-hULyhLkN.js';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { macroCondition, getOwnConfig } from '@embroider/macros';
import { tracked } from '@glimmer/tracking';
import { next } from '@ember/runloop';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n{{#let (element this.htmlTag) as |Tag|}}\n  <Tag\n    class=\"{{this.containerClass}}\n      {{if this.inNav \"nav-item\"}}\n      {{if this.isOpen \"show\"}}\"\n    ...attributes\n  >\n    {{yield\n      (hash\n        button=(component (ensure-safe-component (bs-default @buttonComponent (component \"bs-dropdown/button\")))\n          isOpen=this.isOpen\n          onClick=this.toggleDropdown\n          onKeyDown=this.handleKeyEvent\n          registerChildElement=this.registerChildElement\n          unregisterChildElement=this.unregisterChildElement\n        )\n        toggle=(component (ensure-safe-component (bs-default @toggleComponent (component \"bs-dropdown/toggle\")))\n          isOpen=this.isOpen\n          inNav=@inNav\n          onClick=this.toggleDropdown\n          onKeyDown=this.handleKeyEvent\n          registerChildElement=this.registerChildElement\n          unregisterChildElement=this.unregisterChildElement\n        )\n        menu=(component (ensure-safe-component (bs-default @menuComponent (component \"bs-dropdown/menu\")))\n          isOpen=this.isOpen\n          inNav=@inNav\n          direction=this.direction\n          toggleElement=this.toggleElement\n          registerChildElement=this.registerChildElement\n          unregisterChildElement=this.unregisterChildElement\n        )\n        toggleDropdown=this.toggleDropdown\n        openDropdown=this.openDropdown\n        closeDropdown=this.closeDropdown\n        isOpen=this.isOpen\n      )\n    }}\n    {{#if this.isOpen}}\n      {{on-document \"keydown\" this.handleKeyEvent}}\n      {{on-document \"click\" this.closeHandler capture=true}}\n      {{on-document \"keyup\" this.closeHandler}}\n    {{/if}}\n\n  </Tag>\n{{/let}}");

var _class, _descriptor, _descriptor2, _descriptor3;
const ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key
const SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key
const TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key
const ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key
const ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

const SUPPORTED_KEYCODES = [ESCAPE_KEYCODE, ARROW_DOWN_KEYCODE, ARROW_UP_KEYCODE];

/**
  Bootstrap style [dropdown menus](http://getbootstrap.com/components/#dropdowns), consisting
  of a toggle element, and the dropdown menu itself.

  ### Usage

  Use this component together with the yielded contextual components:
  * [Components.DropdownToggle](Components.DropdownToggle.html)
  * [Components.DropdownButton](Components.DropdownButton.html)
  * [Components.DropdownMenu](Components.DropdownMenu.html)
    * [Components.DropdownMenuItem](Components.DropdownMenuItem.html)
    * [Components.DropdownMenuDivider](Components.DropdownMenuDivider.html)
    * [Components.DropdownMenuLinkTo](Components.DropdownMenuLinkTo.html)

  Furthermore references to the following actions are yielded:

  * `toggleDropdown`
  * `openDropdown`
  * `closeDropdown`

  ```hbs
  <BsDropdown as |dd|>
    <dd.toggle>Dropdown <span class="caret"></span></dd.toggle>
    <dd.menu as |ddm|>
      <ddm.item>
        <ddm.linkTo @route="index">Something</ddm.linkTo>
      </ddm.item>
      <ddm.item>
        <ddm.linkTo @route="index">Something different</ddm.linkTo>
      </ddm.item>
    </dd.menu>
  </BsDropdown>
  ```

  If you need to use dropdowns in a [nav](Components.Nav.html), use the `bs-nav.dropdown`
  contextual component rather than a standalone dropdown to ensure the correct styling
  regardless of your Bootstrap version.

  > Note: the use of angle brackets `<ddm.linkTo>` as shown above is only supported for Ember >= 3.10, as it relies on its
  > Ember's native implementation of the [`LinkComponent`](https://api.emberjs.com/ember/3.12/classes/Ember.Templates.helpers/methods/link-to?anchor=link-to).
  > For older Ember versions please use the legacy syntax with positional arguments:
  > `{{#ddm.link-to "bar" this.model}}Bar{{/ddm.link-to}}`

  ### Button dropdowns

  To use a button as the dropdown toggle element (see http://getbootstrap.com/components/#btn-dropdowns), use the
  `Components.DropdownButton` component as the toggle:

  ```hbs
  <BsDropdown as |dd|>
    <dd.button>Dropdown <span class="caret"></span></dd.button>
    <dd.menu as |ddm|>
      <ddm.item>
        <ddm.linkTo @route="index">Something</ddm.linkTo>
      </ddm.item>
      <ddm.item>
        <ddm.linkTo @route="index">Something different</ddm.linkTo>
      </ddm.item>
    </dd.menu>
  </BsDropdown>
  ```

  It has all the functionality of a `Components.Button` with additional dropdown support.

  ### Split button dropdowns

  To have a regular button with a dropdown button as in http://getbootstrap.com/components/#btn-dropdowns-split, use a
  `Components.Button` component and a `Components.DropdownButton`:

  ```hbs
  <BsDropdown as |dd|>
    <BsButton>Dropdown</BsButton>
    <dd.button>Dropdown <span class="caret"></span></dd.button>
    <dd.menu as |ddm|>
      <ddm.item>
        <ddm.linkTo @route="index">Something</ddm.linkTo>
      </ddm.item>
      <ddm.item>
        <ddm.linkTo @route="index">Something different</ddm.linkTo>
      </ddm.item>
    </dd.menu>
  </BsDropdown>
  ```

  ### Dropup style

  Set the `direction` property to "up" to switch to a "dropup" style:

  ```hbs
  <BsDropdown @direction="up" as |dd|>
    ...
  </BsDropdown>
  ```

  ### Open, close or toggle the dropdown programmatically

  If you wanted to control when the dropdown opens and closes programmatically, the `bs-dropdown` component yields the
  `openDropdown`, `closeDropdown` and `toggleDropdown` actions which you can then pass to your own handlers. For example:

  ```hbs
  <BsDropdown @closeOnMenuClick={{false}} as |dd|>
    <BsButton>Dropdown</BsButton>
    <dd.button>Dropdown <span class="caret"></span></dd.button>
    <dd.menu as |ddm|>
      {{#each this.items as |item|}}
        <ddm.item>
          <a href {{on "click" (fn this.changeItems item dd.closeDropdown)}}>
            {{item.text}}
          </a>
        </ddm.item>
      {{/each}}
    </dd.menu>
  </BsDropdown>
  ```

  Then in your controller or component, optionally close the dropdown:

  ```js
  ...
  actions: {
    handleDropdownClicked(item, closeDropdown) {
      if(item.isTheRightOne) {
        this.chosenItems.pushObject(item);
        closeDropdown();
      } else {
        this.set('item', this.getRandomItems());
      }
    },
  }
  ```


  ### Bootstrap 3/4 Notes

  If you need to use dropdowns in a [nav](Components.Nav.html), use the `bs-nav.dropdown`
  contextual component rather than a standalone dropdown to ensure the correct styling
  regardless of your Bootstrap version.

  If you use the [dropdown divider](Components.DropdownMenuDivider), you don't have to worry
  about differences in the markup between versions.

  Be sure to use the [dropdown menu link-to](Component.DropdownMenuLinkTo), for in-application
  links as dropdown menu items. This is essential for proper styling regardless of Bootstrap
  version and will also provide automatic `active` highlighting on dropdown menu items. If you
  wish to have a dropdown menu item refer to an external link, be sure to apply the `dropdown-item`
  class to the `<a>` tag for Bootstrap 4 compatibility.

  The dropdown menu will be positioned using the `popper.js` library, just as the original Bootstrap
  version does. This also allows you to set `renderInPlace=false` on the menu component to render it in a wormhole,
  which you might want to do if you experience clipping issues by an outer `overflow: hidden` element.

  *Note that only invoking the component in a template as shown above is considered part of its public API. Extending from it (subclassing) is generally not supported, and may break at any time.*

  @class Dropdown
  @namespace Components
  @extends Component
  @public
s*/
let Dropdown = (_class = class Dropdown extends Component {
  constructor(...args) {
    super(...args);
    /**
     * This property reflects the state of the dropdown, whether it is open or closed.
     *
     * @property isOpen
     * @default false
     * @type boolean
     * @private
     */
    _initializerDefineProperty(this, "isOpen", _descriptor, this);
    /**
     * @property toggleElement
     * @private
     */
    _initializerDefineProperty(this, "toggleElement", _descriptor2, this);
    /**
     * The DOM element of the `.dropdown-menu` element
     * @type object
     * @readonly
     * @private
     */
    _initializerDefineProperty(this, "menuElement", _descriptor3, this);
  }
  /**
   * The tag name used for the dropdown element.
   *
   * @property htmlTag
   * @default 'div'
   * @type {string}
   * @public
   */
  get htmlTag() {
    return this.args.htmlTag ?? 'div';
  }
  /**
   * By default, clicking on an open dropdown menu will close it. Set this property to false for the menu to stay open.
   *
   * @property closeOnMenuClick
   * @default true
   * @type boolean
   * @public
   */
  get closeOnMenuClick() {
    return this.args.closeOnMenuClick ?? true;
  }

  /**
   * By default, the dropdown menu will expand downwards. Other options include, 'up', 'left' and 'right'
   *
   * @property direction
   * @type string
   * @default 'down'
   * @public
   */
  get direction() {
    return this.args.direction ?? 'down';
  }

  /**
   * Indicates the dropdown is being used as a navigation item dropdown.
   *
   * @property inNav
   * @type boolean
   * @default false
   * @private
   */

  /**
   * A computed property to generate the suiting class for the dropdown container, either
   *
   * - "dropdown"
   * - "dropup"
   * - "dropstart" (BS5) or "dropleft" (BS4)
   * - "dropend" (BS5) or "dropright" (BS4)
   *
   * @property containerClass
   * @type string
   * @readonly
   * @private
   */
  get containerClass() {
    if (macroCondition(getOwnConfig().isBS5)) {
      if (this.direction === 'left') {
        return 'dropstart';
      } else if (this.direction === 'right') {
        return 'dropend';
      }
    }
    return `drop${this.direction}`;
  }
  /**
   * Action is called when dropdown is about to be shown
   *
   * @event onShow
   * @param {*} value
   * @public
   */

  /**
   * Action is called when dropdown is about to be hidden
   * Returning `false` will block closing the dropdown
   *
   * @event onHide
   * @param {*} value
   * @public
   */

  toggleDropdown() {
    if (this.isOpen) {
      this.closeDropdown();
    } else {
      this.openDropdown();
    }
  }
  openDropdown() {
    this.isOpen = true;
    this.args.onShow?.();
  }
  closeDropdown() {
    if (this.args.onHide?.() === false) return;

    // When closing the dropdown immediately, any click event from dropdown items will be discarded.
    // By deferring the close action to the next render cycle, we ensure that no events get lost.
    next(this, () => {
      this.isOpen = false;
    });
  }

  /**
   * Handler for click events to close the dropdown
   *
   * @method closeOnClickHandler
   * @param e
   * @protected
   */
  closeHandler(e) {
    let {
      target
    } = e;
    let {
      toggleElement,
      menuElement
    } = this;
    if (!this.isDestroyed && (e.type === 'keyup' && e.which === TAB_KEYCODE && menuElement && !menuElement.contains(target) || e.type === 'click' && toggleElement && !toggleElement.contains(target) && (menuElement && !menuElement.contains(target) || this.closeOnMenuClick))) {
      this.closeDropdown();
    }
  }
  handleKeyEvent(event) {
    // If not input/textarea:
    //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
    // If input/textarea:
    //  - If space key => not a dropdown command
    //  - If key is other than escape
    //    - If key is not up or down => not a dropdown command
    //    - If trigger inside the menu => not a dropdown command
    if (['input', 'textarea'].includes(event.target.tagName.toLowerCase()) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || this.menuElement.contains(event.target)) : !SUPPORTED_KEYCODES.includes(event.which)) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    if (!this.isOpen) {
      this.openDropdown();
      return;
    } else if (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE) {
      this.closeDropdown();
      this.toggleElement.focus();
      return;
    }
    let items = [].slice.call(this.menuElement.querySelectorAll('.dropdown-item:not(.disabled):not(:disabled)'));
    if (items.length === 0) {
      return;
    }
    let index = items.indexOf(event.target);
    if (event.which === ARROW_UP_KEYCODE && index > 0) {
      // Up
      index--;
    }
    if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
      // Down
      index++;
    }
    if (index < 0) {
      index = 0;
    }
    items[index].focus();
  }
  registerChildElement(element, [type]) {
    assert(`Unknown child element type "${type}"`, type === 'toggle' || type === 'menu');
    assert(`Registered ${type} element must be an HTMLElement`, element instanceof HTMLElement);
    this[`${type}Element`] = element;
  }
  unregisterChildElement(element, [type]) {
    assert(`Unknown child element type "${type}"`, type === 'toggle' || type === 'menu');
    this[`${type}Element`] = null;
  }

  /**
   * @property buttonComponent
   * @type {String}
   * @private
   */

  /**
   * @property toggleComponent
   * @type {String}
   * @private
   */

  /**
   * @property menuComponent
   * @type {String}
   * @private
   */
}, _descriptor = _applyDecoratedDescriptor(_class.prototype, "isOpen", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "toggleElement", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "menuElement", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _applyDecoratedDescriptor(_class.prototype, "toggleDropdown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleDropdown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "openDropdown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "openDropdown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "closeDropdown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "closeDropdown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "closeHandler", [action], Object.getOwnPropertyDescriptor(_class.prototype, "closeHandler"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleKeyEvent", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleKeyEvent"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "registerChildElement", [action], Object.getOwnPropertyDescriptor(_class.prototype, "registerChildElement"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "unregisterChildElement", [action], Object.getOwnPropertyDescriptor(_class.prototype, "unregisterChildElement"), _class.prototype), _class);
setComponentTemplate(TEMPLATE, Dropdown);

export { Dropdown as default };
//# sourceMappingURL=bs-dropdown.js.map
