# helperfunc | functions that can help
# ![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/0xBooper/helperfunc/main?label=version&logo=npm&style=flat-square) [![Build Status](https://travis-ci.com/0xBooper/helperfunc.svg?branch=main)](https://travis-ci.com/0xBooper/helperfunc) [![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2F0xBooper%2Fhelperfunc.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2F0xBooper%2Fhelperfunc?ref=badge_shield) ![npm](https://img.shields.io/npm/dt/helperfunc?logo=npm&style=flat-square)

A collection of handy helper functions.

Some of these functions are:

- A function that generates a random string based on a given length (`randomString(lengthOfString: number)`) (**not added yet**)
- A function that gets the last element of a given array (`lastArrayElement(array)`)
- A function that generates a random true/false bool, based on a given single digit probability (`randomBool(singleDigitProbability: number)`)
- ...and more to come!

Because this is all built in Typescript, you'll get useful intellisense and IDE documentation! (if you use an IDE that has those)
However, this will still work in Javascript.

## Installation

You can run this:

```bash
npm install helperfunc
```

Or you can run:

```bash
yarn add helperfunc
```

Depending on whether you use yarn or npm.

## Examples of usage:

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

## Official Documentation:
Documentation can be found [here.](https://0xBooper.github.io/helperfunc)

## Status of functions:

The roadmap of stuff to add can be found
[here](https://github.com/0xBooper/helperfunc/projects/1)

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2F0xBooper%2Fhelperfunc.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2F0xBooper%2Fhelperfunc?ref=badge_large)

---

Hope you all like it! More stuff is coming soon!
