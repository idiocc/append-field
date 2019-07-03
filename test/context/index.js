import { join } from 'path'
import { debuglog } from 'util'

const LOG = debuglog('@goa/append-field')

/**
 * A testing context for the package.
 */
export default class Context {
  async _init() {
    LOG('init context')
  }
  /**
   * Example method.
   */
  example() {
    return 'OK'
  }
  /**
   * A tagged template that returns the relative path to the fixture.
   * @param {string} file
   * @example
   * fixture`input.txt` // -> test/fixture/input.txt
   */
  fixture(file) {
    const f = file.raw[0]
    return join('test/fixture', f)
  }
  async _destroy() {
    LOG('destroy context')
  }
  /**
   * Fixes sparse arrays for comparison.
   */
  updateStore(store) {
    Object.values(store).forEach((item) => {
      if (Array.isArray(item)) {
        for (let i = 0; i < item.length; i++) {
          const v = item[i]
          if (v === undefined) item[i] = null
        }
      } else if (typeof item == 'object') {
        this.updateStore(item)
      }
    })
  }
}