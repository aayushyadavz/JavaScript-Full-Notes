/* 3. Objects

Note: When objects are declared as literals then singletons are not made, When objects are 
declared as constructors then singletons are made.

Object through constructor method, */
Object.create

// And now we will discuss about Object literals below,

const mySym = Symbol("key1") // Declaring a Symbol.

const jsUser = {
    name: "Ayush", /* In this name (key) is treated as string ("name") in system & "Ayush"
    is it's value. */
    "full name": "Ayush Yadav",
    [mySym]: "myKey1", // refering that above declared Symbol as objects key using [].
    age: 21,
    location: "Azamgarh",
    email: "ayushyadav@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Tuesday", "Thursday"] // Array as value.
    // We can also give objects as values.
}
// Accessing Objects,
console.log(jsUser.email); // Output: ayushyadav@gmail.com | Not the best way to access.
console.log(jsUser["email"]); /* Output: ayushyadav@gmail.com | Using "" cause this key 
(email) is treated as strings behind the screen. */
console.log(jsUser["full name"]); /* Output: Ayush Yadav 
Note: It's not possible to access it like this (console.log(jsUser.full name)) */
console.log(jsUser[mySym]); /* Acessing that symbol used as key in Object.

--------------------------------------------------------------------------------------------
Changing Values, */
jsUser.email = "ayushyadav@google.com"
// Freezing values so that it can't be changed,
// Object.freeze(jsUser)
jsUser.email = "ayushyadav@microsoft.com"
console.log(jsUser); /* value will not change to "ayushyadav@microsoft.com" cause we have 
freezed the object. 

---------------------------------------------------------------------------------------------
Adding Functions in Object, */
jsUser.greetings = function () {
    console.log("Hi JS user");
}

jsUser.greetings2 = function() {
    console.log(`Hi JS user, ${this.name}`); // Refering name key from the Object. 
}

console.log(jsUser.greetings()); // Output: Hi JS user
console.log(jsUser.greetings2()); // Output: Hi JS user, Ayush