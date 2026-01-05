import { isTesting } from '@embroider/macros';
import { later, cancel } from '@ember/runloop';

let _skipTransition;
function skipTransition(bool) {
  _skipTransition = bool;
}
function _isSkipped() {
  return _skipTransition === true || _skipTransition !== false && isTesting();
}
function waitForTransitionEnd(node, duration = 0) {
  if (!node) {
    return Promise.reject();
  }
  let backup;
  if (_isSkipped()) {
    duration = 0;
  }
  return new Promise(function (resolve) {
    const done = function () {
      if (backup) {
        cancel(backup);
        backup = null;
      }
      node.removeEventListener('transitionend', done);
      resolve();
    };
    node.addEventListener('transitionend', done, false);
    backup = later(this, done, duration);
  });
}

export { waitForTransitionEnd as default, skipTransition };
//# sourceMappingURL=transition-end.js.map
