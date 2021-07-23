import { randomBool } from "../index"

test("randomBool's return should not be null.", () => {
    expect(randomBool(5)).not.toBeNull()
})

test("randomBool's return should be an error if randomBool is given a bad parameter.", () => {
    expect(randomBool(15)).toThrowError("Parameter must be single digit.")
})