import { helper } from '@ember/component/helper';
import { isBlank } from '@ember/utils';

function sizeClassHelper([prefix, size], {
  default: defaultValue
}) {
  size = size ?? defaultValue;
  return isBlank(size) ? null : `${prefix}-${size}`;
}
var bsSizeClass = helper(sizeClassHelper);

export { bsSizeClass as default, sizeClassHelper };
//# sourceMappingURL=bs-size-class.js.map
