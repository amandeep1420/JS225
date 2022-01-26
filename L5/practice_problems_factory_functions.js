// 1. repetition of methods (NOT functions - rememeber, methods have a receiver/calling object)
// 2. cannot tell "type" easily - no way to tell whether an object was created by any given function

// function Person(firstName, lastName = '') {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.fullName = function() {
//     return (this.firstName + ' ' + this.lastName).trim();
//   };
//   this.whatAmI = this;
// }

// let john = new Person('John', 'Doe');

let prot = {}

let foo = Object.create(prot)

Object.getPrototypeOf(foo) === prot;

prot.isPrototypeOf(foo);