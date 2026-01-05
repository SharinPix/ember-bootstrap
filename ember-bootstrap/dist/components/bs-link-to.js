import { _ as _applyDecoratedDescriptor, a as _initializerDefineProperty } from '../_rollupPluginBabelHelpers-hULyhLkN.js';
import Component from '@glimmer/component';
import { service } from '@ember/service';
import { assert } from '@ember/debug';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<LinkTo\n  @route={{@route}}\n  @models={{this.models}}\n  @query={{this.query}}\n  @disabled={{@disabled}}\n  class={{@attrClassInternal}}\n  ...attributes\n>\n  {{yield}}\n</LinkTo>");

var _class, _descriptor;
/**
 This is largely copied from Ember.LinkComponent. It is used as extending from Ember.LinkComponent has been deprecated.
 We need this to
 * register ourselves to a parent component that needs to know `active` state due to Bootstrap markup requirements, see Nav/LinkTo
 * continue supporting positional params until we can remove support

 @class LinkComponent
 @namespace Components
 @extends Component
 @private
*/
let LinkComponent = (_class = class LinkComponent extends Component {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "router", _descriptor, this);
  }
  get active() {
    if (!this.args.route) {
      return false;
    }
    return this.router.isActive(this.args.route, ...this.models, {
      queryParams: this.query
    });
  }
  get models() {
    const {
      model,
      models
    } = this.args;
    if (model !== undefined) {
      return [model];
    } else if (models !== undefined) {
      assert('The `@models` argument must be an array.', Array.isArray(models));
      return models;
    } else {
      return [];
    }
  }
  get query() {
    return this.args.query ?? {};
  }
}, _descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [service], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _class);
setComponentTemplate(TEMPLATE, LinkComponent);

export { LinkComponent as default };
//# sourceMappingURL=bs-link-to.js.map
