# helperfunc
A collection of handy helper functions.

These some of these functions are:
    - A function that generates a random string based on a given length (`randomString(length: number)`)
    - A function that gets the last element of a given array (`lastElementOfArray(array)`)
    - A function that generates a random true/false bool, based on a given single digit probability (`randomBool(singleDigitProbability: number)`)
    - ...and more to come!

Because this is all built in Typescript, you'll get useful intellisense and IDE documentation! (if you use an IDE that has those)
However, this will still work in Javascript.

# Examples of usage:

(javascript up ahead)
```javascript
    // Get a random true or false value, then return a integer based upon that. 
    
    // Import the NEEDED function
    const { randomBool } = require("helperfunc") // CommonJS syntax
    // import { randomBool } from "helperfunc" // ES6 import/export syntax

    const randomBoolean = randomBool(5) // 5 is the given probability.

    const kewlInteger = randomBoolean ? 1 : 0 // If randomBoolean is true, make kewlInteger 1, otherwise, make it 0.

    console.log(kewlInteger) // Log it!
```

(typescript up ahead)
```typescript
    // Get a random string, then log it.
    
    // Import the NEEDED function
    import { randomString } from "helperfunc" // ES6 import/export syntax
    // const { randomBool } = require("helperfunc") // CommonJS syntax

    const EpicRandomString: string = randomString(10) // Call the function

    console.log(EpicRandomString) // Log it
```

Hope you all like it! (P.S: More functions will definitely come.)