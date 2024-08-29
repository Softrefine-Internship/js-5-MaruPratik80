// Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.

'use strict';

class BankAccount {
  constructor(accountNo, name, balance) {
    this.accountNo = accountNo;
    this.name = name;
    this.balance = balance;
  }

  deposit(money) {
    this.balance += money;
    console.log(
      `Bank - ₹${money.toFixed(2)} Credited to ${this.name} Account ${
        this.accountNo
      }. Available Balance ${this.balance.toFixed(2)}`
    );
  }

  withdraw(money) {
    this.balance -= money;
    console.log(
      `Bank - ₹${money.toFixed(2)} has been Debited to ${this.name} Account ${
        this.accountNo
      }. Available Balance ${this.balance.toFixed(2)}`
    );
  }

  transfer(money, recieverAccount) {
    if (money > this.balance || !this || !recieverAccount) return;
    this.balance -= money;
    recieverAccount.balance += money;
    console.log(
      `Bank - ₹${money.toFixed(2)} Transfered from ${this.name} Account ${
        this.accountNo
      } to ${recieverAccount.name} Account ${
        recieverAccount.accountNo
      }. Available Balance ${this.balance.toFixed(2)}`
    );
  }
}

const ac1 = new BankAccount(1111, 'ABC', 5000);
const ac2 = new BankAccount(2222, 'XYZ', 12000);

ac1.deposit(10000);
ac1.withdraw(2000);

ac2.deposit(5000);
ac2.withdraw(1000);

ac1.transfer(100, ac2);
