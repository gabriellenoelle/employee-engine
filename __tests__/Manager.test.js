const Employee = require("./Employee");
const checkIfEqual = require("../lib/Manager.js");

class Manager extends Employee {
  constructor(name, id) {
    super(name);

    this.id = id;
    this.employee = new Employee();
  }

  getDescription() {
    return `${this.name} is a ${this.employee} at this company.`;
  }
}

module.exports = Manager;
