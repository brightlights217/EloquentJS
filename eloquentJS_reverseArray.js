/*

Eloquent Javascript - Exercise 4.2 - Reversing an Array

Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one is more efficient?

// Your code here.

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

*/

// reverseArray

function reverseArray(array) {
	var tempArray = [];
	for ( var i = array.length - 1; i >= 0 ; i-- ) {
		tempArray.push(array[i]);
	}
	return tempArray;
}

console.log(reverseArray(["A","B","C"]))

// reverseArrayInPlace

function reverseArrayInPlace(inPlaceArray) {
	tempArray = [];
	for ( var i = inPlaceArray.length - 1; i >= 0 ; i-- ){
		tempArray.push(inPlaceArray[i]); 
	}
	for ( var i = 0 ; i < tempArray.length ; i++ ) {
		inPlaceArray[i] = tempArray[i]
	}
	return inPlaceArray;
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);












