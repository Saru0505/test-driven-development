import { isValid } from "./isbn13";

describe("isValid ISBN-13", () => {
  test("valid ISBNs", () => {
    expect(isValid("9780306406157")).toBe(true);
    expect(isValid("9781861972712")).toBe(true);
  });

  test("invalid ISBNs", () => {
    expect(isValid("9780306406158")).toBe(false);
    expect(isValid("1234567890123")).toBe(false);
  });

  test("non-digit characters", () => {
    expect(() => isValid("97803A640615")).toThrow("Invalid ISBN format");
  });

  test("wrong length", () => {
    expect(() => isValid("97803064061")).toThrow("ISBN must be 13 digits long");
  });
});
