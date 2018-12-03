function steamrollArray(arr) {
	//create function to test if an element is an array and assign it to variable test
	const test = el => Array.isArray(el);
	//use a while loop and nested for loop to keep iterating the original array as long as some elements are arrays
	while (arr.some(el => test(el))) {
		for (let i = 0; i < arr.length; i++) {
			if(test(arr[i])) {
				//flatten the element using concat
				arr = arr.slice(0, i).concat(arr[i]).concat(arr.slice(i+1))
			}
		}
	}
	return arr;
}

console.log(steamrollArray([1, {}, [3, [[4]]]]))