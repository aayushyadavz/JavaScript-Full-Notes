/* 3. Scope 

Note: {} This curly braces in every programming language is known as scope.
eg. function {}, if {} else {}, for {} e.t.c, means it is scope of that function,
loop, conditional e.t.c. 
Note: {} Curly braces in Object is Object Declaration. */

if (true) { // (true) states that we will go inside this if statement.
    let a = 10
    const b = 20
    var c = 30
}
// Note: The declared variables in "{}" should not exceed "}"
// console.log(a); // Throw an error that 'a' is not defined
// console.log(b); // Throw an error that 'b' is not defined
// Note: It is good that variable a & b are not going outside the scope.
// console.log(c); // Output: 30
/* Note: This 30 should not come outside. That's the problem of var keyword.

-------------------------------------------------------------------------------------------------------
Global Scope, */
let a = 100
const b = 200
var c = 300

// Block Scope,
if (true) {
    let a = 10
    const b = 20
    var c = 30
}

console.log(a); // Output: 100
console.log(b); // Output: 200
console.log(c); // output: 30

/* Note: Values of Global scope can be available inside {} but values written inside {} should not go 
outside {}

Note: The scope checked in browsers console and the scope checked in our code enviroment using node 
are different. */