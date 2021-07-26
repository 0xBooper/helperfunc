import { randomBool } from "../index"

test("randomBool's return should not be null.", () => {
    expect(randomBool(5)).toBeNull()
})

test("randomBool's return should be null if randomBool is given a bad parameter", () => {
    expect(randomBool(15)).toBeNull()
})
