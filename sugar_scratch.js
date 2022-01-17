
// function xyzzy({ foo, bar, qux }) {
//   console.log(qux); // 3
//   console.log(bar); // 2
//   console.log(foo); // 1
// }

// let obj = {
//   foo: 1,
//   bar: 2,
//   qux: 3,
// };

// xyzzy(obj);


// let obj = {
//   foo() {return this},
// };

// console.log(obj.foo());

// let globalFoo = obj.foo;

// console.log(globalFoo());


let foo = {
  a: 1,
  b: 2,
};

let bar = {
   a: 'abc',
   b: 'def',
   add() {
     return this.a + this.b;
   },
};

console.log(bar.add.call(foo));













