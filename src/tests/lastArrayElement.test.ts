import { lastArrayElement } from "../index";

test("lastArrayElement should return the correct element", () => {
    expect(lastArrayElement([5, 54, 12])).toBe(12)
})