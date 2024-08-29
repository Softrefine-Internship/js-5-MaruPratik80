// Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.

'use strict';

class University {
  #departments = [];

  constructor(name) {
    this.name = name;
  }

  addDepartment(dep) {
    this.#departments.push(dep);
  }

  removeDepartment(dep) {
    if (!dep) return;
    const index = this.#departments.indexOf(dep);
    this.#departments.splice(index, 1);
  }

  displayDepartments() {
    console.log(this.#departments);
  }
}

const university = new University('Dr. Subhash University');
university.addDepartment('Engineering');
university.addDepartment('Science');
university.displayDepartments();

university.addDepartment('Management');
university.addDepartment('Computer Application');
university.displayDepartments();

university.removeDepartment('Management');
university.displayDepartments();
