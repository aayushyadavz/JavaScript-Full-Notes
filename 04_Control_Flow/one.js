/* Control flow, 
In previous codes we have seen that our code is executing everywhere,
but it should not be excecuted always, whole code should run on 
conditional base and this is known as Control/Logic Flow. */

/* Comparison Operators, 
<, > : less than, greater than. eg. 1 < 2
<=, >= : less than, greater than equal to. eg. 2 <= 2
== : checks equal or not.
!= : check not equal to. eg. 3 != 2 
=== : checks equal or not also with data types. eg. 2 === "2" 
!== : check not equal to (strict check). */

// If
const isUserLoggedIn = true
if (isUserLoggedIn) {
    console.log("You are logged in.");
} // Output: You are logged in.

// Else
const temprature = 53
if (temprature < 50) {
    console.log("Less than 50");
} else {
    console.log("Greater than 50");
} // Output: Greater than 50

// Block Scope
const score = 200
if (score === 200) {
    let power = "fly"
}
// console.log(`Power: ${power}`);
/* Throws an error.

Short-Hand */
const balance = 1000
if (balance > 500) console.log("Balance Greater than 500");

// Nesting
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("ess than 750");
} else {
    console.log("less than 1200");
} // Output: less than 1200

const userLoggedIn = true
const debitCard = true
const loggedInWithGoogle = false
const loggedInWithEmail = true
// && (AND)
if (userLoggedIn && debitCard /* && 2 == 2 */) /* left & right to && should be true */ {
    console.log("Allow to shop.");
} // Output: Allow to shop.
// Note: No statement should be false.

// || (OR) : Checks multiple conditions
if (loggedInWithEmail || loggedInWithGoogle /* || true */) /* from both if anyone is true */ {
    console.log("User Logged In");
} // Output: User Logged In