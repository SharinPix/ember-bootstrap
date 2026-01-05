import { helper } from '@ember/component/helper';
import { A, isArray } from '@ember/array';

function bsContains(params /* , hash*/) {
  return isArray(params[0]) ? A(params[0]).includes(params[1]) : false;
}
var bsContains_default = helper(bsContains);

export { bsContains, bsContains_default as default };
//# sourceMappingURL=bs-contains.js.map
