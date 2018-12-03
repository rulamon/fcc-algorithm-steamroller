function steamrollArray(arr) {
	//function to test if argument is an array
	const test = el => Array.isArray(el);
	//loop the array, replacing any element that is an array by its contents a level deeper, and use recursion
	//to flatten the element further if necessary
	for (let i = 0; i < arr.length; i++) {
		if(test(arr[i])) {
			let origLength = arr.length
			arr = arr.slice(0, i).concat(steamrollArray(arr[i])).concat(arr.slice(i+1));
			if (arr.length < origLength) {i--}
		}
	}
	return arr;
}

console.log(steamrollArray([1, [], [3, [[4]]]]))