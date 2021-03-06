/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
	if (n > 0){
		return n * factorial(n - 1);
	} else if (n === 0) {
		return 1;
	} else {
		return null;
	}
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {	
	return array.length > 0 ? array[0] + sum(array.slice(1)) : 0;
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
	let sum = 0;
	array.forEach(function (member){
		if (Array.isArray(member)){
			sum += arraySum(member);
		} else {
			sum += member;
		}
	});

	return sum;
};

// 4. Check if a number is even.
var isEven = function(n) {
	n -= 2;
	if (Math.abs(n) === 0){
		return true;
	} else if (Math.abs(n) === 1) {
		return false;
	} else {
		return isEven(Math.abs(n));
	}
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
	if (n >= 0){
		return n > 0 ? n - 1 + sumBelow(n - 1) : 0;
	} else if (n < 0) {
		n = Math.abs(n);
		return -(n > 0 ? n - 1 + sumBelow(n - 1) : 0);
	}
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
	if (y >= x){
		return (y - 1) > x ? [x + 1].concat(range(x + 1, y)) : [];
	} else if (y < x) {
		return (y + 1) < x ? [x - 1].concat(range(x - 1, y)) : [];
	}
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
	
	if (exp > 0){
		if (exp % 2 === 0) {
			let partial = exponent(base, exp / 2);
			return partial * partial;
		} else if (exp % 2 === 1) {
			return base * exponent(base, exp - 1);
		}
	} else if (exp === 0) {
		return 1;
	} else if (exp < 0) {
		return 1 / exponent(base, -exp);
	}
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
	if (n === 1){
		return true;
	} else if (n === 0) {
		return false;
	} else if (n % 2 === 0) {
		return powerOfTwo(n / 2);
	} else {
		return false;
	}
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
	return string.length > 0 ? string[string.length - 1] + reverse (string.slice(0,string.length - 1)) : '';
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
	string = string.toLowerCase();
	string = string.replace(/s/g, '');

	if (string.length <= 1) {
		return true;
	} else if (string[0] === string[string.length - 1]) {
		return palindrome(string.slice(1,string.length - 1));
	} else {
		return false;
	}
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
	let negX = false;
	let moduloValue;

	if (x < 0){
		x = -x;
		negX = true;
	}

	if (y < 0){
		y = -y;
	}

	if (y === 0) {
		moduloValue = NaN;
	} else if (x < y) {
		moduloValue = x;
	} else {
		moduloValue = modulo(x - y, y);
	}

	if (negX === true) {
		return -moduloValue;
	} else {
		return moduloValue;
	}
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.

var multiply = function(x, y) {
	
	let negProduct;

	if ((y < 0 && x >= 0) || (y >= 0 && x < 0)) {
		negProduct = true;
	}

	if (x < 0) {
		x = -x;
	}

	if (y < 0) {
		y = -y;
	}

	if (y === 0) {
		return 0;
	} else {
		if (negProduct) {
			return -(x + multiply(x, y - 1));
		} else {
			return x + multiply(x, y - 1);
		}
	}
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
	
	if (y === 0) {
		return undefined;
	}

	let absX;
	let absY;
	let negQuotient;
	

	if (x >= 0) {
		absX = x;
		if (y > 0) {
			absY = y;
			negQuotient = false;
		} else {
			absY = -y;
			negQuotient = true;
		}
	} else {
		absX = -x;
		if (y > 0) {
			absY = y;
			negQuotient = true;
		} else {
			absY = -y;
			negQuotient = false;
		}
	}


	if (negQuotient === false){
		return (absX - absY >= 0) ? 1 + divide(absX - absY, absY) : 0;
	} else {
		return -((absX - absY >= 0) ? 1 + divide(absX - absY, absY) : 0);
	}
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
	if (x < 0 || y < 0){
		return null;
	}

	if (x === 0) {
		return y;
	}

	if (y === 0) {
		return x;
	}

	return (x % y !== 0) ? gcd (y, x % y) : y;
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
	/*
	if (str1.length !== str2.length) {
		return false
	}
	*/

	if (str1[0] === str2[0]) {
		if (str1.length <= 1) {
			if (str2.length <= 1) {
				return true;
			} else {
				return false;
			}
		} else {
			return compareStr(str1.substring(1), str2.substring(1));
		}
	} else {
		return false;
	}
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
	if (str.length === 0) {
		return [];
	} else {
		let arr = createArray(str.substring(0, str.length - 1));
		arr.push(str[str.length - 1]);
		return arr;
	}
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
	if (array.length === 0) {
		return [];
	} else {
		let arr = reverseArr(array.slice(1));
		arr.push(array[0]);
		return arr;
	}
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
	if (length === 0){
		return [];
	} else {
		let arr = buildList(value, length - 1);
		arr.push(value);
		return arr;
	}
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
	if (n === 0){
		return [];
	} else {
		let arr = fizzBuzz(n - 1);
		if (n % 5 === 0 && n % 3 === 0) {
			arr.push('FizzBuzz');
		} else if (n % 5 === 0) {
			arr.push('Buzz');
		} else if (n % 3 === 0) {
			arr.push('Fizz');
		} else {
			arr.push(n.toString());
		}
		return arr;
	}
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
	if (array.length === 0) {
		return 0;
	} else {
		if ((array[0] === value) || (Number.isNaN(array[0]) && Number.isNaN(value))) {
			return countOccurrence(array.slice(1),value) + 1;
		} else {
			return countOccurrence(array.slice(1),value);
		}
	}
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
	if (array.length === 0) {
		return [];
	} else {
		let arr = rMap(array.slice(1), callback);
		arr.unshift(callback(array[0]));
		return arr;
	}
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
	let keyCount = 0;

	for (let oKey in obj){
		if (oKey === key) {
			keyCount++;
		}

		if (obj[oKey] === Object(obj[oKey]) && !(Array.isArray(obj[oKey]))) {
			keyCount += countKeysInObj(obj[oKey], key);
		}

	}

	return keyCount;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
	let valueCount = 0;

	for (let oKey in obj){
		if (obj[oKey] === value) {
			valueCount++;
		}

		if (obj[oKey] === Object(obj[oKey]) && !(Array.isArray(obj[oKey]))) {
			valueCount += countValuesInObj(obj[oKey], value);
		}

	}

	return valueCount;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {

	for (let oKey in obj){
	
		if (obj[oKey] === Object(obj[oKey]) && !(Array.isArray(obj[oKey]))) {
			replaceKeysInObj(obj[oKey], oldKey, newKey);
		}

		if (oKey === oldKey) {
			obj[newKey] = obj[oKey];
			delete obj[oKey];
		}
	}

	return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
	
	if (n === 1) {
		return [0,1];
	} else if (n > 1 ){
		let arr = fibonacci(n - 1);
		arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
		return arr;
	} else {
		return null;
	}
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
	if (n === 0) {
		return 0;
	} else if (n === 1) {
		return 1;
	} else if (n > 1) {
		return nthFibo(n - 1) + nthFibo(n - 2);
	} else {
		return null;
	}
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
	if (array.length === 0) {
		return [];
	} else {
		let arr = capitalizeWords (array.slice(1));
		arr.unshift(array[0].toUpperCase());
		return arr;
	}
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
	if (array.length === 0) {
		return [];
	} else {
		let arr = capitalizeFirst(array.slice(1));
		let lowerWord = array[0];
		let capWord = lowerWord.substring(0,1).toUpperCase() + lowerWord.substring(1);
		arr.unshift(capWord);
		return arr;
	}
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
	let sum = 0;

	for (let key in obj){
		if (obj[key] % 2 === 0) {
			sum += obj[key];
		}

		if (obj[key] === Object(obj[key]) && !(Array.isArray(obj[key]))) {
			sum += nestedEvenSum(obj[key]);
		}
	}

	return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {

	if (array.length === 0) {
		return [];
	} else {
		let arr = flatten(array.slice(1));
		if (Array.isArray(array[0])) {
			arr.unshift(...flatten(array[0]));
		} else {
			arr.unshift(array[0]);
		}
		return arr;
	}
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
	if (obj === undefined) {
		obj = {};
	}

	if (str.length === 0) {
		return obj;
	} else {
		let char = str[0];
		if (obj[char] === undefined) {
			obj[char] = 1;
		} else {
			obj[char]++;
		}
		return letterTally(str.substring(1), obj);
	}
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {

	if (list.length === 0) {
		return [];
	} else {
		let arr = compress(list.slice(0,list.length - 1));
		if (list[list.length - 1] !== arr[arr.length - 1]) {
			arr.push(list[list.length - 1]);
		}
		return arr;
	}
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
	if (array.length === 0) {
		return [];
	} else {
		let arr = augmentElements(array.slice(1), aug);
		array[0].push(aug);
		arr.unshift(array[0]);
		return arr;
	}
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
	if (array.length === 0) {
		return [];
	} else {
		let arr = minimizeZeroes(array.slice(0,array.length - 1));
		if ((array[array.length - 1] !== arr[arr.length - 1]) || (array[array.length - 1] !== 0)) {
			arr.push(array[array.length - 1]);
		}
		return arr;
	}
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
	if (array.length === 0) {
		return [];
	} else {
		let arr = alternateSign(array.slice(0,array.length - 1));
		if (arr.length % 2 === 0) {
			arr.push(Math.abs(array[array.length - 1]));
		} else {
			arr.push(-Math.abs(array[array.length - 1]));
		}
		return arr;
	}
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
	if (str.length === 0) {
		return '';
	} else {
		let previous = numToText(str.substring(1));
		if (str[0] === '0') {
			return 'zero' + previous;
		} else if (str[0] === '1') {
			return 'one' + previous;
		} else if (str[0] === '2') {
			return 'two' + previous;
		} else if (str[0] === '3') {
			return 'three' + previous;
		} else if (str[0] === '4') {
			return 'four' + previous;
		} else if (str[0] === '5') {
			return 'five' + previous;
		} else if (str[0] === '6') {
			return 'six' + previous;
		} else if (str[0] === '7') {
			return 'seven' + previous;
		} else if (str[0] === '8') {
			return 'eight' + previous;
		} else if (str[0] === '9') {
			return 'nine' + previous;
		} else {
			return str[0] + previous;
		}
	}
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
	let count = 0;

	if (node === undefined) {
		count = tagCount(tag, document.body)
	} else {
		if (node.tagName === tag.toUpperCase()){
			count++;
		}

		if (node.hasChildNodes) {
			let child_nodes = node.childNodes;

			child_nodes.forEach(function(element){
				if (element instanceof Element){
					count += tagCount(tag, element);
				}
			});
		}
	}

	return count;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
	if (min === undefined) {
		min = 0;
	}

	if (max === undefined) {
		max = array.length - 1;
	}

	let mid = Math.floor((min + max) / 2);

	if (array[mid] === target) {
		return mid;
	} else if (array[mid] < target) {
		if (mid >= max) {
			return null;
		} else {
			let moreSearch = binarySearch(array.slice(mid + 1), target, /*mid + 1, max*/);
			if (moreSearch === null) {
				return null;
			} else {
				return mid + 1 + moreSearch;
			}
		}
	} else if (array[mid] > target) {
		if (mid <= min) {
			return null;
		} else {
			return binarySearch(array.slice(0, mid), target, /*min, mid - 1*/);
		}
	}
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
	let result = [];

	let mid = Math.floor((array.length - 1) / 2);

	let lower = array.slice(0, mid + 1);
	let upper = array.slice (mid + 1);

	if (lower.length > 1) {
		lower = mergeSort(lower);
	}

	if (upper.length > 1) {
		upper = mergeSort(upper);
	}

	while (upper.length > 0 || lower.length > 0){
		if (lower.length === 0 || upper[0] < lower[0]) {
			result.push(upper[0]);
			upper.shift();
		} else {
			result.push(lower[0]);
			lower.shift();
		}
	}

	return result;
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {

if (input === Object(input) && !(Array.isArray(input))) {
	// object case
	let result = {};
	for (let key in input) {
		result[key] = clone(input[key]);
	}
	return result;
} else if (Array.isArray(input)) {
	// array case
	let result = [];
	input.forEach(function(element){result.push(clone(element));});
	return result;
} else {
	return input;
}

};
