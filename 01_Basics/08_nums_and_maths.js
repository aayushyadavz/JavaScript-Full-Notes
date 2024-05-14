/* 8. Numbers And Maths

(i) Numbers, 
When Javascript automatically defines the data type, */
const balance = 400
// console.log(balance); // Output: 400
// Note: Here Javascript automatically detected that the balance type is number.

// But we can also define explicitely the data type,
const newBalance = new Number(400)
// console.log(newBalance); // Output: [Number: 400]
// Note: When we do this in browser console the we can see the methods. 

// ---------------------------------------------------------------------------------------------------------

// Some Methods,
// console.log(newBalance.toString()); // Output: 400 
// Note: When we will check it's typeof the we will see that it is changed into strings.
// console.log(newBalance.toString().length); // Output: 3 (cause 400 has 3 chracters.)

// console.log(newBalance.toFixed(2)); // Output: 400.00

const otherNumbers = 123.8966
// console.log(otherNumbers.toPrecision(3)); // Output: 124
const otherNum = 23.8966
// console.log(otherNum.toPrecision(3)); // Output: 23.9
// Note: It means we want precise value but on how many values we want to focus.

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // Output: 10,00,000 (converted accor. to IN standards.)

/* *******************************************MATHS******************************************************* 

(ii) Maths, */
console.log(Math); /* Output: Object [Math] {} 
Note: When we run this console.log(Math) in browser's console we will get many value inside object. */

console.log(Math.abs(-4)); // Output: 4 (Changes only minus values in plus)

console.log(Math.round(4.6)); // Output: 5
console.log(Math.round(4.4)); // Output: 4
console.log(Math.ceil(4.2)); // Output: 5 (Choose top value)
console.log(Math.floor(4.9)); // Output: 4 (Choose lowest value)

console.log(Math.min(3, 2, 4, 6)); /* Output: 2 (Tells min value)
Note: There is also "max". */

console.log(Math.random()); // Output: 0.36675387800250636 (Gives random numbers between 0 & 1)
console.log((Math.random()*10) + 1); // Now numbers will range from 1 to 9
console.log(Math.floor(Math.random()*10) + 1); // Round offs the Random numbers at lowest value.

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// Note: (max - min) to get a range, (+ 1) to avoid zero, (+ min) to get minimum value to this.  