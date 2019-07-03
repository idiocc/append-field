import appendField from '../src'

const obj = {}

appendField(obj, 'pets[0][species]', 'Dahut')
appendField(obj, 'pets[0][name]', 'Hypatia')
appendField(obj, 'pets[1][species]', 'Felis Stultus')
appendField(obj, 'pets[1][name]', 'Billie')

console.log(obj)