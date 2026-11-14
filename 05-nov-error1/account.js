"use strict";

class Account {
  /**
   *initialize an instance of account.
   * @param {number} id
   * @param {number} balance
   * @constructor
   */
  constructor(id, balance) {
    this.id = id;
    this.balance = balance;
  }

  /**
   * Withdraw the given amount from the account.
   * @param {number} amount
   */
  withdraw(amount) {
    if (amount < 0) {
      throw new InvalidAmoutError(amount);
    }

    if (this.balance < amount) {
      throw new InsufficientFundsError();
    }

    this.balance -= amount;
  }
}

module.exports = Account;
