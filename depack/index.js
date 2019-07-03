const { _appendField } = require('./depack')

/**
 * Appends the field to the store.
 * @param {!Object} store The object to which to write the field.
 * @param {string} key The key, e.g., `name`, or `choice[0][language]`
 * @param {string} value The value of the field.
 */
function appendField(store, key, value) {
  _appendField(store, key, value)
}

module.exports = appendField