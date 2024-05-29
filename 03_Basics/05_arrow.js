// 5. This

const user = {
    username: "Ayush",
    price: 999,
    welcomeMessage: function (){
        console.log(`${this.username}, welcome to website.`);
        // Note: While referring current context we use 'this' keyword.
        console.log(this); // Note: Will print the current context.
    }
}
// user.welcomeMessage() // Output: Ayush, welcome to website.
// user.username = "sam"
// user.welcomeMessage() // Output: sam, welcome to website.

console.log(this); // Output: {} Prints an empty object.
// Note: When we run this in browser's console we get window global object.

function one(){
    console.log(this);
}
// one() // Output: We get many values

function two() {
    let username = "ayush"
    console.log(this.username);
}
// two() // Output: Undefined

const three = function (){
    let username = "sam"
    console.log(this.username);
}
// three() // Output: undefined 

/* ----------------------------------------------------------------------------------------------------
Arrow Function, */

const chai = () => { // It's an arrow function
    let name = "Ayush"
    console.log(this.name);
}
chai() // Output: undefined
// Note: If in this arrow function we do console.log(this) then we get empty {}

// Explicit Return
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4)) // Output: 7

// Implicit Return,
const add = (num1, num2) => (num1 + num2)
console.log(add(3, 4)); // Output: 7

/* Note: When using curly braces {} then we have use return keyword and when using parenthesis () then 
we don't have to use return keyword. */

const returnObject = () => ({username: "ayush"})
console.log(returnObject()) // Output: { username: 'ayush' }