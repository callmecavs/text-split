const separators = {
  letter: '',
  word: ' '
}

const split = (target, {
  // default options
  a11y = true,
  delimeter = 'letter',
  each = null,
  element = 'span'
} = {}) => {
  // ensure just text content, no children nodes
  const mustard = !target.children.length && target.textContent

  if (!mustard) {
    throw new Error('text-split: target must have text content, and no children.')
  }

  // cache for created nodes
  const created = []

  // split text based on delimeter
  const text = target
    .textContent
    .split(separators[delimeter])

  // create an element for each piece of text
  // the element and index are passed to the each callback if it exists
  const frag = document.createDocumentFragment()
  const len = text.length

  let index
  let node

  for (index = 0; index < len; index++) {
    node = document.createElement(element)
    node.textContent = text[index]

    if (a11y) node.setAttribute('aria-hidden', 'true')
    if (each) each(node, index)

    created.push(node)
    frag.appendChild(node)
  }

  // append label to target
  // must be done before clearing target.innerHTML
  if (a11y) target.setAttribute('aria-label', target.textContent)

  // clear text, and append fragment
  target.innerHTML = ''
  target.appendChild(frag)

  // return created nodes, as an array, for convenience's sake
  return created
}

export default split
