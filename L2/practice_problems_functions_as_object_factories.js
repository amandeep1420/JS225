// 1.
// the getDescription method is duplicated
// all objects have the same properties, but the values of name and continent differ
// a good object factory function would have two parameters to let use specify their values


function makeCountry(name, continent, visited = false) { // ES6 introduced default params
  return {
    name,
    continent,
    visited,
    
    getDescription() {
      let firstString  =  this.name + ' is located in ' + this.continent + '. ';
      let secondString = 'I ' + (this.visited ? 'have' : 'haven\'t') + ' visited ' + this.name + '.';
      return firstString + secondString;
    },
    
    visitCountry() {
      this.visited = true;
    },
  };
}

// or
// function makeCountry(name, continent, visited) {
//   if (visited === undefined) visited = false;
  
//   return {
//     name,
//     continent,
//     visited,
    
//     getDescription() {
//       return this.name + ' is located in ' + this.continent + '.';
//     },
//   };
// }

let chile = makeCountry('The Republic of Chile', 'South America');
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa');

console.log(chile.getDescription());