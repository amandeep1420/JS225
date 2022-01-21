function myFilter(array, func, ctx) {
  const result = [];

  array.forEach(value => {
    if (func.call(ctx, value)) {
      result.push(value);
    }
  });

  return result;
}





const filter = {
  allowedValues: [5, 6, 9],
};





let result = myFilter([2, 1, 3, 4, 5, 6, 12], function(val) {
  return this.allowedValues.includes(val);
}, filter);


console.log(result);