/*
  Functions can have arguments, and omissions or additions to those arguments
  are silently handled, but if you want to control omissions you can always
  set default values like so
*/
let power = (base = 10, exponent = 2) => {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
};

// Now we can call our function and neglect to pass arguments
console.log(power()); // -> 100

// We can still pass arguments, our defaults will simply be overwritten
console.log(power(2, 10)); // -> 1024


// Another (much less attractive) way of assigning default values would be
// checking for undefined arguments at the top of the function, like so
let square = x => {
  if (x == undefined) {
    x = 10;
  }
  return x * x;
};
