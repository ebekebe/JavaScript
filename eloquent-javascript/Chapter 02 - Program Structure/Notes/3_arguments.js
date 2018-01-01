// functions can take arguments when invoked which can be accessed within the function scope
var say = function(message) {
  console.log(message + ' A LOT');
};

// now when we call our say() function we provide it a message
say('Hello, this is your message');
say('I like rice and cakes');
