const { generateRandomStringProm } = require("./utils");

test("should return string with matching length via promise", async () => {
  const result = await generateRandomStringProm(5);
  expect(typeof result).toBe("string");
  expect(result.length).toBe(5);
});

test("should reject when length is not a number", async () => {
  await expect(generateRandomStringProm("5")).rejects.toThrow();
});

test("should reject when length is less than 1", async () => {
  await expect(generateRandomStringProm(0)).rejects.toThrow();
});
