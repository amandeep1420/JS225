// function getDefiningObject(object, propKey) {
//   let currentObj = object;
  
//   while (currentObj !== null) {
//     if (currentObj.hasOwnProperty(propKey)) return currentObj;
//     currentObj = Object.getPrototypeOf(currentObj);
//   }
  
//   return currentObj;
// }

// function getDefiningObject(object, propKey) { // theirs is nice
//   while (object && !object.hasOwnProperty(propKey)) {
//     object = Object.getPrototypeOf(object);
//   }

//   return object;
// }

// function shallowCopy(object) {
//   let protoObj = Object.getPrototypeOf(object);
//   let newObj   = Object.create(protoObj);
  
//   Object.getOwnPropertyNames(object).forEach(function(key) {
//     newObj[key] = object[key];
//   });
  
//   return newObj;
// }

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = Object.create(foo);
// bar.c = 3;
// bar.say = function() {
//   console.log('c is ' + this.c);
// };

// let baz = shallowCopy(bar);
// console.log(baz.a);       // => 1
// console.log(baz.say());                // => c is 3
// console.log(baz.hasOwnProperty('a'));  // false
// console.log(baz.hasOwnProperty('b'));  // false





function extend(destination, ...sources) {
  sources.forEach(function(object) {
    let newProps = Object.getOwnPropertyNames(object);
    newProps.forEach(prop => destination[prop] = object[prop]);
  });
  
  return destination;
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe'
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe







