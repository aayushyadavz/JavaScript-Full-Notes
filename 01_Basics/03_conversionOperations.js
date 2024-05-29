// 3. Conversion Operations

/* 1. When converting in Number,
  (i) */
let score = "33" // "33" is a string.
// console.log(typeof score);
// console.log(typeof(score)); 
// We can write console.log in both the ways.

// Converting "33" string into number,
let valueInNumber = Number(score) // We can write String, Boolena e.t.c Data types in the place of Number.
// console.log(typeof valueInNumber); // Output : number
// console.log(valueInNumber); // Output : 33

// (ii) 
/* let score = "33abc"
   let valueInNumber = Number(score)
   console.log(typeof valueInNumber); // Output : number
   console.log(valueInNumber); // Output : NaN (Not a number) 
*/

// (iii)
/* let score = null
   let valueInNumber = Number(score)
   console.log(typeof valueInNumber); // Output : number
   console.log(valueInNumber); // Output : 0
*/

/* (iv)
 Same in the case of Undefined console.log(valueInNumber); will return NaN (Not a number) */

/* (v)
 Same in the case of true/false console.log(valueInNumber); will return 1/0 */

/* ---------------------------------------------------------------------------------------------

 2. When converting in Boolean,
 (i) */
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn); // Output : boolean
// console.log(booleanIsLoggedIn); // Output : true

/* (ii)
 Same in the case of 0 console.log(booleanIsLoggedIn); will return false */

/* (iii)
let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // Output : false */

/* (iv)
let isLoggedIn = "hitesh"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // Output : True */

/* -------------------------------------------------------------------------------------------

 3. When converting in String,
 (i) */
 let someNumber = 33
 let stringNumber = String(someNumber)
//  console.log(typeof stringNumber); // Output : String
//  console.log(stringNumber); // Output : 33

// *************************************Operations********************************************

 
// Operation 1,
let value = 3
let negValue = -value
// console.log(negValue); // Output : -3

// Other Operations
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // 2 to the power 2*2*2
// console.log(2/2);
// console.log(2%2); // For remainder

// Operation 2,
let str1 = "Hello!"
let str2 = " Ayush"
let str3 = str1 + str2
// console.log(str3); // Output : Hello! Ayush

// Operations which are not a good practice,
// console.log("1" + 2); // Output : 12
// console.log(1 + "2"); // Output : 12
// console.log("1" + 2 + 2); // Output : 122
// console.log(1 + 2 + "2"); // Output : 32
// console.log(+true); // Output : 1
// console.log(+""); // Output : 0
let num1, num2, num3
num1 = num2 = num3 = 2 + 2
// console.log(num1, num2, num3); // Output : 4 4 4

//*************************************Increament Operators***********************************

// Postfix & Prefix Increament,
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
