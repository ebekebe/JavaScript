var something = 1;

{
  var something = 999;
  console.log('[Inside] The value of something is:', something); // -> 999
}

/*
  You would expect the enclosing block to create a new local environment
  but in javascript the only scope is function, so the variable inside the
  block refers to the same global variable
*/
console.log('[Outside] The value of something is:', something); // -> 999

// This behaviour is strange and admittedly so as it is being corrected in
// ES6 which introduces the 'let' keyword

let x = 1;

{
  let x = 999;
  console.log('[Inside] The value of x is:', x); // -> 999
}

// This time the variable is scoped in the expected fashion and the value of
// x inside our enclosing block is 999 and the value of our global x is still 1
console.log('[Outside] The value of x is:', x); // -> 1
