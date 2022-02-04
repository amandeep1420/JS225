function generateGreeter(name) {
  return function(mood) {
    greet(name, mood);
  };
}

function greet(name, mood) {
  console.log(`My name is ${name}. I am feeling ${mood} today.`);
}

let amanGreeter = generateGreeter('Aman');
amanGreeter('sad');
amanGreeter('happy');
amanGreeter('nervous');