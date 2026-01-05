function formValidationClass(validationType) {
  switch (validationType) {
    case 'error':
      return 'is-invalid';
    case 'success':
      return 'is-valid';
    case 'warning':
      return 'is-warning';
    // not officially supported in BS4 :(
    default:
      return undefined;
  }
}

export { formValidationClass as default };
//# sourceMappingURL=form-validation-class.js.map
