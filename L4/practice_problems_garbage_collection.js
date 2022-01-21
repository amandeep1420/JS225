// JavaScript is a garbage-collected language. This means that the JS runtime, 
// rather than the developer, handles memory deallocation.

// 2. 

function setUpAdd(firstNum) {
  return function(secondNum) {
    return add(firstNum, secondNum);
  };
}

function greet(string1, string2) {
  let greetString = string1 + ', ' + string2 + '!';
  let firstLetter = greetString.slice(0, 1).toUpperCase();
  
  console.log(firstLetter + greetString.slice(1));
}

function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}

let sayHello = partial(greet, 'Hello');
let sayHi    = partial(greet, 'Hi');

sayHello('Brandon');
sayHi('Sarah');