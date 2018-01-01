/*
  Write a program that uses console.log to print all the numbers from 1 to 100,
  with two exceptions.

  For numbers divisible by 3, print "Fizz" instead of the number,
  and for numbers divisible by 5 (and not 3), print "Buzz" instead.

  When you have that working, modify your program to print "FizzBuzz",
  for numbers that are divisible by both 3 and 5.

  (and still print "Fizz" or "Buzz" for numbers divisible by only one of those)
*/

const ITERATIONS = 100;

// --------- SOLUTION 1 ---------
for (let i = 1; i <= ITERATIONS; i++) {
  if (i % 15 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

// --------- SOLUTION 2 ---------
for (let i = 1; i <= ITERATIONS; i++) {
  let msg = '';

  if (i % 3 === 0) {
    msg += 'Fizz';
  }
  if (i % 5 === 0) {
    msg += 'Buzz';
  }

  console.log(msg || i);
}

//--------- SOLUTION 3 ---------

let fizz_buzz = num => {
  let message = '';
  
  if (num % 3 === 0) {
    message += 'Fizz';
  }

  if (num % 5 === 0) {
    message += 'Buzz';
  }

  return (message || num);
}

for (let i = 1; i <= ITERATIONS; i++) {
  console.log(fizz_buzz(i));
}
