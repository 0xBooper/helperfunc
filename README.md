# WARNING:

This repo is under development. Two of the three promised functions have not been implemented yet.
They will be in the close future. The list of things to do is in the
[github project.](https://github.com/0xBooper/helperfunc/projects/1)

# helperfunc

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/0xBooper/helperfunc/main?label=version&logo=npm&style=flat-square)
[![Build Status](https://travis-ci.com/0xBooper/helperfunc.svg?branch=main)](https://travis-ci.com/0xBooper/helperfunc)

A collection of handy helper functions.

Some of these functions are:

- A function that generates a random string based on a given length (`randomString(lengthOfString: number)`) (**not added yet**)
- A function that gets the last element of a given array (`lastArrayElement(array)`)
- A function that generates a random true/false bool, based on a given single digit probability (`randomBool(singleDigitProbability: number)`)
- ...and more to come!

Because this is all built in Typescript, you'll get useful intellisense and IDE documentation! (if you use an IDE that has those)
However, this will still work in Javascript.

# Examples of usage:

Javascript Example:

```javascript
// Get a random true or false value, then return a integer based upon that.

// Import the NEEDED function
const { randomBool } = require("helperfunc"); // CommonJS syntax
// import { randomBool } from "helperfunc" // ES6 import/export syntax

const randomBoolean = randomBool(5); // 5 is the given probability.

const kewlInteger = randomBoolean ? 1 : 0; // If randomBoolean is true, make kewlInteger 1, otherwise, make it 0.

console.log(kewlInteger); // Log it!
```

Typescript Example:

```typescript
// Get a random string, then log it.

// Import the NEEDED function
import { randomString } from "helperfunc"; // ES6 import/export syntax
// const { randomBool } = require("helperfunc") // CommonJS syntax

const EpicRandomString: string = randomString(10); // Call the function

console.log(EpicRandomString); // Log it
```

Hope you all like it! (P.S: More functions will definitely come.)
