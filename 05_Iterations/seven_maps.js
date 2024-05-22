// Map

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNumbers = myNumbers.map( (num) => num + 10 /* Operations */ )
console.log(newNumbers); /* Output: [ 11, 12, 13, 14, 15, 16, 17, 18, 19 ] 

---------------------------------------------------------------------------
Doing the same with 'For Each' */

const nums = []

myNumbers.forEach( (val) => {
    nums.push(val + 10)
} )
console.log(nums); /* Output: [ 11, 12, 13, 14, 15, 16, 17, 18, 19 ] 

---------------------------------------------------------------------------
Chaining */

const myNums = myNumbers.map( (num) => num * 10 )
               .map( (num) => num + 1 ) /* Here, value will be taken from 
                upper method. eg. 1 * 10 = 10; 10 + 1 = 11 */
               .filter( (num) => num >= 40 ) // same as here
console.log(myNums); // Output: [ 41, 51, 61, 71, 81, 91 ] 