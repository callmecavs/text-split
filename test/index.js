require('jsdom-global')()

const expect = require('chai').expect
const split = require('../dist/text-split.js')

/* eslint-env mocha */

describe('text-split', () => {
  it('should split by letter', () => {
    const test = document.createElement('p')
    test.textContent = 'Split text.'
    split(test)

    const expected = [
      '<p aria-label="Split text.">',
      '<span aria-hidden="true">S</span>',
      '<span aria-hidden="true">p</span>',
      '<span aria-hidden="true">l</span>',
      '<span aria-hidden="true">i</span>',
      '<span aria-hidden="true">t</span>',
      '<span aria-hidden="true"> </span>',
      '<span aria-hidden="true">t</span>',
      '<span aria-hidden="true">e</span>',
      '<span aria-hidden="true">x</span>',
      '<span aria-hidden="true">t</span>',
      '<span aria-hidden="true">.</span>',
      '</p>'
    ].join('')

    expect(test.outerHTML).to.equal(expected)
  })

  it('should split by word', () => {
    const test = document.createElement('p')
    test.textContent = 'Split text.'
    split(test, { delimeter: 'word' })

    const expected = [
      '<p aria-label="Split text.">',
      '<span aria-hidden="true">Split</span>',
      '<span aria-hidden="true">text.</span>',
      '</p>'
    ].join('')

    expect(test.outerHTML).to.equal(expected)
  })
})
