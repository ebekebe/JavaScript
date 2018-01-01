/*
  Write a loop that makes seven calls to console.log to output the following triangle:

  #
  ##
  ...
  #######

  It may be useful to know that you can find the length of a string by writing .length after it.
*/

const CALLS = 7;

// ---------- SOLUTION 1 ---------------
let triangle = '';

for (let i = 0; i < CALLS; i++) {
  triangle += '#';
  console.log(triangle);
}

// ---------- SOLUTION 2 ---------------
for (let i = '#'; i.length <= CALLS; i += '#') {
  console.log(i);
}
