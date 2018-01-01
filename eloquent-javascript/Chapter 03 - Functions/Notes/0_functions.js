// Functions are used to define new vocabulary and are defined like this
var sayHello = function() {
  console.log('Hello');
};

sayHello(); // -> Hello

// Some functions have parameters like this and produce values
var square = function(num) {
  return num * num;
};

console.log(square(5)); // -> 25

// Functions can have multiple parameters
var power = function(base, exponent) {
  let result = 1;
  for (var i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 10));
