// Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.

'use strict';

class Bank {
  constructor(name, branches = []) {
    this.name = name;
    this.branches = branches;
  }

  addBranch(branch) {
    this.branches.push(branch);
  }

  removeBranch(branch) {
    if (!branch) return;
    const index = this.branches.indexOf(branch);
    this.branches.splice(index, 1);
  }

  displayBranches() {
    console.log(this.branches);
  }
}

const boi = new Bank('Bank Of India');
boi.addBranch('Joshipura');
boi.addBranch('Azad chock');
boi.addBranch('Timbavadi');
boi.displayBranches();

boi.removeBranch('Azad chock');
boi.displayBranches();
