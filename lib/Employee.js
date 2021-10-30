class Employee {
  constructor(name = "") {
    this.name = name;
    this.manager = "";
    this.engineer = "";
    this.intern = "";
  }

  getName() {}

  getId() {
    return `${this.name}'s employee ID is ${this.id}.`;
  }

  getEmail() {
    return `${this.name}'s email is ${this.email}.`;
  }

  getRole(Employee) {
    return `${this.name}'s role is ${this.role}.`;
  }
}
