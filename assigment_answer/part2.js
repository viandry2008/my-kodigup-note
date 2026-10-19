const readlineSync = require("readline-sync");

function Account(id, balance) {
    this.id = id;
    this.balance = balance;

    this.withdraw = function(amount){
        this.balance -= amount;
    };

    this.deposit = function(amount){
        this.balance += amount;
    };
}

function AccountController(){
    this.accounts = [];

    this.generateInitialAccounts = function(count, balance){
        for (let i = 0; i < count; i++) {
            const account = new Account(i, balance);
            this.accounts.push(account);
        }
    };

    this.findAccount = function(id){
        for (let  i= 0;  i< this.accounts.length; +i++) {
            const account = this.accounts[i];
            
            if (account.id === id) {
                return account;
            }
        }

        return undefined;
    };
}

function logMenu() {
    console.log(`\nMain menu
    1: check balance
    2: withdraw
    3: deposit
    4: exit`);
}

const Menu = {
    CHECK_BALANCE: 1,
    WITHDRAW: 2,
    DEPOSITl: 3,
    EXIT: 4
};

const accountController = new AccountController();
accountController.generateInitialAccounts(10, 100);

while(true){
    const accountId = +readlineSync.question("Enter an id: ");
    const account = accountController.findAccount(accountId);

    if (!account) {
        continue;
    }

    while(true){
        logMenu();

        const choice = +readlineSync.question("Enter a choice: ");

        switch (choice) {
            case Menu.CHECK_BALANCE:
                const account = accountController.findAccount(accountId);
                console.log(`The balance is ${account.balance}`);
                break;
            case Menu.WITHDRAW:
                const withdrawAmmount = +readlineSync.question("Enter an amount to withdraw: ");
                account.withdraw(withdrawAmmount);
                break;
            case Menu.DEPOSIT:
                const depositeAmmount = +readlineSync.question("Enter an amount to deposit: ");
                account.deposit(depositeAmmount);
                break;
            case Menu.EXIT:
                break;
        }
    }
}

