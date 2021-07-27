# randomBool()

## Function signature:

```typescript
const randomBool = (singleDigitProbability: number): boolean => {
  // ...
};
```

## Usage:

First, import it.

```typescript
import { randomBool } from "helperfunc";
```

Or, in CommonJS syntax:

```javascript
const { randomBool } = require("helperfunc");
```

`randomBool()` takes in a single digit number as it's only parameter.

**WANRING:**: `randomBool()` ONLY allows single digit numbers. If you use a number above 10, it will return null and console.error out.

Here's an example:

```typescript
const booleanButRandom = randomBool(9); // 90% of true, 10% of false

console.log(booleanButRandom); // Would be true or false
```

## That's all you need to know!

[Back to Homepage](../index.md)
