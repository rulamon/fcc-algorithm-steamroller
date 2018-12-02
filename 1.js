function steamrollArray(arr) {
	const test = el => Array.isArray(el);
	while (arr.some(el => test(el))) {
		for (let i = 0; i < arr.length; i++) {
			if(test(arr[i])) {
				arr = arr.slice(0, i).concat(arr[i]).concat(arr.slice(i+1))
			}
		}
	}
	return arr;
}

console.log(steamrollArray([1, {}, [3, [[4]]]]))