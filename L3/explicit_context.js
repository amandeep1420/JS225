// "use strict";

let obj = {
  tellMe() {
    return `I am here: ${this}`;
  },
};

console.log(obj.tellMe());

let globalTellMe = obj.tellMe;

console.log(globalTellMe());

function mySounds() {
  return `I ${this.a} and ${this.b}!`;
}

let obj2 = {
  a: 'meow',
  b: "purr",
};

var a = 'bark';
var b = 'ruff';


let globalSounds = mySounds.bind(this);

console.log(globalSounds());
console.log(mySounds.call(obj2, obj2.a, obj2.b))
// console.log(mySounds());
// console.log(mySounds.call(obj2));

// remember, node exhibits behavior that is inconsistent with chrome dev