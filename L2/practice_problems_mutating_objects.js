// 1.
// correct

// 2.
// correct

// 3.
// correct, but it took me a moment

// 4. 
// let a = 10;
// let obj = {
//   a
// }

// 5.
// let newObj = obj; // both pointing to same object
// newObj.a += 10; // newObj.a and obj.a are both 20 now

// console.log(obj.a === a); // false - a is stil 10. numbers are not mutable, no reference was stored. the property a was reassigned to a new value
// console.log(newObj.a === obj.a); // true - they point to the same object

// 6.
// let animal = {
//   name: 'Pumbaa',
//   species: 'Phacochoerus africanus',
// };

// let menagerie = {
//   warthog: animal,
// };

// animal = {
//   name: 'Timon',
//   species: 'Suricata suricatta',
// };

// menagerie.meerkat = animal;

// menagerie.warthog === animal; // false // animal was reassigned to a new object on line 33
// menagerie.meerkat === animal; // true // they point to the same object