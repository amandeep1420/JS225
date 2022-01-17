'use strict';

let obj = {
  a: 5,
  
  setA() {
    this.a = 'meow';
  },
};

let setAAlias = obj.setA;

obj.setAAlias(); // does not work regardless

console.log(obj.a);