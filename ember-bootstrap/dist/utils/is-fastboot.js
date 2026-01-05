import { getOwner } from '@ember/application';

function isFastBoot(context) {
  const owner = getOwner(context);
  if (!owner) {
    return false;
  }
  const fastbootService = owner.lookup('service:fastboot');
  return fastbootService ? fastbootService.isFastBoot : false;
}

export { isFastBoot as default };
//# sourceMappingURL=is-fastboot.js.map
