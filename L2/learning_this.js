
let me         = { firstName: 'Aman', lastName: 'Null', middleName: 'Null' };
let bestFriend = { firstName: 'Abe', lastName: 'Lincoln' };
let mom        = { firstName: 'Aunt', lastName: 'Jemima' };
let sister    = { firstName: 'Ruth', lastName: 'Struth' };

function fullName(person) {
  console.log(person.firstName + ' ' + person.lastName);
}

function rollCall(collection) {
  collection.forEach(fullName);
}

let people = {
  index: 0,
  collection: [],

  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },  
  
  rollCall: function(collection) {
    this.collection.forEach(this.fullName);
  },
  
  add: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }
    
    person.index = this.index;
    this.collection.push(person);
    this.index += 1;
  },
  
  getIndex: function(person) {
    let index = -1;
    this.collection.forEach(function(comparator, idx) {
      if (comparator.firstName === person.firstName &&
          comparator.lastName === person.lastName) {
        index = idx;
      }
    });
    
    return index;
  },
  
  remove: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }
    
    let index = this.getIndex(person);
    if (index === -1) {
      return;
    }
    
    this.collection.splice(index, 1);
  },
  
  isInvalidPerson: function(person) {
    return typeof person.firstName !== 'string' || typeof person.lastName !== 'string';
  },
  
  get: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }
    
    return this.collection[this.getIndex(person)];
  },
  
  update: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }
    
    let existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  }
};

// console.log(people.getIndex(mom));
// people.remove(mom);
// console.log(people.getIndex(mom));
// people.add(mom);
// console.log(people.getIndex(mom));
// console.log(people.collection);
// people.rollCall();

people.add(me);
console.log(me.index);
people.add(mom);
people.add(bestFriend);
people.add(sister);
console.log(sister.index);