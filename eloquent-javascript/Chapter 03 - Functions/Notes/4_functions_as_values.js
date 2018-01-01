// Function variables are usually just named code, defined and never changed
var bark = function() {
  console.log('Woof!');
};
bark();

/*
  This makes it easy to start confusing the function and its name, but you
  should try to remember a function variable can't only be called.
  It can do everything a variable can e.g. passed as argument, reassigned etc.
*/
bark = function() {
  console.log('RUFF! RUFF! RUFF!');
};
bark();
