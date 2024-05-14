/* 1. Arrays

(i) Declaring Array, */
const myArr = [0, 1, 2, 3, 4]
// console.log(myArr[2]); // Output: 2 | Accsessing value of an Array.
// Note: Array indexing starts from Zero.
const heros = ["Thor", "IronMan", "SpiderMan"]
// console.log(heros); // Output: [ 'Thor', 'IronMan', 'SpiderMan' ]
const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2); // Output: [ 1, 2, 3, 4 ]
/* Note: Run const numbers = [1, 2, 3, 4] in browser's console to see prototype access in Arrays.

-----------------------------------------------------------------------------------------------------

(ii) Array Methods, */
myArr.push(6)
// console.log(myArr); // Output: [ 0, 1, 2, 3, 4, 6 ] | Pushes element in the end of the array.
myArr.pop()
// console.log(myArr); // Output: [ 0, 1, 2, 3, 4 ] | Removes element from the end of the array.
myArr.unshift(9)
// console.log(myArr); // Output: [ 9, 0, 1, 2, 3, 4 ] | Adds element to the starting of the array.
myArr.shift()
// console.log(myArr); // Output: [ 0, 1, 2, 3, 4 ] | Removes element from the starting of the array.

// console.log(myArr.includes(9)); // Output: false

// console.log(myArr.indexOf(4)); // Output: 4 
// Note: Indexing starts from Zero.
// console.log(myArr.indexOf(9)); // Output: -1
// Asking any value which doesn't exist in index gives you -1.

const newArr = myArr.join()
// console.log(newArr); // Output: 0,1,2,3,4
// console.log(typeof newArr); // Output: string
/* Note: .join binds and converts array into strings.

-----------------------------------------------------------------------------------------------------

(iii) slice, splice (Methods) */
console.log("A ", myArr); // Output: A  [ 0, 1, 2, 3, 4 ]
const myNewArr1 = myArr.slice(1, 3) /* Include value at index 1 and 2 but don't 
include value at index 3. */
console.log(myNewArr1); // Output: [ 1, 2 ]
console.log("B ", myArr); // Output: B  [ 0, 1, 2, 3, 4 ]
// Note: As we can see using slice doesn't affect original array.

const myNewArr2 = myArr.splice(1, 3)
console.log(myNewArr2); // Output: [ 1, 2, 3 ]
console.log("C ", myArr); // Output: C  [ 0, 4 ]
// Note: But in splice we can see it removes the elements and manipulates the original array.