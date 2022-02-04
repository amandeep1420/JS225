// // function newPerson(name) {
// //   let obj = {name};
  
// //   Object.defineProperties(obj, {
// //     log: {
// //       value: function() { // can also just write value() like concise syntax
// //         console.log(this.name);
// //       },
// //       writable: false,
// //     },
// //   });
  
// //   return obj;
// // }

// // let me = newPerson('Shane Riley');
// // me.log();     // => Shane Riley
// // me.log = function() { console.log('Amanda Rose'); };
// // me.log();     // => Shane Riley


// let frozen = {
//   integer: 4,
//   string: 'String',
//   array: [1, 2, 3],
//   object: {
//     foo: 'bar'
//   },
//   func() {
//     console.log('I\'m frozen');
//   },
// };

// Object.freeze(frozen);
// frozen.integer = 8;
// frozen.string = 'Number';
// frozen.array = 'cat';
// console.log(frozen.array);

// let logMessage = require('./logmodule.js');

// logMessage();

function Cat() {
  let species = 'calico';
  
  this.species = `I am a ${species}.`;
}

let toby = new Cat();

console.log(toby.species);