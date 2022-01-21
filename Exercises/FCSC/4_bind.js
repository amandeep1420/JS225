function myBind(func, context) {
  return func.bind(context);
}

// no; this results in invocation - come on now

// need something like this

function myBind(func, ctx) {
  return function(...args) {
    return func.apply(ctx, args);
  };
}

