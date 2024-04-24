/* 9. Dates

Note: Our declared Dates has been calculated from 1 January 1970.
Note: Dates has been calculated usually in Milliseconds. */

let myDate = new Date();
console.log(myDate); /* Output: 2024-04-24T08:15:11.671Z

--------------------------------------------------------------------------------------

Conversion of Dates in readable form,
Some Methods, */
console.log(myDate.toString()); // Output: Wed Apr 24 2024 13:47:36 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Output: Wed Apr 24 2024
console.log(myDate.toLocaleString()); // Output: 24/4/2024, 1:49:14 pm
console.log(myDate.toJSON()); // Output: 2024-04-24T08:20:04.530Z
console.log(myDate.toISOString()); // Output: 2024-04-24T08:21:49.915Z
console.log(myDate.toLocaleDateString()); /* Output: 24/4/2024

--------------------------------------------------------------------------------------

Typeof Date, */
console.log(typeof myDate); /* Output: Object

--------------------------------------------------------------------------------------

Declaring a new or a specific date, */
// let myCreatedDate = new Date(2002, 10, 24) // Months starts with 0 in JS.
// console.log(myCreatedDate.toDateString()); // Output: Sun Nov 24 2002
// let myCreatedDate = new Date(2002, 10, 24, 5, 3)
// console.log(myCreatedDate.toLocaleString()); // Output: 24/11/2002, 5:03:00 am
let myCreatedDate = new Date("11-24-2002")
console.log(myCreatedDate.toLocaleString()); /* Output: 24/11/2002, 5:30:00 am

-------------------------------------------------------------------------------------- */

let myTimeStamp = Date.now()
console.log(myTimeStamp); // Output: 1713948664801 (Millisecond value from 1 Jan 1970 to current)
console.log(myCreatedDate.getTime()); /* Output: 1038076200000 
So now we can easily compare 1713948664801 and 1038076200000.

Converting it into seconds, */
console.log(Math.floor(Date.now()/1000)); // Output: 1713950199

let myDates = new Date()
console.log(myDates);
console.log(myDates.getDay()); // Output: 3
console.log(myDates.getMonth() + 1); /* Output: 4

----------------------------------------------------------------------------------------

Some other syntax, */
`${myDates.getDay()} and the time is`
// We can completely define what we want,
myDates.toLocaleString('default', {
    weekday: "long"
})




