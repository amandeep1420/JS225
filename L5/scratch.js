function Dog(weight) {
  this.weight = weight;
}

// Dog.prototype = {
//   weightCheck() {
//     let string = 'I weigh ' + this.weight + ' pounds!';
//     console.log(string);
//   }
// };

Dog.prototype.dig = function() {
  return 'The dog is digging!';
};


let emily = new Dog(25);
// emily.weightCheck();
console.log(emily);
console.log(emily.dig());
console.log(emily.constructor.prototype);
console.log(emily.constructor === Dog);
console.log(Dog.prototype.constructor);
console.log(emily instanceof Dog);

let twinkle = new Dog(5);
twinkle.dig = function() {
  return 'Twinkle is too small to dig. She asks you for gas money.';
};

console.log(emily.dig());
console.log(twinkle.dig());