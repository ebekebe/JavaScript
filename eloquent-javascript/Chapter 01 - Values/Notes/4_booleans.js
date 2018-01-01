let myAge = 26;

// Boolean values are binary types containing values True and False
let likesDisneyFilms = true;
let over21 = myAge > 21;

console.log('Expression: x = 25 > 21');
console.log('Expression is:', over21);
console.log('Expression is of type:', typeof(over21));

// LOGICAL OPERATORS
// If you like disney films OR you're over 21
if (likesDisneyFilms || over21) {
  console.log('You can visit Disney');
} else {
  console.log('You cannot visit Disney');
}

// If you like disney films AND you're over 21
if (likesDisneyFilms && over21) {
  console.log('You are allowed to work at Disney');
} else {
  console.log('You are "not" allowed to work at Disney');
}

// if you are not over 21 you can't work for Disney
if (!over21) {
  console.log('You cannot work for disney');
}
