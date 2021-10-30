const checkIfEqual = require("../lib/Intern.js");

test("checks if 10 is equal to 10", () => {
  expect(checkIfEqual(10, 10)).toBe(true);
});
