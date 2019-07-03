import { equal } from '@zoroaster/assert'
import Context from '../context'
import appendField from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof appendField, 'function')
  },
}

export default T