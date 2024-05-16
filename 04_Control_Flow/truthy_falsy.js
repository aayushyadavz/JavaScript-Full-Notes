// Truthy and Falsy are those values which are assumed as they were true or false.

const useremail = "ayushyadavz@gmail.com"
if (useremail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
} // Output: Got user email

// Note: Here a string in useremail is assumed as truthy value.

// falsy values : false, 0, -0, BigInt's 0n, null, undefined, NaN 
// truthy values : "0", 'false', " ", [], {}, function(){}

// Way of Checking empty Array & Object
const username = []
if (username.length === 0) {
    console.log("Array is Empty");
} // Output: Array is Empty

const useremailId = {}
if (Object.keys(useremailId).length === 0) {
    // Note: Object.keys() returns a Array of keys that's why we've used a .length property.
    console.log("Object is Empty");
} // Output: Object is Empty