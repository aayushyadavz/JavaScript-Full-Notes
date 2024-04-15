// 4. Comparisons

// (i) Comparisons with same Data Types,
// console.log(2 > 1); // Output : true
// console.log(2 >= 1); // Output : true
// console.log(2 < 1); // Output : false
// console.log(2 == 1); // Output : false
// console.log(2 != 1); // Output : true

/* Note : Whenever we compare value then we should keep in mind that both value should
have same Data Types. */

// ----------------------------------------------------------------------------------------------

// (ii) Comparisons on different data types,
// console.log("2" > 1); // Output : true
// console.log("02" > 1); // Output : true

/* Note : These comparisons some times do not give predictible outcomes, that's why we should
compare same Data Types values. */

// console.log(null > 0); // Output : false, (0 > 0)
// console.log(null == 0); // Output : false
// console.log(null >= 0); // Output : true (0 >= 0)

/* Note : Comparisons (<,>,<=,>=) and Equality check (==) works diffrently,
Comparisons convert null into a number, treating it as 0. */

// console.log(undefined == 0);
// console.log(undefined < 0);
// console.log(undefined > 0);
// In all the cases it will give false.

/* **************************************Strict Check********************************************

(===) Triple Equal : Checks values as well as their Data Types. */

console.log("2" === 1); // Output : false



