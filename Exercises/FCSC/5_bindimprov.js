function myBind(func, ctx, ...args) {
  return function(...otherArgs) {
    return func.apply(ctx, [...args, ...otherArgs]);
  };
}