// Both string and array objects contain properties that refer to function
// values, one of which we have already seen 'length'

let name = 'Digicrest';
console.log(name.toUpperCase());

console.log(typeof name.toUpperCase); // -> Function

/*
    All string objects have a toUpperCase property of type function;
    likewise there is a toLowerCase.

    Properties that are of type function are generally called methods of the
    type they belong to. e.g. toUpperCase is a method of string
*/
