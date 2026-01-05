import { helper } from '@ember/component/helper';

function typeClassHelper([prefix, type], {
  default: defaultValue,
  outline = false
}) {
  type = type ?? defaultValue;
  if (outline) {
    return `${prefix}-outline-${type}`;
  }
  return `${prefix}-${type}`;
}
var bsTypeClass = helper(typeClassHelper);

export { bsTypeClass as default, typeClassHelper };
//# sourceMappingURL=bs-type-class.js.map
