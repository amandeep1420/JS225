function objectsEqual(obj1, obj2) {
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);
  
  if (obj1Keys.length !== obj2Keys.length) return false;
  
  let equal = true;
  
  [obj1Keys, obj2Keys].forEach(keySet => {
    keySet.forEach(key => {
      if (obj1Keys.indexOf(key) === -1 || obj2Keys.indexOf(key) === -1) equal = false;
      if (obj1[key] !== obj2[key]) equal = false;
    });
  });
  
  return equal;
}

// this is a lazy, unoptimized solution with no helpers
// does not perform deep equality comparison, either
// uses forEach which forces complete iteration instead of a simple for loop, which would be better
// their solution is great

function objectsEqual(a, b) {
  if (a === b) {
    return true;
  }

  return (keysMatch(a, b) && valuesMatch(a, b));
}

function keysMatch(a, b) {
  const aKeys = Object.getOwnPropertyNames(a).sort();
  const bKeys = Object.getOwnPropertyNames(b).sort();

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  return aKeys.every((key, index) => key === bKeys[index]);
}

function valuesMatch(a, b) {
  const aKeys = Object.getOwnPropertyNames(a).sort();

  return aKeys.every(key => a[key] === b[key]);
}