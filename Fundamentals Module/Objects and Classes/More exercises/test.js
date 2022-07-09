let myAccount =  {
    holder: 'John',
    balance: 1500
};

let otherAccount = myAccount;
otherAccount.balance -= 300;

console.log(myAccount.balance);
