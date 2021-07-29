# randomRange()

## Overview

`randomRange()` returns a number between two numbers.

## Signature

```typescript
const randomRange = (maximum: number, minimum: number): number => {
  // ...
};
```

## Usage

First, import it. You should know how to do this already.

`randomRange()` takes in two mandatory parameters. `maximum: number` and `minimum: number`.
It returns a number between those two parameters. However, there is a chance that the returned
number IS the `maximum`/`minimum` parameter. If you make it so that the `maximum` parameter
is less than the `minimum` parameter, it will console.log a warning and swap their values.
So, don't do it please.

Here's a short example:

```typescript
import { randomRange } from "helperfunc";

console.log(randomRange(300, 1200)); // Will return a value between 300 and 1200.
```

---

That's all ya need to know!

[Back to main page](../index.nd)
