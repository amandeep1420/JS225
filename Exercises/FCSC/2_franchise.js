
const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    let that = this;
    return [1, 2, 3].map(function(number) {
      console.log(`${that.name} ${number}`);
    });
  },
};

franchise.allMovies();

// can also use an arrow function, since they use lexical scope
// see below

const franchise2 = {
  name: 'How to Train Your Dragon',
  allMovies() {
    return [1, 2, 3].map(number => `${this.name} ${number}`);
  },
};