function newStack() {
  let items = [];
  
  return {
    push(item) {
      items.push(item);
    },
    
    pop() {
      return items.pop();
    },
    
    printStack() {
      items.forEach(function(item) {
        console.log(item);
      });
    },
  };
}