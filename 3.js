function steamrollArray(arr) {
	const test = el => Array.isArray(el);
	const insert = (array, index) => arr = array.slice(0, index)
		.concat(steamrollArray(array[index])).concat(array.slice(index+1));
	for (let i = 0; i < arr.length; i++) {
		if(test(arr[i])) {
			let origLength = arr.length
			//arr = arr.slice(0, i).concat(steamrollArray(arr[i])).concat(arr.slice(i+1));
			insert(arr, i);
			if (arr.length < origLength) {i--}


		}
	}
	return arr;
}

console.log(steamrollArray([1, [], [3, [[4]]]]))