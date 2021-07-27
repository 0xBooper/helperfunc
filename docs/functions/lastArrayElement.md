# lastArrayElement()

## Function Signature:

```typescript
const lastArrayElement = <TArrayType>(array: Array<TArrayType>): TArrayType => {
  // ...
};
```

## Usage:

First, import it.

```typescript
import { lastArrayElement } from "helperfunc";
```

Or, in CommonJS syntax:

```javascript
const { lastArrayElement } = require("helperfunc");
```

`lastArrayElement()` takes in an array as it's parameter. It returns the last element of that array.

Here's how that would work:

```typescript
const array = [1, 2, 3, 4, 5];

const arrayLast: number = lastArrayElement(array);
console.log(arrayLast); // Will be 5
```

## That's all you need to know!

[Back to homepage](../index.md)
