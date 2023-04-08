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