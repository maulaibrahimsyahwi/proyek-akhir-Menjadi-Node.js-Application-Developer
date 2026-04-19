const { generateRandomStringSync } = require("./utils");

test("should return string with matching length", () => {
  const result = generateRandomStringSync(5);
  expect(typeof result).toBe("string");
  expect(result.length).toBe(5);
});

test("should throw error when length is not a number", () => {
  expect(() => generateRandomStringSync("5")).toThrow();
});

test("should throw error when length is less than 1", () => {
  expect(() => generateRandomStringSync(0)).toThrow();
});
