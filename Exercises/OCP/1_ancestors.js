Object.prototype.ancestors = function() {
  let currentAncestor = Object.getPrototypeOf(this);
  let ancestors       = [];
  
  while (currentAncestor !== Object.prototype) {
    ancestors.push(currentAncestor.name);
    currentAncestor = Object.getPrototypeOf(currentAncestor);
  }
  
  ancestors.push('Object.prototype');
  console.log(ancestors);
};

const foo = {name: 'foo'};
const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
foo.ancestors();  // returns ['Object.prototype']