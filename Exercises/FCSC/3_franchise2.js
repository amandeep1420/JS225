const franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      console.log(this.name + ' ' + number);
    }, this);
  },
};

franchise.allMovies();