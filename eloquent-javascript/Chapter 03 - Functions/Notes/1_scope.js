// Scope in javascript is weird and is function scoped only, at least until ES6
var x = 10;

var f1 = function() {
  var x = 20;
};

f1();

/*
  The output is 10 because though we defined and changed x in our function
  the value we changed is encapsulated by that function and dies when the
  function ends, so the enclosed x and the global x are different variables
*/
console.log('the value of x is', x);

var f2 = function() {
  x = 999;
};

f2();

/*
  This time the output is 999, the reason is that behind the scenes javascript
  does something called 'Variable Hoisting', this means that all variables are
  defined at the top of their function. 
  
  So as it looks through our f2() function to try to find the declaration of x 
  it fails and so leaves f2 to continue searching, it eventually finds x declared
  in the global space.
*/
console.log('the value of x is', x);
