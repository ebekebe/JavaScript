// Since Functions can be created inside of other functions, there can be
// several degrees of locality.

// Enclosing Outermost Function
var landscape = function() {
  // This variable can be seen by both functions 1 and 2
  var result = '';

  // Function #1
  var flat = function(size) {
    for (var count = 0; count < size; count++) {
      result += '_';
    }
  };

  // Function #2
  var mountain = function(size) {
    result += '/';

    for (var count = 0; count < size; count++) {
      result += '\'';
    }

    result += '\\';
  };

  // Invocations
  flat(3); mountain(4);
  flat(6); mountain(1);
  flat(1);

  return result;
};

// Now that we are outside of our enclosing function we no longer have access
// to any of the variables defined within it, including our functions

// Output → ___/''''\______/'\_
console.log(landscape());
