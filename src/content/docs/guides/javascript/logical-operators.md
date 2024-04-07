---
title: Logical AND, OR and Nullish Coalescing Operators 
description: Logical AND, OR and Nullish Coalescing Operators 
---

## && (Logical AND):

The && operator returns the first falsy value.

```js
const a = true;
const b = false;
const c = "Hello";

console.log(a && b); // Output: false
console.log(a && c); // Output: Hello
```

## || (Logical OR):

The || operator returns the first truthy value

```js 
const a = false;
const b = true;
const c = "World";

console.log(a || b); // Output: true
console.log(a || c); // Output: World
```

## ?? (Nullish Coalescing):

The ?? operator returns the first defined value (not null or undefined) in a series of expressions.
It is used to provide a default value when the left-hand side is null or undefined.

```js 
const a = null;
const b = undefined;
const c = "Default Value";

console.log(a ?? b ?? c); // Output: Default Value
```
