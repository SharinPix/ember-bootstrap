import { _ as _applyDecoratedDescriptor, a as _initializerDefineProperty, b as _defineProperty } from '../_rollupPluginBabelHelpers-hULyhLkN.js';
import { action } from '@ember/object';
import { assert } from '@ember/debug';
import Component from '@glimmer/component';
import { schedule, next } from '@ember/runloop';
import { service } from '@ember/service';
import waitForTransitionEnd from '../utils/transition-end.js';
import { getDestinationElement } from '../utils/dom.js';
import arg from '../utils/decorators/uses-transition.js';
import isFastBoot from '../utils/is-fastboot.js';
import arg$1 from '../utils/decorators/arg.js';
import { tracked, cached } from '@glimmer/tracking';
import { ref } from 'ember-ref-bucket';
import ModalHeader from './bs-modal/header.js';
import ModalDialog from './bs-modal/dialog.js';
import ModalBody from './bs-modal/body.js';
import ModalFooter from './bs-modal/footer.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{did-insert-helper this.handleVisibilityChanges}}\n{{did-update-helper this.handleVisibilityChanges @open}}\n\n{{#if this.inDom}}\n  {{!\n    ember-on-helper do not support FastBoot yet. This guard can be removed as\n    soon as ember-on-helper guards for FastBoot itself. It is tracked in this\n    GitHub issue: https://github.com/buschtoens/ember-on-helper/issues/3\n  }}\n  {{#unless this.isFastBoot}}\n    {{on-window \"resize\" this.adjustDialog}}\n  {{/unless}}\n\n  {{#let (component (ensure-safe-component this.dialogComponent)\n    onClose=this.close\n    fade=this._fade\n    showModal=this.showModal\n    keyboard=this.keyboard\n    size=@size\n    backdropClose=this.backdropClose\n    inDom=this.inDom\n    paddingLeft=this.paddingLeft\n    paddingRight=this.paddingRight\n    centered=(bs-eq this.position \"center\")\n    scrollable=this.scrollable\n    fullscreen=@fullscreen\n  ) as |Dialog|}}\n    {{#if this._renderInPlace}}\n      <Dialog\n        {{create-ref \"modalElement\"}}\n        ...attributes\n      >\n        {{yield\n          (hash\n            header=(component (ensure-safe-component this.headerComponent) onClose=this.close)\n            body=(ensure-safe-component this.bodyComponent)\n            footer=(component (ensure-safe-component this.footerComponent) onClose=this.close onSubmit=this.doSubmit)\n            close=this.close\n            submit=this.doSubmit\n          )\n        }}\n      </Dialog>\n      <div>\n        {{#if this.shouldShowBackdrop}}\n          <div class=\"modal-backdrop {{if this._fade \"fade\"}} {{if this.showModal \"show\"}}\" {{create-ref \"backdropElement\"}}></div>\n        {{/if}}\n      </div>\n    {{else if this.destinationElement}}\n      {{#in-element this.destinationElement insertBefore=null}}\n        <Dialog\n          {{create-ref \"modalElement\"}}\n          ...attributes\n        >\n          {{yield\n            (hash\n              header=(component (ensure-safe-component this.headerComponent) onClose=this.close)\n              body=(ensure-safe-component this.bodyComponent)\n              footer=(component (ensure-safe-component this.footerComponent) onClose=this.close onSubmit=this.doSubmit)\n              close=this.close\n              submit=this.doSubmit\n            )\n          }}\n        </Dialog>\n        <div>\n          {{#if this.shouldShowBackdrop}}\n            <div class=\"modal-backdrop {{if this._fade \"fade\"}} {{if this.showModal \"show\"}}\" {{create-ref \"backdropElement\"}}></div>\n          {{/if}}\n        </div>\n      {{/in-element}}\n    {{/if}}\n  {{/let}}\n{{/if}}\n");

