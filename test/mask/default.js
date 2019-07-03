import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import appendField from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults() {
    const res = await appendField({
      text: this.input,
    })
    return res
  },
  context: Context,
})