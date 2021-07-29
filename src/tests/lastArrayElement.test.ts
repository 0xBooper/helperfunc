import { lastArrayElement } from "../index";

test("lastArrayElement should return the correct element", () => {
    expect(lastArrayElement([5, 54, 12])).toBe(12)
})

test("lastArrayElement's return should be the type of the array", () => {
    expect(typeof lastArrayElement(["burger", "second burger", "french fries", "i'm hungry"])).toBe("string")
})