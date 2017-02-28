/*

Eloquent Javascript - Exercise 4.4 - Deep Comparison

The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties.

Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".

*/

function deepEqual(argument1, argument2) {
	// first check the argument if they are objects
	// if object then you will use the '====' comparison
	if ( argument1 === argument2 ) {
		return true;
	} 

	if ( argument1 == null || typeof argument1 != "object" || 
		argument2 == null || typeof argument2 != "object") {
		return false;
	}

	var containerArg1 = 0; // initialize first container for storing the number of properties
	var containerArg2 = 0; // initialize second container for storing the number of properties

	for (var i in argument1) { // count how many properties is in argument1
		containerArg1 += 1;
		//console.log(i);
	}
	for (var i in argument2) { // count how many properties is in argument2
		containerArg2 += 1;
		if (!(i in argument1) || !deepEqual(argument1[i], argument2[i])) { // if a property in argument2 is not in argument1, return false.
			return false;                                                  // if i is not in argument1, then use recursive to compare properites and values
		}
	}
	return containerArg1 == containerArg2;
}

var obj = {here: {is: "an"}, object: 2};
//console.log(deepEqual(obj, obj));
//console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));




