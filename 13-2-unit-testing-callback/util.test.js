const { generateRandomString } = require("./utils");

test("should return string with matching length via callback", (done) => {
  generateRandomString(5, (err, result) => {
    expect(err).toBeNull();
    expect(typeof result).toBe("string");
    expect(result.length).toBe(5);
    done();
  });
});

test("should return error when length is not a number", (done) => {
  generateRandomString("5", (err, result) => {
    expect(err).toBeInstanceOf(Error);
    done();
  });
});

test("should return error when length is less than 1", (done) => {
  generateRandomString(0, (err, result) => {
    expect(err).toBeInstanceOf(Error);
    done();
  });
});
