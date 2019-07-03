# @goa/append-field

[![npm version](https://badge.fury.io/js/%40goa%2Fappend-field.svg)](https://npmjs.org/package/@goa/append-field)

`@goa/append-field` is a fork of [W3C HTML JSON form compliant field appender](https://github.com/LinusU/node-append-field) Written In ES6 And Optimised With [JavaScript Compiler](https://compiler.page).

A [W3C HTML JSON forms spec](http://www.w3.org/TR/html-json-forms/) compliant field appender (for lack of a better name). Useful for people implementing `application/x-www-form-urlencoded` and `multipart/form-data parsers`.

```sh
yarn add @goa/append-field
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`appendField(store: Object, key: string, value: string)`](#appendfieldstore-objectkey-stringvalue-string-void)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import appendField from '@goa/append-field'
```

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `appendField(`<br/>&nbsp;&nbsp;`store: Object,`<br/>&nbsp;&nbsp;`key: string,`<br/>&nbsp;&nbsp;`value: string,`<br/>`): void`

Adds the field named `key` with the value `value` to the object store.

```js
import appendField from '@goa/append-field'

const obj = {}

appendField(obj, 'pets[0][species]', 'Dahut')
appendField(obj, 'pets[0][name]', 'Hypatia')
appendField(obj, 'pets[1][species]', 'Felis Stultus')
appendField(obj, 'pets[1][name]', 'Billie')

console.log(obj)
```
```js
{ pets: 
   [ { species: 'Dahut', name: 'Hypatia' },
     { species: 'Felis Stultus', name: 'Billie' } ] }
```

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

Original Work by [Linus Unnebäck](https://github.com/LinusU/node-append-field).

---

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png" alt="Art Deco">
      </a>
    </th>
    <th>© <a href="https://artd.eco">Art Deco</a> for <a href="https://idio.cc">Idio</a> 2019</th>
    <th>
      <a href="https://idio.cc">
        <img src="https://avatars3.githubusercontent.com/u/40834161?s=100" width="100" alt="Idio">
      </a>
    </th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img src="https://raw.githubusercontent.com/artdecoweb/www.technation.sucks/master/anim.gif"
          alt="Tech Nation Visa">
      </a>
    </th>
    <th><a href="https://www.technation.sucks">Tech Nation Visa Sucks</a></th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/-1.svg?sanitize=true"></a></p>