# is-timestamp

> Checks if a value is a timestamp

## Install

```console
$ npm install is-timestamp
```

## Usage

```js
const isTimestamp = require('is-timestamp')

isTimestamp(new Date())
// => true

isTimestamp(1466421736923)
// => true

isTimestamp('1466421736923')
// => true

isTimestamp('1466421736923', true)
// => false (because strict mode on)

isTimestamp('foo')
// => false
```

## Notes

This module works by default for both *integers* and *strings*. If you only want to use integers, use the strict mode:

```js
isTimestamp('1466421736923', true)
// => false
```

## License

MIT © [François Chalifour](http://francoischalifour.com)
