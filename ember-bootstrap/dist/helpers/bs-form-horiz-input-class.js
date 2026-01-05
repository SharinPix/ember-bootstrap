import { helper } from '@ember/component/helper';
import { assert } from '@ember/debug';
import { isBlank } from '@ember/utils';

var bsFormHorizInputClass = helper(function bsFormHorizInputClass([horizontalLabelGridClass] /*, named*/) {
  if (isBlank(horizontalLabelGridClass)) {
    return undefined;
  }
  let originalClasses = horizontalLabelGridClass.split(' ');
  let inputClasses = originalClasses.map(originalClass => {
    let parts = originalClass.split('-');
    assert('horizontalInputGridClass must match format bootstrap grid column class', parts.length === 3);
    parts[2] = 12 - parts[2];
    return parts.join('-');
  });
  return inputClasses.join(' ');
});

export { bsFormHorizInputClass as default };
//# sourceMappingURL=bs-form-horiz-input-class.js.map
