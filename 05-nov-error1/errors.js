"use strict";

class InsufficientFundsError extends Error {
  constructor() {
    super("Insuficient funds error");
  }
}

class InvalidAmoutError extends Error {
  /**
   * Initialize an instance of InvalidAmountError
   * @param {number} amount
   * @constructor
   */
  constructor(amount) {
    super(`Invalid amount error`);
    this.amount = amount;
  }
}

module.exports = { InsufficientFundsError, InvalidAmoutError };
