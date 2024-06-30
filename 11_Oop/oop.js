// Object Literals (Creating a object literally)

const user = {
    username: "ayushyadavz",
    logInCount: 8,
    signedIn: true,

    getUserDetails: function () {
        console.log("Got user details from Database");
        console.log(`username: ${this.username}`); // Gives current context username value.
    }
}

console.log(user.username);
console.log(user.getUserDetails());
// This in Global context
console.log(this); // Output: {}
/* But in browser console it gives window object.

//-------------------------------------------------------------------------------------------

Constructor functions */

// const promiseOne = new Promise()
const date = new Date()
/* This new keyword is actually a constructor function.
- It allows us to make multiple instances from a single object literal. 

Example, */
function User(username, logInCount, signedIn) {
    this.username = username // left side is variable
    this.logInCount = logInCount
    this.signedIn = signedIn

    return this
}

// const userOne = User("Ayush", 8, false)
// const userTwo = User("Deepu", 10, true)
// console.log(userOne); 
// userOne value will be overwritten with the values of usertwo.

// To avoid this we will use constructor function.
// It will always give a new instance (copy) by which other one will not be affected.
const userOne = new User("Ayush", 8, false)
const userTwo = new User("Deepu", 10, true)
console.log(userOne);