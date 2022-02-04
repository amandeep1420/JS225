const greeter = {
  name: 'Naveed',
  greeting: 'Hello',
  message: `${this.greeting} ${this.name}!`,
  sayGreetings() {
    console.log(this.message);
  }
};