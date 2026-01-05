import { _ as _applyDecoratedDescriptor, a as _initializerDefineProperty, b as _defineProperty } from '../../_rollupPluginBabelHelpers-hULyhLkN.js';
import { action } from '@ember/object';
import { isBlank } from '@ember/utils';
import Component from '@glimmer/component';
import { next } from '@ember/runloop';
import { ref } from 'ember-ref-bucket';
import { tracked } from '@glimmer/tracking';
import { guidFor } from '@ember/object/internals';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<div\n  role=\"dialog\"\n  tabindex=\"-1\"\n  aria-labelledby={{this.titleId}}\n  class=\"modal {{if @fade \"fade\"}} {{if @showModal \"show\"}} {{if @inDom \"d-block\"}}\"\n  ...attributes\n  {{on \"keydown\" this.handleKeyDown}}\n  {{on \"mousedown\" this.handleMouseDown}}\n  {{on \"mouseup\" this.handleMouseUp}}\n  {{on \"click\" this.handleClick}}\n  {{style\n    paddingLeft=(concat @paddingLeft \"px\")\n    paddingRight=(concat @paddingRight \"px\")\n    display=(if @inDom \"block\" \"\")\n  }}\n  {{create-ref \"mainNode\"}}\n  {{did-insert this.getOrSetTitleId}}\n  {{did-insert this.setInitialFocus}}\n>\n  <div\n    class=\"modal-dialog\n      {{this.sizeClass}}\n      {{if @centered \"modal-dialog-centered\"}}\n      {{if @scrollable \"modal-dialog-scrollable\"}}\n      {{if\n        (macroCondition (macroGetOwnConfig \"isBS5\"))\n        (if\n          @fullscreen (if (bs-eq @fullscreen true) \"modal-fullscreen\" (concat \"modal-fullscreen-\" @fullscreen \"-down\"))\n        )\n      }}\n      \"\n    role=\"document\"\n  >\n    <div\n      class=\"modal-content\"\n      tabindex=\"-1\"\n      {{focus-trap shouldSelfFocus=true focusTrapOptions=(hash clickOutsideDeactivates=@backdropClose fallbackFocus=\".modal\" escapeDeactivates=@keyboard)}}\n    >\n      {{yield}}\n    </div>\n  </div>\n</div>\n");

var _dec, _class, _descriptor, _descriptor2;
/**
 * Internal component for modal's markup and event handling. Should not be used directly.
 *
 * @class ModalDialog
 * @namespace Components
 * @extends Glimmer.Component
 * @private
 */
let ModalDialog = (_dec = ref('mainNode'), _class = class ModalDialog extends Component {
  constructor(...args) {
    super(...args);
    /**
     * @property id
     * @type null | HTMLElement
     */
    _initializerDefineProperty(this, "_element", _descriptor, this);
    /**
     * The id of the `.modal-title` element
     *
     * @property titleId
     * @type string
     * @default null
     * @private
     */
    _initializerDefineProperty(this, "titleId", _descriptor2, this);
    /**
     * If true clicking on the backdrop will be ignored and will not close modal.
     *
     * @property ignoreBackdropClick
     * @type boolean
     * @default false
     * @private
     */
    _defineProperty(this, "ignoreBackdropClick", false);
    /**
     * The target DOM element of mouse down event.
     *
     * @property mouseDownElement
     * @type object
     * @default null
     * @private
     */
    _defineProperty(this, "mouseDownElement", null);
  }
  /**
   * Name of the size class
   *
   * @property sizeClass
   * @type string
   * @readOnly
   * @private
   */
  get sizeClass() {
    const size = this.args.size;
    return isBlank(size) ? null : `modal-${size}`;
  }
  /**
   * Gets or sets the id of the title element for aria accessibility tags
   *
   * @method getSetTitleID
   * @private
   */
  getOrSetTitleId(modalNode) {
    // Title element may be set by user, so we have to try and find it to set the id
    let nodeId = null;
    if (modalNode) {
      const titleNode = modalNode.querySelector('.modal-title');
      if (titleNode) {
        //Get title id of .modal-title
        nodeId = titleNode.id;
        if (!nodeId) {
          //no title id so we set one
          nodeId = `${guidFor(this)}-title`;
          titleNode.id = nodeId;
        }
      }
    }
    this.titleId = nodeId;
  }
  setInitialFocus(element) {
    const autofocus = element && element.querySelector('[autofocus]');
    if (autofocus instanceof HTMLElement) {
      next(() => autofocus.focus());
    }
  }
  /**
   * @event onClose
   * @public
   */

  handleKeyDown(e) {
    const code = e.keyCode || e.which;
    if (code === 27 && this.args.keyboard) {
      this.args.onClose?.();
    }
  }
  handleClick(e) {
    if (this.ignoreBackdropClick) {
      this.ignoreBackdropClick = false;
      return;
    }
    if (e.target !== this._element || !this.args.backdropClose) {
      return;
    }
    this.args.onClose?.();
  }
  handleMouseDown(e) {
    this.mouseDownElement = e.target;
  }
  handleMouseUp(e) {
    if (this.mouseDownElement !== this._element && e.target === this._element) {
      this.ignoreBackdropClick = true;
    }
  }
}, _descriptor = _applyDecoratedDescriptor(_class.prototype, "_element", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "titleId", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _applyDecoratedDescriptor(_class.prototype, "getOrSetTitleId", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getOrSetTitleId"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setInitialFocus", [action], Object.getOwnPropertyDescriptor(_class.prototype, "setInitialFocus"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleKeyDown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleKeyDown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleClick", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleClick"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleMouseDown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleMouseDown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleMouseUp", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleMouseUp"), _class.prototype), _class);
setComponentTemplate(TEMPLATE, ModalDialog);

export { ModalDialog as default };
//# sourceMappingURL=dialog.js.map
