// returns an array containing all numbers from start up to end (inclusive)
function range(start, end, increment = 1) {
  let numbers = [];

  if (start > end)
    for (let i = start; i >= end; i += increment)
      numbers.push(i);
  else
    for (let i = start; i <= end; i += increment) 
      numbers.push(i);
  
  return numbers;
}

// takes an array of numbers and returns the sum of these numbers
function sum(arr) {
	return arr.reduce((n, total) => total += n, 0);
}

console.log(sum(range(1, 10, 1)));