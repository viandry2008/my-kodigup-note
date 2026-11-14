/**
 * klo ada try harus pasti ada catch
 */

function Account(id, balance) {
  this.id = id;
  this.balance = balance;
}

Account.prototype.withdraw = function (amount) {
  if (this.balance < amount) {
    throw new Error("Insufficient balance");
  }

  this.balance -= amount;
};

const account = new Account(1, 100);

// account.withdraw(1e6);

try {
  account.withdraw(1e6);
  console.log("Withdraw succeeded");
} catch (err) {
  console.log("Insufficient balance");
  console.log(err);
}

console.log("Program ended");
