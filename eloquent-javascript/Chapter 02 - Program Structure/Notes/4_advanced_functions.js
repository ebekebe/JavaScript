function test(f) {
  console.log('factorial of 2 is: ' + f(2));
  console.log('factorial of _ is: ' + f());
  console.log('factorial of 10 is: ' + f(10));
}

// recursively solves the factorial of a given value n
// Also if no argument is provided it will default to 5
function fact(n = 5) {
  if (n == 0) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}
test(fact);

console.log("--");

// this function uses the new arrow notation and a conditional operator
// so that it can be written succinctly on 1 line, but is functionally identical
var factorial = (n = 5) => n == 0 ? 1 : n * factorial(n - 1);
test(factorial);
