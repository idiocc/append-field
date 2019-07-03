/* alanode example/ */
import appendField from '../src'

(async () => {
  const res = await appendField({
    text: 'example',
  })
  console.log(res)
})()