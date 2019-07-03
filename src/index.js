import parsePath from './lib/parse-path'
import setValue from './lib/set-value'

/**
 * Appends the field to the store.
 * @param {!Object} store The object to which to write the field.
 * @param {string} key The key, e.g., `name`, or `choice[0][language]`
 * @param {string} value The value of the field.
 */
export default function appendField(store, key, value) {
  const steps = parsePath(key)

  steps.reduce(function (context, step) {
    return setValue(context, step, context[step.key], value)
  }, store)
}