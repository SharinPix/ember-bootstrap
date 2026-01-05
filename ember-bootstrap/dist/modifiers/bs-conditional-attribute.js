import { modifier } from 'ember-modifier';

var bsConditionalAttribute = modifier((element, [attribute, condition, value]) => {
  if (condition) {
    element.setAttribute(attribute, value);
  } else {
    element.removeAttribute(attribute);
  }
});

export { bsConditionalAttribute as default };
//# sourceMappingURL=bs-conditional-attribute.js.map
