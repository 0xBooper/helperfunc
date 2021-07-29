# randomString()

## Overview

This function returns a random string.

## Signature

```typescript
const randomString = (length: number, charSet?: string): string => {
  // ...
};
```

## Usage

First, import it, you should know the drill.

`randomString()` takes in 1 parameter, and another optional one. `length` defines the length of the string,
while `charSet` defines which characters to use. If `charSet` isn't supplied, it uses a default. It will
return a string with a length of the `length` parameter, and that string will have characters of the
`charSet`, if supplied.

If the `charSet` has duplicate letters, that letter may have a higher probability of showing up.

Here is an example of usage:

```typescript
import { randomString } from "helperfunc";

const charSet = "burgerBURGER0xBooper";

console.log(randomString(10, charSet)); // Will be a string 10 characters long, and made up of the characters: "burgerBURGER0xBooper"
```

---

That's all you need to know!
[Back to homepage](../index.md)
