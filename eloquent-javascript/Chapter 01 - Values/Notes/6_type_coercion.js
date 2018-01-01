/* 
  When an operator is applied to the wrong type of value,
  JavaScript will quietly convert that value to the type it wants,
  using a set of rules that often aren’t what you want or expect.

  This is called type coercion.

  Further arithmetic operations on NaN keep producing NaN,
  so if you find yourself getting one of those in an unexpected place,
  look for accidental type conversions.
*/

console.log(8 * null);    // -> 0
console.log('5' - 1);     // -> 4
console.log('5' + 1);     // -> 51
console.log('five' * 2);  // -> NaN
console.log(false == 0);  // -> true
