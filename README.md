# text-split

[![text-split on Travis](https://img.shields.io/travis/callmecavs/text-split.svg?style=flat-square)](https://travis-ci.org/callmecavs/text-split) [![text-split on NPM](https://img.shields.io/npm/v/text-split.svg?style=flat-square)](https://www.npmjs.com/package/text-split) [![text-split Downloads on NPM](https://img.shields.io/npm/dm/text-split.svg?style=flat-square)](https://www.npmjs.com/package/text-split) [![Standard JavaScript Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

Text wrapping for type animations.

## Install

```sh
$ npm install text-split --save
```

## Why?

To address some prior art individually:

* [Lettering.js](https://github.com/davatron5000/Lettering.js) - dependent on jQuery
* [charming](https://github.com/yuanqing/charming) - less straightforward (child nodes are recursed through for text), less flexible (mandatory `class` and `aria` attributes are added)

With only 1 method and 4 options, `text-split` offers the most control via the smallest API surface area.

## Use

```javascript
import splitter from 'text-split'

// a target node is required
const target = document.querySelector('.heading')

// all options have defaults (shown here)
const options = {
  a11y = true,
  delimeter = 'letter',
  each = null,
  element = 'span'
}

// pass the target and the options object
// function returns the created elements as an array
const created = splitter(target, options)
```

## License

[MIT](https://opensource.org/licenses/MIT). © 2018 Michael Cavalea
