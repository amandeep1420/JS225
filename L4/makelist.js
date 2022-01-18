// function makeLister() {
//   let items = [];

//   return function(newItem) {
//     let index;
//     if (newItem) {
//       index = items.indexOf(newItem);
//       if (index === -1) {
//         items.push(newItem);
//         console.log(newItem + ' added!');
//       } else {
//         items.splice(index, 1);
//         console.log(newItem + ' removed!');
//       }
//     } else {
//       if (items.length === 0) {
//         console.log('The list is empty.');
//       } else {
//         items.forEach(function(item) {
//           console.log(item);
//         });
//       }
//     }
//   };
// }

function makeList() {
  let list = [];
  
  let listObj = {
    add(item) {
      list.push(item);
      console.log(`${item} added!`);
    },
    
    list() {
      if (list.length > 0) {
      list.forEach(function(item) { console.log(item) });
      } else {
        console.log('The list is empty.');
      }
    },
    
    remove(item) {
      let sliceIndex = list.indexOf(item);
      list.splice(sliceIndex, 1);
      console.log(`${item} removed!`);
    },
  };
  
  return listObj;
}