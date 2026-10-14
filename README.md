# pwd-gen-4b

A simple password generator for a school project. You can set the password length and choose whether to allow special characters.

## Installation

```bash
npm install @lindingerl23038/pwd-gen-4b
```

## Usage

```js
const genPwd = require('@lindingerl23038/pwd-gen-4b');

// 16 characters, special characters allowed
console.log(genPwd(16, true));

// 12 characters, letters and numbers only
console.log(genPwd(12, false));
```

## Parameters

```js
genPwd(length, symbols);
```

| Parameter | Type | Description |
| --- | --- | --- |
| `length` | `number` | Password length. Must be an integer greater than 0. |
| `symbols` | `boolean` | Set to `true` to allow special characters or `false` to use only letters and numbers. |

Both parameters are required. The function returns the password as a string. If either parameter is invalid, it returns `undefined`.
