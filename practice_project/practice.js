function extend(...objects) {
  for (let index = objects.length - 1; index - 1 >= 0; index -= 1) {
    let currentObj = objects[index];
    let earlierObj = objects[index - 1];
    for (let prop in currentObj) { earlierObj[prop] = currentObj[prop] }
  }
  
  return objects[0];
}


function tester() {
  var new_obj = { bar: "baz" },
      old_obj = { foo: "bar" },
      ext_obj = extend(old_obj, new_obj),
      crazy_object = extend({ foo: "quuz" }, new_obj, old_obj);
  return ext_obj.foo === "bar" && ext_obj.bar === "baz";
}

console.log(tester());