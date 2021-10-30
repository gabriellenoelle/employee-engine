const { expect } = require("@jest/globals");
const checkIfEqual = require("../lib/Employee.js");

test("creates an employee name object", () => {
  const name = new Name("employee");

  expect(name.name).toBe("employee");
});
