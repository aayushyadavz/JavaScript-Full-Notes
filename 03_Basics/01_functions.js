// 1. Functions

function myname() {
    console.log("A");
    console.log("y");
    console.log("u");
    console.log("s");
    console.log("h");
}
myname() /* myName is reference of the function & () is execution of the function.

---------------------------------------------------------------------------------------*/

function addTwoNumbers(number1, number2) { // Here, number1 & number2 are Parameters.
    console.log(number1 + number2);
}
// const result = addTwoNumbers(3, 4) // and Here, 3 & 4 are Arguments.
/* Output : 7 
But if we check the value in result variable, */
// console.log(`Result : ${result}`); // Output : Result : undefined
/* Printing console in function doesn't means it's returning the value. 

To fix this,*/
function addTwoNumbers2(number1, number2) {
    // let result = number1 + number2
    // return result
    /* console.log("Ayush"); This will never be excecuted cause after return function
    doesn't work. */
}
// const result = addTwoNumbers2(3, 4)
// console.log(result); // Output: 7

// One more method of doing the same,
function addTwoNumbers3(number1, number2) {
    return number1 + number2
}
const result = addTwoNumbers3(3, 10)
console.log(result); /* Output: 13

---------------------------------------------------------------------------------------*/

// (i)
function userLogin(username){
    return `${username} just logged in.`
}
// console.log(userLogin("Ayush")); // Output: Ayush just logged in.

// (ii)
function userLogin2(username){
    if (!username){ // (!username) states (username === undefined)
        console.log("Please enter a username.");
        return /* if "if" statement will be true then return will stop
        code after the above console.log in this function. */
    }
    return `${username} just logged in.`
}
// console.log(userLogin2()); // Output: undefined
// Output: Please enter a username.
// console.log(userLogin2("Ayush"));
// Output: Ayush just logged in. 

// (iii)
function userLogin3(username = "sam"){
    return `${username} just logged in.`
}
console.log(userLogin3()); // Output: sam just logged in.
console.log(userLogin3("Ayush")); // Output: Ayush just logged in.