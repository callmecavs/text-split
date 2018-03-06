require('jsdom-global')()

const expect = require('chai').expect
const split = require('../dist/text-split.js')

/* eslint-env mocha */

describe('text-split', () => {
  it('"a11y" option', () => {
    const test = document.createElement('p')
    test.textContent = 'Split text.'
    split(test, { a11y: false })

    const expected = [
      '<p>',
      '<span>S</span>',
      '<span>p</span>',
      '<span>l</span>',
      '<span>i</span>',
      '<span>t</span>',
      '<span> </span>',
      '<span>t</span>',
      '<span>e</span>',
      '<span>x</span>',
      '<span>t</span>',
      '<span>.</span>',
      '</p>'
    ].join('')

    expect(test.outerHTML).to.equal(expected)
  })

  it('"delimeter:letter" option', () => {
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

  it('"delimeter:word" option', () => {
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

  it('"each" option', () => {
    const test = document.createElement('p')
    test.textContent = 'Split text.'
    split(test, { a11y: false, each: (node, index) => node.classList.add('test', `test-${index}`) })

    const expected = [
      '<p>',
      '<span class="test test-0">S</span>',
      '<span class="test test-1">p</span>',
      '<span class="test test-2">l</span>',
      '<span class="test test-3">i</span>',
      '<span class="test test-4">t</span>',
      '<span class="test test-5"> </span>',
      '<span class="test test-6">t</span>',
      '<span class="test test-7">e</span>',
      '<span class="test test-8">x</span>',
      '<span class="test test-9">t</span>',
      '<span class="test test-10">.</span>',
      '</p>'
    ].join('')

    expect(test.outerHTML).to.equal(expected)
  })

  it('"element" option', () => {
    const test = document.createElement('div')
    test.textContent = 'Split text.'
    split(test, { delimeter: 'word', element: 'div' })

    const expected = [
      '<div aria-label="Split text.">',
      '<div aria-hidden="true">Split</div>',
      '<div aria-hidden="true">text.</div>',
      '</div>'
    ].join('')

    expect(test.outerHTML).to.equal(expected)
  })
})
