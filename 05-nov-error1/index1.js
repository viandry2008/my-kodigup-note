"use strict";

const { InvalidAmoutError, InsufficientFundsError } = require("./errors");
const Account = require("./account");

const account = new Account(1, 100);

try {
  // account.withdraw(-50);
  // account.withdraw(5e6);
  account.withdraw(5);
  console.log("Withdraw succeeded");
} catch (err) {
  // console.log(err);
  if (err instanceof InvalidAmoutError) {
    console.log(`Invalid amount (${err.amount}), please try again.`);
  } else if (err instanceof InsufficientFundsError) {
    console.log(`Insufficient funds, please try again`);
  } else {
    console.log("Uknown error, please try again");
  }
}
// 59:05
console.log("Program ended");
