// function Rectangle(length, width) {
//   this.length = length;
//   this.width = width;
// }

// Rectangle.prototype.getArea = function() {
//   return this.length * this.width;
// };

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  
  static sides = 4;
  
  getArea() {
    return this.length * this.width;
  }
  
  static giveMeow() {
    console.log('Meoooow.');
  }
}

Rectangle.whatShape = function() {
  console.log('Rectangle!');
};

Rectangle.prototype.whatShape = function() {
  console.log('An instance of Rectangle!');
};

let newRec = new Rectangle(10, 45);

Rectangle.whatShape();
Rectangle.giveMeow();
newRec.whatShape();

console.log(Rectangle.sides);
