import { join } from 'path'
import { debuglog } from 'util'
import { updateStore } from '@multipart/test-form-data'

const LOG = debuglog('@multipart/append-field')

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
  get updateStore() {
    return updateStore
  }
}