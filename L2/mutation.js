let counter = { count: 0 };

function increment(thing) {
  thing.count += 1;
  console.log(thing);
}

console.log(counter);
increment(counter);
console.log(counter);