/*
- Write a function called average which accepts an array as a parameter
- the function should return the average of all of the numbers in the array (you can assume that the array passed to the funciton will contain only numbers)
*/

function average(arr) {
	var total = 0;

	for (i = 0; i < arr.length; i++) {
		total += arr[i];
	}

	var overall = total / arr.length;
	console.log(overall);
	return overall;
}

var totalArray = [4,3,5];
var total2 = totalArray;
average(total2); 