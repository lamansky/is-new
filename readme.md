# is-new

A function that remembers the values passed to it and returns true if a value is new. Packaged as a Node.js module.

## Installation

```bash
npm install is-new --save
```

## Usage

```javascript
const IsNew = require('is-new')

// Create instance
const isNew = IsNew()

// Works with objects
const obj = {}
isNew(obj) // true
isNew(obj) // false

// Works with scalars
isNew('test') // true
isNew('test') // false
```
