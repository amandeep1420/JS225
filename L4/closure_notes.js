// function makeCounterLogger(start) {
//   return function(end) {
//     if (start < end) {
//       for (let i = start; i <= end; i += 1) {
//         console.log(i);
//       }
//     } else {
//       for (let i = start; i >= end; i -= 1) {
//       console.log(i);
//       }
//     }
//   };
// }

// let countLog = makeCounterLogger(5);

// countLog(8);
// console.log('divide');
// countLog(2);

// very sneaky!! we have to use a new counter variable, otherwise the original 
// start variable is incremented - and that incrementation is retained after the function
// finishes execution! that's nuts! I was not expecting that!! that's closure for you










function makeList() {
  let list = [];
  
  return function(todo) {
    if (!todo) {
      logList(list);
    } else if (list.includes(todo)) {
      let todoIndex = list.indexOf(todo);
      list.splice(todoIndex, 1);
      console.log(`${todo} removed!`);
    } else {
      list.push(todo);
      console.log(`${todo} added!`);
    }
  };
}

function logList(list) {
  if (list.length === 0) {
    console.log('The list is empty.');
  } else {
    list.forEach(function(item) { console.log(item) });
  }
}

let list = makeList();
list();
list('make breakfast');
list('read book');
list();
list('make breakfast');
list();













