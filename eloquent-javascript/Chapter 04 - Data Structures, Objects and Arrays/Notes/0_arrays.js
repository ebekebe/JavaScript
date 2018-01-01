// Arrays can store multiple values dilineated with a comma
let numbers = [1, 10, 100, 1000, 9999];

// These values can be accessed by referring to the index
let head = numbers[0];

// This allows us to loop over an array of array of arbitrary length
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//------------------------------------------------------------------------------
// Array definitions can be spread across multiple lines
let ponies = [
  'Twilight Sparkle',
  'Rainbow Dash',
  'Pinkie Pie',
  'Fluttershy',
  'Applejack',
  'Rarity'
];

// Arrays are zero based, so we start from the 0th element not the 1st
for (var i = 0; i < ponies.length; i++) {
  console.log(ponies[i], 'is best pony!');
}
