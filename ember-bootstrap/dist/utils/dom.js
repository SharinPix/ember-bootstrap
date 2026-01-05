import { getOwner } from '@ember/application';
import { DEBUG } from '@glimmer/env';
import { warn } from '@ember/debug';
import { isTesting, importSync } from '@embroider/macros';

/*
 * Implement some helpers methods for interacting with the DOM,
 * be it Fastboot's SimpleDOM or the browser's version.
 *
 * Credit to https://github.com/yapplabs/ember-wormhole, from where this has been shamelessly stolen.
 */

function childNodesOfElement(element) {
  let children = [];
  let child = element.firstChild;
  while (child) {
    children.push(child);
    child = child.nextSibling;
  }
  return children;
}
function findElementById(doc, id) {
  if (doc.getElementById) {
    return doc.getElementById(id);
  }
  let nodes = childNodesOfElement(doc);
  let node;
  while (nodes.length) {
    node = nodes.shift();
    if (node.getAttribute && node.getAttribute('id') === id) {
      return node;
    }
    nodes = childNodesOfElement(node).concat(nodes);
  }
}

// Private Ember API usage. Get the dom implementation used by the current
// renderer, be it native browser DOM or Fastboot SimpleDOM
function getDOM(context) {
  let {
    renderer
  } = context;
  if (!renderer?._dom) {
    // pre glimmer2
    let container = getOwner ? getOwner(context) : context.container;
    let documentService = container.lookup('service:-document');
    if (documentService) {
      return documentService;
    }
    renderer = container.lookup('renderer:-dom');
  }
  if (renderer._dom && renderer._dom.document) {
    return renderer._dom.document;
  } else {
    throw new Error('Could not get DOM');
  }
}
function getDestinationElement(context) {
  let dom = getDOM(context);
  const id = 'ember-bootstrap-wormhole';
  let destinationElement = findElementById(dom, id) || findElemementByIdInShadowDom(context, id);
  if (DEBUG && !destinationElement) {
    if (isTesting() && typeof FastBoot === 'undefined') {
      let id;
      try {
        id = importSync('@ember/test-helpers/dom/get-root-element').default().id;
      } catch (ex) {
        // no op
      }
      if (!id) {
        return document.querySelector('#ember-testing');
      }
      return document.getElementById(id);
    }
    warn(`No wormhole destination element found for component ${context}. Add \`<div id="ember-bootstrap-wormhole"></div>\` to \`app/index.html\` or \`app/templates/application.hbs\`!`, false, {
      id: 'ember-bootstrap.no-destination-element'
    });
  }
  return destinationElement;
}
function findElemementByIdInShadowDom(context, id) {
  const owner = getOwner(context);
  return owner.rootElement.querySelector && owner.rootElement.querySelector(`[id="${id}"]`);
}

export { findElemementByIdInShadowDom, findElementById, getDOM, getDestinationElement };
//# sourceMappingURL=dom.js.map
