// A function is a wrapped pieces of executable dode that can be invoked
function sayHello() {
  console.log('Hello');
}

// To invoke this function we just use it's name and parentheses
sayHello();

// Functions can be treated like any other value and be stored as Variables
var hello = sayHello;

// Now we can invoke this function using our new name
hello();
