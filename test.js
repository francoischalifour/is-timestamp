const test = require('ava').test

const isTimestamp = require('./')

test('is timestamp: current timestamp as integer', t => {
  t.true(isTimestamp(Date.now()))
})

test('is timestamp: current timestamp as integer (strict mode)', t => {
  t.true(isTimestamp(Date.now(), true))
})

test('is timestamp: current timestamp as string', t => {
  t.true(isTimestamp(Date.now().toString()))
})

test('is timestamp: lowest timestamp', t => {
  t.true(isTimestamp(1000000001))
})

test('is timestamp: highest timestamp', t => {
  t.true(isTimestamp(999999999999999))
})

test('is not timestamp: current timestamp as string (strict mode)', t => {
  t.false(isTimestamp(Date.now().toString(), true))
})

test('is not timestamp: too low timestamp', t => {
  t.false(isTimestamp(1000000000))
})

test('is not timestamp: too high timestamp', t => {
  t.false(isTimestamp(1000000000000000))
})

test('is not timestamp: infinity', t => {
  t.false(isTimestamp(Infinity))
})

test('is not timestamp: alphabetic characters', t => {
  t.false(isTimestamp('foo'))
})
