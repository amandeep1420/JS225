// 1.
// we could create an object factory function with the common properties 
// and params that allow us to define custom values
// oh, they wanted actual objects


function createProduct(id, name, stock, price) {
  return { // their example builds a new object step-by-step, then returns it
    id,    // not going to update mine, but worth noting
    name,
    stock,
    price,
    
    setPrice(newPrice) {
      if (newPrice >= 0) {
        this.price = newPrice;
      } else {
        console.log('Invalid price!');
      }
    },
  
    describeProduct() {
      console.log(`=> Name: ${this.name}`);
      console.log(`=> ID: ${this.id}`);
      console.log(`=> Price: $${this.price}`);
      console.log(`=> Stock: ${this.stock}`);
    },
  };
}

let scissors = createProduct(0, 'Scissors', 8, 10);

let drill = createProduct(1, 'Cordless Drill', 15, 45);

let elbow = createProduct(999, 'My Elbow', 2, 1000000);
