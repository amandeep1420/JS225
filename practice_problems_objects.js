let invoices = {
  unpaid: [],
  paid: [],
  
  add: function(name, amount) {
    this.unpaid.push({name, amount}); 
  },
  
  totalDue: function() {
    return this.unpaid.reduce(function(total, current) 
    { return total + current.amount }, 0);
  },

  totalPaid: function() {
    return this.paid.reduce(function(total, current) 
    { return total + current.amount }, 0);
  },
  
  payInvoice: function(name) {
    let newUnpaid = [];
    
    for (let index = 0; index < this.unpaid.length; index += 1) {
      if (this.unpaid[index].name === name) {
        this.paid.push(this.unpaid[index]);
      } else {
        newUnpaid.push(this.unpaid[index]);
      }
    }
    
    this.unpaid = newUnpaid;
  }
};

// the syntax above (for add) only works if the object property name 
// and the variable name pointing to the value have the same names.



invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);

invoices.payInvoice('Due North Development');
invoices.payInvoice("Slough Digital");
console.log(invoices.totalDue());
console.log(invoices.totalPaid());
