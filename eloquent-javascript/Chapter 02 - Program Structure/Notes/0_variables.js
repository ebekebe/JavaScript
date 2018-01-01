/*
  Variable names can be any word that isn’t a reserved word (such as var).
  They may not include spaces. Digits can also be part of variable names—catch22
  is a valid name, for example—but the name must not start with a digit.

  A variable name cannot include punctuation, except for the characters $ and _.
*/

var myDigimon = 'Tentomon';
var ten = 10;

console.log(myDigimon);
console.log(ten * ten);

// Variables are Mutable
//----------------------
var disneySong = 'For the First Time in Forever';
console.log(disneySong); 

disneySong = 'How Far I\'ll Go';
console.log(disneySong);

var powerLevel = 8999;
console.log(powerLevel);

powerLevel + 2;
console.log(powerLevel);

// Multiple Variable Declaration
var one = 1, two = 2, three = 3; 
