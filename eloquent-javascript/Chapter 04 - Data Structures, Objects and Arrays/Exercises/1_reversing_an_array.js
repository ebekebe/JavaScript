/*
  write two functions, reverseArray and reverseArrayInPlace.

  The first, reverseArray, takes an array as argument and produces a new array
  that has the same elements in the inverse order.

  The second, reverseArrayInPlace, does what the reverse method does: it modifies
  the array given as argument in order to reverse its elements.

  Neither may use the standard reverse method.
*/

function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function reverseArrayInPlace(array) {
  for (let index = 0; index < Math.floor(array.length / 2); index++) {
    // Store head of array
    let temp = array[index];

    // copy tail into head
    array[index] = array[array.length - 1 - index];
    
    // write head into to tail
    array[array.length - 1 - index] = temp;
  }
}

console.log(reverseArray(['A','B','C']));

var a = [1, 2, 3, 4, 5];
reverseArrayInPlace(a);
console.log(a);
