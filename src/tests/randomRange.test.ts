import { randomRange } from "../index";

test("randomRange()'s return type should be number", () => {
    expect(typeof randomRange(5, 10)).toBe("number")
})

test("randomRange()'s return should be between 5 and 10", () => {
    expect(randomRange(5,10) <= 10 && randomRange(5, 10) >= 5).toBe(true)
})