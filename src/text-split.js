const separators = {
  letter: '',
  word: ' '
}

const split = (node, {
  // default options
  a11y = false,
  delimeter = 'letter',
  element = 'span',
  each = () => {}
} = {}) => {
  // split text based on delimeter
  const text = node.textContent.split(separators[delimeter])

  console.log(text)
}

export default split
