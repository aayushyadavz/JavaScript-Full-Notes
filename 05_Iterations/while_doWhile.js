// While

let index = 0 // Variable Initialisation

while (index <= 10) /* Condition Check */ {
    console.log(`Value of index is ${index}`);
    index = index + 2 // Increament
}

// Array in While loop,

let myArr = ["IronMan", "Thor", "Captain America"]
let arr = 0 // Array indexing start from 0

while (arr < myArr.length) /* length of myArr : 3 */ {
    console.log(myArr[arr]);
    arr++
}

/* -----------------------------------------------------
Do While Loop 
Used in rare cases */

let score = 1

do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10);