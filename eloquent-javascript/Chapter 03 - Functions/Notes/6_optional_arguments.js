// JavaScript is broad-minded about the number of arguments a function needs
// extras will be ignored and omissions will be assigned 'undefined'

let power = (base, exponent, message) => {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  console.log('message: ' + message);
  return result;
};

console.log(power());
console.log(power(2, 3));
console.log(power(2, 10, 'You\'re Awesome!'));
console.log(power(2, 5, 'You\'re Verbose!', 'Cheese', 42));
