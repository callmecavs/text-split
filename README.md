# text-split

[![text-split on Travis](https://img.shields.io/travis/callmecavs/text-split.svg?style=flat-square)](https://travis-ci.org/callmecavs/text-split) [![text-split on NPM](https://img.shields.io/npm/v/text-split.svg?style=flat-square)](https://www.npmjs.com/package/text-split) [![text-split Downloads on NPM](https://img.shields.io/npm/dm/text-split.svg?style=flat-square)](https://www.npmjs.com/package/text-split) [![Standard JavaScript Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

Text wrapping for type animations.

## Install

```sh
$ npm install text-split --save
```

## Why?

To address some prior art:

* [Lettering.js](https://github.com/davatron5000/Lettering.js) - dependent on jQuery
* [charming](https://github.com/yuanqing/charming)
  * less straightforward (child nodes are recursed through for text content)
  * less flexible (mandatory `class` and `aria` attributes are added, no per piece callback)

With only 1 method and 4 options, `text-split` offers the most control via the smallest API surface area.

## Getting Started

```javascript
import splitter from 'text-split'

// a target node is required
const target = document.querySelector('.heading')

// pass in the target node
// get back the newly created nodes wrapping the target text (in an array)
const created = splitter(target)
```

Read more about [options](#options) below to handle more complex use cases.

## Options

All options have defaults, as shown here:

```javascript
const defaults = {
  a11y = true,
  delimeter = 'letter',
  each = null,
  element = 'span'
}
```

Each option is explained in further detail below:

* [a11y](#a11y)
* [delimeter](#delimeter)
* [each](#each)
* [element](#element)

### a11y

Enable (default) or disable setting of `aria` attributes on parent and created child nodes.

```javascript
splitter(target, { a11y: false })
```

### delimeter

Either `letter` (default) or `word`, indicating how to break up the target text before wrapping it.

```javascript
splitter(target, { delimeter: 'word' })
```

### each

A function that, if it exists, is called and passed:

* the created node, with appropriate `textContent`
* the 0-based node index (relative to the other created nodes)
* the [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) that stores the nodes created (thus far)

This is the ~~fun part~~ escape hatch.

```javascript
splitter(target, {
  each: (node, index, frag) => {
    // add a class based on the index
    node.classList.add(`number-${index}`)

    // add a transition delay based on the index
    node.style.transitionDelay = `${index * .05}s`
  }
})
```

### element

A tag name that is used to [create the wrapper element](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) for each piece of the text after it is split using the `delimeter`.

```javascript
const divs = splitter(target, { element: 'div' })
```

## License

[MIT](https://opensource.org/licenses/MIT). © 2018 Michael Cavalea
