// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

'use strict';

class BankAccount {
  constructor(accountNo, balance) {
    this.accountNo = accountNo;
    this.balance = balance;
  }

  deposit(money) {
    this.balance += money;
    console.log(
      `Bank - Rs ${money} Credited to your Account ${this.accountNo}. Available Balance ${this.balance}`
    );
  }

  withdraw(money) {
    this.balance -= money;
    console.log(
      `Bank - Rs ${money} has been Debited to your Account ${this.accountNo}. Available Balance ${this.balance}`
    );
  }
}

const ac1 = new BankAccount(1111, 5000);
ac1.deposit(10000);
ac1.withdraw(2000);

const ac2 = new BankAccount(2222, 12000);
ac2.deposit(5000);
ac2.withdraw(1000);
