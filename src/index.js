import parsePath from './lib/parse-path'
import setValue from './lib/set-value'

export default function appendField(store, key, value) {
  const steps = parsePath(key)

  steps.reduce(function (context, step) {
    return setValue(context, step, context[step.key], value)
  }, store)
}