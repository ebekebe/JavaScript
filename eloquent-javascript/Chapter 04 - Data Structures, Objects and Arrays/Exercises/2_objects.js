/*
    Write a function arrayToList that builds up a data structure like the previous
    one when given [1, 2, 3] as argument, and write a listToArray function that
    produces an array from a list.

    Also write the helper functions prepend, which takes an element and a list
    and creates a new list that adds the element to the front of the input list,
    and nth, which takes a list and a number and returns the element at the given
    position in the list, or undefined when there is no such element.

    If you haven’t already, also write a recursive version of nth.
*/

// Attempt 1 - incomplete
let arrayToList = arr => {
    if (arr.length == 0) {
        return null;
    }

    let head = arr.shift();
    let tail = arrayToList(arr); 

    return { 
        value: head, 
        rest: tail 
    };
}

// Attempt 2 - incomplete
const arrayToList2 = arr => {
 let  list = {};

 for (let i = 0; i < arr.length; i++) {
    list.head = arr.splice(0, 1)[0];
    list.tail = (arr.length > 0) ? arrayToList2(arr) : null;
 }
 return list;
}


let test = [1, 2, 3, 4, 5, 6 ];

console.log(test);
console.log(arrayToList(test));
console.log(arrayToList2(test));