var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor0, _descriptor1, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16;
function nextRunloop() {
  return new Promise(resolve => next(resolve, undefined));
}
function afterRender() {
  return new Promise(resolve => schedule('afterRender', resolve, undefined));
}
/**
  Component for creating [Bootstrap modals](http://getbootstrap.com/javascript/#modals) with custom markup.

  ### Usage

  ```hbs
  <BsModal @onSubmit={{this.submit}} as |modal|>
    <modal.header>
      <h4 class="modal-title"><i class="glyphicon glyphicon-alert"></i> Alert</h4>
    </modal.header>
    <modal.body>
      Are you absolutely sure you want to do that???
    </modal.body>
    <modal.footer as |footer|>
      <BsButton @onClick={{modal.close}} @type="danger">Oh no, forget it!</BsButton>
      <BsButton @onClick={{modal.submit}} @type="success">Yeah!</BsButton>
    </modal.footer>
  </BsModal>
  ```

  The component yields references to the following contextual components, that you can use to further customize the output:

  * [modal.body](Components.ModalBody.html)
  * [modal.header](Components.ModalHeader.html)
  * [modal.footer](Components.ModalFooter.html)

  Furthermore references to the following actions are yielded:

  * `close`: triggers the `onHide` action and closes the modal
  * `submit`: triggers the `onSubmit` action (or the submit event on a form if present in the body element)

  ### Further reading

  See the documentation of the [bs-modal-simple](Components.ModalSimple.html) component for further examples.

  *Note that only invoking the component in a template as shown above is considered part of its public API. Extending from it (subclassing) is generally not supported, and may break at any time.*

  @class Modal
  @namespace Components
  @extends Glimmer.Component
  @public
*/
let Modal = (_dec = service('-document'), _dec2 = arg('_fade'), _dec3 = ref('modalElement'), _dec4 = ref('backdropElement'), _class = class Modal extends Component {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "document", _descriptor, this);
    /**
     * @property _isOpen
     * @private
     */
    _defineProperty(this, "_isOpen", false);
    /**
     * Visibility of the modal. Toggle to show/hide with CSS transitions.
     *
     * When the modal is closed by user interaction this property will not update by using two-way bindings in order
     * to follow DDAU best practices. If you want to react to such changes, subscribe to the `onHide` action
     *
     * @property open
     * @type boolean
     * @default true
     * @public
     */
    _initializerDefineProperty(this, "open", _descriptor2, this);
    /**
     * Used to apply Bootstrap's visibility classes.
     *
     * @property showModal
     * @type boolean
     * @default false
     * @private
     */
    _initializerDefineProperty(this, "showModal", _descriptor3, this);
    /**
     * Render modal markup?
     *
     * @property inDom
     * @type boolean
     * @default false
     * @private
     */
    _initializerDefineProperty(this, "inDom", _descriptor4, this);
    /**
     * @property paddingLeft
     * @type number|undefined
     * @private
     */
    _initializerDefineProperty(this, "paddingLeft", _descriptor5, this);
    /**
     * @property paddingRight
     * @type number|undefined
     * @private
     */
    _initializerDefineProperty(this, "paddingRight", _descriptor6, this);
    /**
     * Use a semi-transparent modal background to hide the rest of the page.
     *
     * @property backdrop
     * @type boolean
     * @default true
     * @public
     */
    _initializerDefineProperty(this, "backdrop", _descriptor7, this);
    /**
     * @property shouldShowBackdrop
     * @type boolean
     * @private
     */
    _initializerDefineProperty(this, "shouldShowBackdrop", _descriptor8, this);
    /**
     * Closes the modal when escape key is pressed.
     *
     * @property keyboard
     * @type boolean
     * @default true
     * @public
     */
    _initializerDefineProperty(this, "keyboard", _descriptor9, this);
    /**
     * Vertical position, either 'top' (default) or 'center'
     * 'center' will apply the `modal-dialog-centered` class
     *
     * @property position
     * @type {string}
     * @default 'top'
     * @public
     */
    _initializerDefineProperty(this, "position", _descriptor0, this);
    /**
     * [BS4 only!] Allows scrolling within the modal body
     * 'true' will apply the `modal-dialog-scrollable` class
     *
     * @property scrollable
     * @type boolean
     * @default false
     * @public
     */
    _initializerDefineProperty(this, "scrollable", _descriptor1, this);
    /**
     *  [BS5 only!] Allows adding fullscreen mode for modals. It will
     *  apply the `modal-fullscreen` class when using `true` and
     *  `modal-fullscreen-[x]-down` class when using BS breakpoints
     *   ([x] = `sm`, `md`, `lg`, `xl`, `xxl`).
     *
     * Also see the [Bootstrap docs](https://getbootstrap.com/docs/5.1/components/modal/#fullscreen-modal)
     *
     * @property fullscreen
     * @type {(Boolean|String)}
     * @default false
     * @public
     */
    /**
     * @property dialogComponent
     * @type {String}
     * @private
     */
    /**
     * @property headerComponent
     * @type {String}
     * @private
     */
    /**
     * @property bodyComponent
     * @type {String}
     * @private
     */
    /**
     * @property footerComponent
     * @type {String}
     * @private
     */
    /**
     * Property for size styling, set to null (default), 'lg' or 'sm'
     *
     * Also see the [Bootstrap docs](http://getbootstrap.com/javascript/#modals-sizes)
     *
     * @property size
     * @type String
     * @public
     */
    /**
     * If true clicking on the backdrop will close the modal.
     *
     * @property backdropClose
     * @type boolean
     * @default true
     * @public
     */
    _initializerDefineProperty(this, "backdropClose", _descriptor10, this);
    /**
     * If true component will render in place, rather than be wormholed.
     *
     * @property renderInPlace
     * @type boolean
     * @default false
     * @public
     */
    _initializerDefineProperty(this, "renderInPlace", _descriptor11, this);
    /**
     * The duration of the fade transition
     *
     * @property transitionDuration
     * @type number
     * @default 300
     * @public
     */
    _initializerDefineProperty(this, "transitionDuration", _descriptor12, this);
    /**
     * The duration of the backdrop fade transition
     *
     * @property backdropTransitionDuration
     * @type number
     * @default 150
     * @public
     */
    _initializerDefineProperty(this, "backdropTransitionDuration", _descriptor13, this);
    /**
     * Use CSS transitions?
     *
     * @property usesTransition
     * @type boolean
     * @readonly
     * @private
     */
    _initializerDefineProperty(this, "usesTransition", _descriptor14, this);
    _defineProperty(this, "destinationElement", getDestinationElement(this));
    /**
     * The DOM element of the `.modal` element.
     *
     * @property modalElement
     * @type HTMLElement
     * @readonly
     * @private
     */
    _initializerDefineProperty(this, "modalElement", _descriptor15, this);
    /**
     * The DOM element of the backdrop element.
     *
     * @property backdropElement
     * @type HTMLElement
     * @readonly
     * @private
     */
    _initializerDefineProperty(this, "backdropElement", _descriptor16, this);
    /**
     * @type boolean
     * @readonly
     * @private
     */
    _defineProperty(this, "isFastBoot", isFastBoot(this));
    /**
     * The action to be sent when the modal footer's submit button (if present) is pressed.
     * Note that if your modal body contains a form (e.g. [Components.Form](Components.Form.html)) this action will
     * not be triggered. Instead, a submit event will be triggered on the form itself. See the class description for an
     * example.
     *
     * @property onSubmit
     * @type function
     * @public
     */
    /**
     * The action to be sent when the modal is closing.
     * This will be triggered by pressing the modal header's close button (x button) or the modal footer's close button.
     * Note that this will happen before the modal is hidden from the DOM, as the fade transitions will still need some
     * time to finish. Use the `onHidden` if you need the modal to be hidden when the action triggers.
     *
     * You can return false to prevent closing the modal automatically, and do that in your action by
     * setting `open` to false.
     *
     * @property onHide
     * @type function
     * @public
     */
    /**
     * The action to be sent after the modal has been completely hidden (including the CSS transition).
     *
     * @property onHidden
     * @type function
     * @default null
     * @public
     */
    /**
     * The action to be sent when the modal is opening.
     * This will be triggered immediately after the modal is shown (so it's safe to access the DOM for
     * size calculations and the like). This means that if fade=true, it will be shown in between the
     * backdrop animation and the fade animation.
     *
     * @property onShow
     * @type function
     * @default null
     * @public
     */
    /**
     * The action to be sent after the modal has been completely shown (including the CSS transition).
     *
     * @property onShown
     * @type function
     * @public
     */
    /**
     * @private
     */
    _defineProperty(this, "bodyIsOverflowing", false);
    /**
     * @private
     */
    _defineProperty(this, "_originalBodyPad", '');
  }
  /**
   * Set to false to disable fade animations.
   *
   * @property fade
   * @type boolean
   * @default true
   * @public
   */

  get _fade() {
    const isFB = isFastBoot(this);
    return this.args.fade === undefined ? !isFB : this.args.fade;
  }
  /**
   * @property _renderInPlace
   * @type boolean
   * @private
   */
  get _renderInPlace() {
    return this.renderInPlace || !this.destinationElement;
  }
  close() {
    if (this.args.onHide?.() !== false) {
      this.hide();
    }
  }
  doSubmit() {
    const forms = this.modalElement.querySelectorAll('.modal-body form');
    if (forms.length > 0) {
      // trigger submit event on body forms
      const event = document.createEvent('Events');
      event.initEvent('submit', true, true);
      Array.prototype.slice.call(forms).forEach(form => form.dispatchEvent(event));
    } else {
      // if we have no form, we send a submit action
      this.args.onSubmit?.();
    }
  }

  /**
   * Show the modal
   *
   * @method show
   * @private
   */
  async show() {
    if (this._isOpen) {
      return;
    }
    this._isOpen = true;
    this.addBodyClass();
    this.inDom = true;
    await this.showBackdrop();
    if (this.isDestroyed) {
      return;
    }
    if (!isFastBoot(this)) {
      this.checkScrollbar();
      this.setScrollbar();
    }
    await afterRender();
    const {
      modalElement
    } = this;
    if (!modalElement) {
      return;
    }
    if (!isFastBoot(this)) {
      modalElement.scrollTop = 0;
      this.adjustDialog();
    }
    this.showModal = true;
    this.args.onShow?.();
    if (this.usesTransition) {
      await waitForTransitionEnd(modalElement, this.transitionDuration);
    }
    this.args.onShown?.();
  }

  /**
   * Hide the modal
   *
   * @method hide
   * @private
   */
  async hide() {
    if (!this._isOpen) {
      return;
    }
    this._isOpen = false;
    this.showModal = false;
    if (this.usesTransition) {
      await waitForTransitionEnd(this.modalElement, this.transitionDuration);
    }
    await this.hideModal();
  }

  /**
   * Clean up after modal is hidden and call onHidden
   *
   * @method hideModal
   * @private
   */
  async hideModal() {
    if (this.isDestroyed) {
      return;
    }
    await this.hideBackdrop();
    this.removeBodyClass();
    if (!isFastBoot(this)) {
      this.resetAdjustments();
      this.resetScrollbar();
    }
    this.inDom = false;
    this.args.onHidden?.();
  }

  /**
   * Show the backdrop
   *
   * @method showBackdrop
   * @async
   * @private
   */
  async showBackdrop() {
    if (!this.backdrop || !this.usesTransition) {
      return;
    }
    this.shouldShowBackdrop = true;
    await nextRunloop();
    const {
      backdropElement
    } = this;
    assert('Backdrop element should be in DOM', backdropElement);
    await waitForTransitionEnd(backdropElement, this.backdropTransitionDuration);
  }

  /**
   * Hide the backdrop
   *
   * @method hideBackdrop
   * @async
   * @private
   */
  async hideBackdrop() {
    if (!this.backdrop) {
      return;
    }
    if (this.usesTransition) {
      const {
        backdropElement
      } = this;
      assert('Backdrop element should be in DOM', backdropElement);
      await waitForTransitionEnd(backdropElement, this.backdropTransitionDuration);
    }
    if (this.isDestroyed) {
      return;
    }
    this.shouldShowBackdrop = false;
  }

  /**
   * @method adjustDialog
   * @private
   */
  adjustDialog() {
    const modalIsOverflowing = this.modalElement.scrollHeight > document.documentElement.clientHeight;
    this.paddingLeft = !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : undefined;
    this.paddingRight = this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : undefined;
  }

  /**
   * @method resetAdjustments
   * @private
   */
  resetAdjustments() {
    this.paddingLeft = undefined;
    this.paddingRight = undefined;
  }

  /**
   * @method checkScrollbar
   * @private
   */
  checkScrollbar() {
    const fullWindowWidth = window.innerWidth;
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
  }

  /**
   * @method setScrollbar
   * @private
   */
  setScrollbar() {
    const bodyPad = parseInt(document.body.style.paddingRight || '0', 10);
    this._originalBodyPad = document.body.style.paddingRight || '';
    if (this.bodyIsOverflowing) {
      document.body.style.paddingRight = `${bodyPad + this.scrollbarWidth}`;
    }
  }

  /**
   * @method resetScrollbar
   * @private
   */
  resetScrollbar() {
    document.body.style.paddingRight = this._originalBodyPad;
  }
  addBodyClass() {
    // special handling for FastBoot, where real `document` is not available
    if (isFastBoot(this)) {
      // a SimpleDOM instance with just a subset of the DOM API!
      const document = this.document;
      const existingClasses = document.body.getAttribute('class') || '';
      if (!existingClasses.includes('modal-open')) {
        document.body.setAttribute('class', `modal-open ${existingClasses}`);
      }
    } else {
      document.body.classList.add('modal-open');
    }
  }
  removeBodyClass() {
    if (isFastBoot(this)) {
      // no need for FastBoot support here
      return;
    }
    document.body.classList.remove('modal-open');
  }

  /**
   * @property scrollbarWidth
   * @type number
   * @readonly
   * @private
   */
  get scrollbarWidth() {
    const scrollDiv = document.createElement('div');
    scrollDiv.className = 'modal-scrollbar-measure';
    const modalEl = this.modalElement;
    if (!modalEl.parentNode || !scrollDiv.parentNode) {
      return 0;
    }
    modalEl.parentNode.insertBefore(scrollDiv, modalEl.nextSibling);
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    scrollDiv.parentNode.removeChild(scrollDiv);
    return scrollbarWidth;
  }
  get dialogComponent() {
    return this.args.dialogComponent ?? ModalDialog;
  }
  get headerComponent() {
    return this.args.headerComponent ?? ModalHeader;
  }
  get footerComponent() {
    return this.args.footerComponent ?? ModalFooter;
  }
  get bodyComponent() {
    return this.args.bodyComponent ?? ModalBody;
  }
  willDestroy(...rest) {
    super.willDestroy(...rest);
    this.removeBodyClass();
    if (!isFastBoot(this)) {
      this.resetScrollbar();
    }
  }
  handleVisibilityChanges() {
    if (this.open) {
      this.show();
    } else {
      this.hide();
    }
  }
}, _descriptor = _applyDecoratedDescriptor(_class.prototype, "document", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "open", [arg$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "showModal", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return this.open && (!this._fade || isFastBoot(this));
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "inDom", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return this.open;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "paddingLeft", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "paddingRight", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "backdrop", [arg$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "shouldShowBackdrop", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return this.open && this.backdrop;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "keyboard", [arg$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
}), _descriptor0 = _applyDecoratedDescriptor(_class.prototype, "position", [arg$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'top';
  }
}), _descriptor1 = _applyDecoratedDescriptor(_class.prototype, "scrollable", [arg$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "backdropClose", [arg$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "renderInPlace", [arg$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "transitionDuration", [arg$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 300;
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "backdropTransitionDuration", [arg$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 150;
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "usesTransition", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, "modalElement", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, "backdropElement", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, "close", [action], Object.getOwnPropertyDescriptor(_class.prototype, "close"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "doSubmit", [action], Object.getOwnPropertyDescriptor(_class.prototype, "doSubmit"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "adjustDialog", [action], Object.getOwnPropertyDescriptor(_class.prototype, "adjustDialog"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "scrollbarWidth", [cached], Object.getOwnPropertyDescriptor(_class.prototype, "scrollbarWidth"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleVisibilityChanges", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleVisibilityChanges"), _class.prototype), _class);
setComponentTemplate(TEMPLATE, Modal);

export { Modal as default };
//# sourceMappingURL=bs-modal.js.map
