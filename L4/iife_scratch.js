(function(string) {
  console.log('yo man!');
  console.log(string);
}('get it right!'));

let foo = function() {
  return function() {
    console.log('immediately invoked!');
  }();
}();

foo;

(function(name, type) {
  let obj = {
    name,
    type,
  };
  
  console.log(`The type is ${obj.type} and the name is ${obj.name}!`);
})('Aman', 'human');

let generateStudentId = (function() {
  let studentId = 0;
  
  return function() {
    studentId += 1;
    return studentId;
  };
})();

console.log(generateStudentId());
console.log(generateStudentId());