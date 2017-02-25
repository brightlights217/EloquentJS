/*
Eloquent Javascript - Exercise 4.1 - Sum of a Range

The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

*/

// range function

function range(startN, endN) {
	var array = [];
	for ( var i = startN ; i <= endN ; i++ ) {
		array.push(i)
	}
	return array;
}

console.log(range(1,10));

// sum function

function sum(arrayToSum) {
	var counter = 0;
	for ( var i = 0 ; i < arrayToSum.length ; i++ ) {
		counter += arrayToSum[i];
	}
	return counter;
}

console.log(sum(range(1,10)));

// bonus assignment -- modify range function to take a third argument for stepping

function bonusRange(startN, endN, stepN) {
	var array = [];
	if ( stepN < 0 ) {
		stepN = Math.abs(stepN);
	}
	
	if ( startN < endN ) {
		for ( var i = startN ; i <= endN ; i += stepN ) {
			array.push(i);
		}
	} else {
		for ( var i = startN ; i >= endN ; i -= stepN ) {
			array.push(i);
		}
	}
	return(array);
}

console.log(bonusRange(5,2,-1));

