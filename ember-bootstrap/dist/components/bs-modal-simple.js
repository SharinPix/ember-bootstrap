import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n<BsModal\n  @open={{@open}}\n  @fade={{@fade}}\n  @backdrop={{@backdrop}}\n  @keyboard={{@keyboard}}\n  @position={{@position}}\n  @scrollable={{@scrollable}}\n  @size={{@size}}\n  @backdropClose={{@backdropClose}}\n  @renderInPlace={{@renderInPlace}}\n  @transitionDuration={{@transitionDuration}}\n  @backdropTransitionDuration={{@backdropTransitionDuration}}\n  @onSubmit={{@onSubmit}}\n  @onHide={{@onHide}}\n  @onHidden={{@onHidden}}\n  @onShow={{@onShow}}\n  @onShown={{@onShown}}\n  ...attributes\n  as |modal|\n>\n  <modal.header @title={{@title}} @closeButton={{@closeButton}} />\n  <modal.body>\n    {{yield\n      (hash\n        close=modal.close\n        submit=modal.submit\n      )\n    }}\n  </modal.body>\n  <modal.footer\n    @closeTitle={{@closeTitle}}\n    @submitTitle={{@submitTitle}}\n    @submitButtonType={{@submitButtonType}}\n  />\n</BsModal>\n");

/**
  Component for creating [Bootstrap modals](http://getbootstrap.com/javascript/#modals) with a some common default markup
  including a header, footer and body. Creating a simple modal is easy:

  ```hbs
  <BsModalSimple @title="Simple Dialog">
    Hello world!
  </BsModalSimple>
  ```

  This will automatically create the appropriate markup, with a modal header containing the title, and a footer containing
  a default "Ok" button, that will close the modal automatically (unless you return `false` from `onHide`).

  A modal created this way will be visible at once. You can use the `{{#if ...}}` helper to hide all modal elements from
  the DOM until needed. Or you can bind the `open` argument to trigger showing and hiding the modal:

  ```hbs
  <BsModalSimple @open={{this.openModal}} @title="Simple Dialog">
    Hello world!
  </BsModalSimple>
  ```

  ### Custom Markup

  To customize the markup within the modal you can use the [<BsModal>](Components.Modal.html) component.

  ### Modals with forms

  There is a special case when you have a form inside your modals body: you probably do not want to have a submit button
  within your form but instead in your modal footer. Hover pressing the submit button outside your form would not
  trigger the form data to be submitted. In the example below this would not trigger the submit action of the form, and
  thus bypass the form validation feature of the form component.

  ```hbs
  <BsModalSimple @title="Form Example" @closeTitle="Cancel" @submitTitle="Ok">
    <BsForm @model={{this}} @onSubmit={{this.submit}} @submitOnEnter={{true}} as |Form|>
      <Form.element @label="first name" @property="firstname" />
      <Form.element @label="last name" @property="lastname" />
    </BsForm>
  </BsModalSimple>
  ```

  The modal component supports this common case by triggering the submit event programmatically on the body's form if
  present whenever the footer's submit button is pressed. To allow the form to be submitted by pressing the enter key
  also, you must either set `@submitOnEnter={{true}}` on the `<BsForm>` or include an invisible submit button in the
  form (`<button type="submit" class="d-hidden">Submit</button>`).

  ### Auto-focus

  In order to allow key handling to function, the modal's root element is given focus once the modal is shown. If your
  modal contains an element such as a text input and you would like it to be given focus rather than the modal element,
  then give it the HTML5 autofocus attribute:

  ```hbs
  <BsModalSimple @title="Form Example" @closeTitle="Cancel" @submitTitle="Ok">
    <BsForm @model={{this}} @onSubmit={{this.submit}} @submitOnEnter={{true}} as |Form|>
      <Form.element @label="first name" @property="firstname" @autofocus={{true}} />
      <Form.element @label="last name" @property="lastname" />
    </BsForm>
  </BsModalSimple>
  ```

  ### Modals inside wormhole

  Modals make use of the [ember-wormhole](https://github.com/yapplabs/ember-wormhole) addon, which will be installed
  automatically alongside ember-bootstrap. This is used to allow the modal to be placed in deeply nested
  components/templates where it belongs to logically, but to have the actual DOM elements within a special container
  element, which is a child of ember's root element. This will make sure that modals always overlay the whole app, and
  are not effected by parent elements with `overflow: hidden` for example.

  If you want the modal to render in place, rather than being wormholed, you can set `@renderInPlace={{true}}`.

  @class ModalSimple
  @namespace Components
  @public
*/

var bsModalSimple = setComponentTemplate(TEMPLATE, templateOnly());

export { bsModalSimple as default };
//# sourceMappingURL=bs-modal-simple.js.map
