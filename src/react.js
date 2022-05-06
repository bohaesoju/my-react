export function createElement(tagName, props, ...children) {
  return { tagName, props, children: children.flat() }
}

export function renderRealDOM(virtualDOM){
  if(typeof virtualDOM === 'string'){
    return document.createTextNode(virtualDOM)
  }

  const $Element = document.createElement(virtualDOM.tagName);

  virtualDOM.children
    .map(renderRealDOM)
    .forEach(node => $Element.appendChild(node));
  return $Element;
}

export function diffingUpdate (parent, nextNode, previousNode, parentIndex = 0) {
  console.log('nextNode', nextNode);
  if (typeof nextNode === "string" && typeof previousNode === "string") {
    if (nextNode === previousNode) return;
    return parent.replaceChild(
      renderRealDOM(nextNode),
      parent.childNodes[parentIndex]
    )
  }

  for (const [index] of nextNode.children.entries()) {
    diffingUpdate(
      parent.childNodes[parentIndex],
      nextNode.children[index],
      previousNode.children[index],
      index
    )
  }
}
