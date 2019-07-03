import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import appendField from '../../src'

export default makeTestSuite('test/result', {
  getResults({ updateStore }) {
    const store = {}

    for (let { key, value } of JSON.parse(this.input)) {
      appendField(store, key, value)
    }
    updateStore(store)
    return store
  },
  jsonProps: ['expected'],
  context: Context,
})