import { randomString } from "../index";

test("randomString's return should a string", () => {
    expect(typeof randomString(5)).toBe("string")
})

