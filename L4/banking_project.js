function makeBank() {
  let accounts = [];
  
  return {
    makeAccount(number) {  
      let balance       =  0;
      let transactions  = [];
      
      return {
        deposit(value) {
          balance += value;
          
          transactions.push({ type: "deposit", amount: value });
          return value;
        },
        
        withdraw(value) {
          if (value > balance) {
            value = balance;
          }
          
          transactions.push({ type: "withdraw", amount: value });
          balance -= value;
          return value;
        },
        
        balance() {
          return balance;
        },
        
        number() {
          return number;
        },
        
        transactions() {
          return transactions.slice();
        }
      };
    },
    
    openAccount() {
      let number = accounts.length + 101;
      let account = this.makeAccount(number);
      accounts.push(account);
      return account;
    },
    
    transfer(source, destination, amount) {
      source.withdraw(amount);
      destination.deposit(amount);
      return amount;
      // their code is return destination.deposit(source.withdraw(amount));
      // ain't nobody got time for that
    }
  };
}

