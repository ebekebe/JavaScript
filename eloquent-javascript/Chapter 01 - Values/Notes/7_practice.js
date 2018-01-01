let numbers = [
  1, 2, 3,
  4, 5, 6,
  7, 8, 9,
  0
];

// goes through numbers array and sums consecutive numbers
for (var i = 0; i < numbers.length - 1; i++) {
  let num = numbers[i];
  let nextNum = numbers[i + 1];

  console.log(num + ' + ' + nextNum + ' = ' + (num + nextNum));
}
