// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.

'use strict';

class Employee {
  bonuses = 10000;
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  calcAnnualSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  calcAnnualSalary() {
    return this.salary * 12 + this.bonuses;
  }
}

const manager1 = new Manager('Akash', 50000, 'IT');
console.log(manager1.calcAnnualSalary());

const manager2 = new Manager('Keval', 45000, 'IT');
console.log(manager2.calcAnnualSalary());
