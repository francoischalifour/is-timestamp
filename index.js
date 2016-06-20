'use strict'

/**
 * Checks if the value is a timestamp.
 *
 * @param  {object}  value            The value to check
 * @param  {Boolean} [isStrict=false] The strict mode
 *                                    `true` to accept only integers
 * @return {Boolean}                  `true` if timestamp, `false` otherwise
 */
module.exports = (value, isStrict) => {
  if (typeof value === 'string') {
    if (isStrict) {
      return false
    }

    value = parseInt(value)
  }

  return  Number.isInteger(value) &&
          value > 1000000000 &&
          value <= 999999999999999
}
