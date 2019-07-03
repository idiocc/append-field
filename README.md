# @goa/append-field

[![npm version](https://badge.fury.io/js/@goa/append-field.svg)](https://npmjs.org/package/@goa/append-field)

`@goa/append-field` is [fork] W3C HTML JSON form compliant field appender Written In ES6 And Optimised With JavaScript Compiler.

```sh
yarn add @goa/append-field
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`appendField(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)
  * [`_@goa/append-field.Config`](#type-_@goa/append-fieldconfig)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import appendField from '@goa/append-field'
```

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `appendField(`<br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/>`): void`

Call this function to get the result you want.

__<a name="type-_@goa/append-fieldconfig">`_@goa/append-field.Config`</a>__: Options for the program.

|   Name    |       Type       |    Description    | Default |
| --------- | ---------------- | ----------------- | ------- |
| shouldRun | <em>boolean</em> | A boolean option. | `true`  |
| __text*__ | <em>string</em>  | A text to return. | -       |

```js
/* alanode example/ */
import appendField from '@goa/append-field'

(async () => {
  const res = await appendField({
    text: 'example',
  })
  console.log(res)
})()
```
```
example
```

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

(c) [Idio][1] 2019

[1]: https://idio.cc

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/-1.svg?sanitize=true"></a></p>