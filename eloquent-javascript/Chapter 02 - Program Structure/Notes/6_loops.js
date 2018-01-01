// THE WHILE LOOP
// loop if condition is true and keep looping until it is not
let counter = 1;
while (counter <= 10) {
  if (counter % 2 === 0) { // print all even numbers
    console.log(counter);
  }
  counter++;
}

console.log('------');

let iterations = 1;
let result = 1;

while (iterations <= 10) {
  result = result * 2;
  iterations++;
  console.log(result);
}

console.log('------');

// this pattern of storing a counter to loop a certain number of times is so
// common that a loop structure was created to accomadate it

// THE FOR LOOP
let sum = 1;
for (let i = 0; i < 10; i++) {
  sum *= 2;
  console.log(sum);
}
