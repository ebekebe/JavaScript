// This is a typical way of defining a function
var square = function(x) {
  return x * x;
};

// Another way to write this would be
function square(x) {
  return x * x;
}
// Functions declared in this way are conceptually moved to the top of their
// scope before runtime and can be used by code in that scope

//------------------------------------------------------------------------------

// The newest and shortest way to write this would be
const square = x => x * x;

