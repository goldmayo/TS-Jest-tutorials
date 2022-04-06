const add_test = require("../add");

test("add 1 + 2 to equal 3", () => {
  expect(add_test(1, 2)).toBe(3);
});
