import { randomBool } from "../index"

test("randomBool's return should be a boolean.", () => {
    expect(typeof randomBool(8)).toBe("boolean")
})

test("randomBool's return should be null if randomBool is given a bad parameter", () => {
    expect(randomBool(15)).toBeNull()
})
