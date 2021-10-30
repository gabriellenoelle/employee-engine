const Employee = require("./Employee");
const checkIfEqual = require("../lib/Intern.js");

class Intern extends Employee {
  constructor(name, id) {
    super(name);

    this.id = id;
    this.employee = new Employee();
  }

  getDescription() {
    return `${this.name} is a ${this.employee} at this company.`;
  }
}

module.exports = Intern;
