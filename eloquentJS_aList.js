/*

Eloquent Javascript - Exercise 4.3 - A List

Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with the array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.


var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
1

The resulting objects form a chain, like this:

A linked list
A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the variable defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. In addition, the original list is also still a valid three-element list.

Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, and write a listToArray function that produces an array from a list. Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.

*/

function arrayToList(array) {
    var list = null;
    for ( var i = array.length - 1 ; i >= 0 ; i-- ) {
        list = { value: array[i], rest: list};
    }
    return list;
}

function listToArray(list) {
    var array = []; // create an empty array to store the pushes
    for ( var i = list; i; i = i.rest) {  // with each iteration "i" looks at each reference at a time.
        //console.log(i);
        //console.log(list);
        //console.log(i.rest);
        array.push(i.value); //
    }
    return array;
}

function prepend(value, list) {
    return {value: value, rest: list}
}

function nth(list, n) {
    if (!list)
        return undefined;
    else if (n == 0)
        return list.value;
    else
        return nth(list.rest, n - 1);
}


console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));