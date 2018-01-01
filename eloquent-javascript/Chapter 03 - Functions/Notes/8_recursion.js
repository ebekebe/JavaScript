// A function that calls itself is known as recursive, care must be taken
// to not accidentally blow the stack
const power = (base = 5, exponent = 3) => 
  exponent === 0 ? 1 : base * power(base, exponent - 1);

// the downside to recursion is that it is about 10 times slower than
// traditional looping in most javascript implementations
console.log(power(2, 16));

// the upside to recursion is that it is often better and simpler to solve
// problems that require exploring several "branches" each of which might branch
// like the "tree" data structure
