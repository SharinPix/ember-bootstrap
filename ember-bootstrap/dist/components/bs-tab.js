import { _ as _applyDecoratedDescriptor, a as _initializerDefineProperty } from '../_rollupPluginBabelHelpers-hULyhLkN.js';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { isPresent } from '@ember/utils';
import TabPane from './bs-tab/pane.js';
import { tracked } from '@glimmer/tracking';
import { schedule } from '@ember/runloop';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n<div ...attributes {{did-update this.listenToActiveId @activeId}}>\n  {{#if this.customTabs}}\n    {{yield\n      (hash\n        pane=(component (ensure-safe-component (bs-default @paneComponent (component \"bs-tab/pane\"))) parent=this activeId=this.activeId fade=this.fade fadeTransition=this.fadeTransition registerChild=this.registerChild unregisterChild=this.unregisterChild)\n        activeId=this.activeId\n        select=this.select\n      )\n    }}\n  {{else}}\n    {{#let (ensure-safe-component (bs-default @navComponent (component \"bs-nav\"))) as |NavComponent|}}\n      <NavComponent @type={{this.type}} role=\"tablist\" as |Nav|>\n        {{#each this.navItems as |item|}}\n          {{#if item.isGroup}}\n            <Nav.dropdown class={{if (bs-contains item.childIds this.activeId) \"active\"}} role=\"presentation\" as |DD|>\n              <DD.toggle>{{item.groupTitle}} <span class=\"caret\"></span></DD.toggle>\n              <DD.menu as |Menu|>\n                {{#each item.children as |subItem|}}\n                  <Menu.item>\n                    {{!-- template-lint-disable require-context-role --}}\n                    <a\n                      href=\"#{{subItem.id}}\"\n                      role=\"tab\"\n                      class=\"dropdown-item {{if (bs-eq this.activeId subItem.id) \"active\"}}\"\n                      {{on \"click\" (fn this.select subItem.id)}}\n                    >\n                      {{subItem.title}}\n                    </a>\n                  </Menu.item>\n                {{/each}}\n              </DD.menu>\n            </Nav.dropdown>\n          {{else}}\n            <Nav.item @active={{bs-eq item.id this.activeId}} role=\"presentation\">\n              <a\n                href=\"#{{item.id}}\"\n                role=\"tab\"\n                class=\"nav-link {{if (bs-eq this.activeId item.id) \"active\"}}\"\n                aria-selected={{if (bs-eq this.activeId item.id) \"true\" \"false\"}}\n                {{on \"click\" (fn this.select item.id)}}\n              >\n                {{item.title}}\n              </a>\n            </Nav.item>\n          {{/if}}\n        {{/each}}\n      </NavComponent>\n    {{/let}}\n\n    <div class=\"tab-content\">\n      {{yield\n        (hash\n          pane=(component (ensure-safe-component (bs-default @paneComponent (component \"bs-tab/pane\"))) parent=this activeId=this.activeId fade=this.fade fadeTransition=this.fadeTransition registerChild=this.registerChild unregisterChild=this.unregisterChild)\n          activeId=this.activeId\n          select=this.select\n        )\n      }}\n    </div>\n  {{/if}}\n\n</div>\n");

var _class, _descriptor, _descriptor2;
let Tab = (_class = class Tab extends Component {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "children", _descriptor, this);
    /**
     * @property selectedId
     * @private
     */
    _initializerDefineProperty(this, "selectedId", _descriptor2, this);
  }
  /**
   * Type of nav, either "pills" or "tabs"
   *
   * @property type
   * @type String
   * @default 'tabs'
   * @public
   */
  get type() {
    return this.args.type ?? 'tabs';
  }

  /**
   * @property paneComponent
   * @type {String}
   * @private
   */

  /**
   * @property navComponent
   * @type {String}
   * @private
   */

  /**
   * By default, the tabs will be automatically generated using the available [TabPane](Components.TabPane.html)
   * components. If set to true, you can deactivate this and set up the tabs manually. See the example above.
   *
   * @property customTabs
   * @type boolean
   * @default false
   * @public
   */
  get customTabs() {
    return this.args.customTabs ?? false;
  }
  /**
   * The id (`id`) of the active [TabPane](Components.TabPane.html).
   * By default, the first tab will be active, but this can be changed by setting this property
   *
   * ```hbs
   * {{#bs-tab activeId="pane2"}}
   *   {{#tab.pane id="pane1" title="Tab 1"}}
   *      ...
   *   {{/tab.pane}}
   *   {{#tab.pane id="pane1" title="Tab 1"}}
   *     ...
   *   {{/tab.pane}}
   * {{/bs-tab}}
   * ```
   *
   * When the selection is changed by user interaction this property will not update by using two-way bindings in order
   * to follow DDAU best practices. If you want to react to such changes, subscribe to the `onChange` action
   *
   * @property activeId
   * @type string
   * @public
   */
  get activeId() {
    return this.selectedId ?? this.childPanes[0]?.id;
  }
  /**
   * Set to false to disable the fade animation when switching tabs.
   *
   * @property fade
   * @type boolean
   * @default true
   * @public
   */
  get fade() {
    return this.args.fade ?? true;
  }

  /**
   * The duration of the fade animation
   *
   * @property fadeDuration
   * @type number
   * @default 150
   * @public
   */
  get fadeDuration() {
    return this.args.fadeDuration ?? 150;
  }

  /**
   * This action is called when switching the active tab, with the new and previous pane id
   *
   * You can return false to prevent changing the active tab automatically, and do that in your action by
   * setting `activeId`.
   *
   * @event onChange
   * @public
   */

  /**
   * All `TabPane` child components
   *
   * @property childPanes
   * @type array
   * @readonly
   * @private
   */
  get childPanes() {
    return this.children.filter(child => child instanceof TabPane);
  }

  /**
   * Array of objects that define the tab structure
   *
   * @property navItems
   * @type array
   * @readonly
   * @private
   */
  get navItems() {
    let items = [];
    this.childPanes.forEach(pane => {
      let groupTitle = pane.groupTitle;
      let item = {
        id: pane.id,
        title: pane.title
      };
      if (isPresent(groupTitle)) {
        let group = items.find(item => item.groupTitle === groupTitle);
        if (group) {
          group.children.push(item);
          group.childIds.push(item.id);
        } else {
          items.push({
            isGroup: true,
            groupTitle,
            children: [item],
            childIds: [item.id]
          });
        }
      } else {
        items.push(item);
      }
    });
    return items;
  }
  select(id) {
    let previous = this.activeId;
    if (this.args.onChange?.(id, previous) !== false) {
      // change active tab when `onChange` does not return false
      this.selectedId = id;
    }
  }
  registerChild(element) {
    schedule('actions', this, () => {
      this.children = [...this.children, element];
    });
  }
  unregisterChild(element) {
    schedule('actions', this, () => {
      this.children = this.children.filter(value => value !== element);
    });
  }
  listenToActiveId() {
    this.selectedId = this.args.activeId;
  }
}, _descriptor = _applyDecoratedDescriptor(_class.prototype, "children", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "selectedId", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, "select", [action], Object.getOwnPropertyDescriptor(_class.prototype, "select"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "registerChild", [action], Object.getOwnPropertyDescriptor(_class.prototype, "registerChild"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "unregisterChild", [action], Object.getOwnPropertyDescriptor(_class.prototype, "unregisterChild"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "listenToActiveId", [action], Object.getOwnPropertyDescriptor(_class.prototype, "listenToActiveId"), _class.prototype), _class);
setComponentTemplate(TEMPLATE, Tab);

export { Tab as default };
//# sourceMappingURL=bs-tab.js.map
