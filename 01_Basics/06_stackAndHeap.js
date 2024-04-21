// 6. Stack & Heap

// * Some notes also available in note book with Diagram. Photo available in readme.md

// Example of Stack,
let myYoutubeName = "ayushyadavz" // Primitive Type so myYoutubeName will go into stack.
let anotherName = myYoutubeName // This will have the copy value of myYoutubeName.
anotherName = "amanyadavz" // It's value will go in stack.
console.log(myYoutubeName); // Output : ayushyadavz (Original value did not change)
console.log(anotherName); // Output : amanyadavz (Only Copy value is changed)
/* So, here we have changed the copy not the original value.

---------------------------------------------------------------------------------------- */

// Example of Heap,
let userOne = { // UserOne will go into Stack. (Primitive)
    email: "user@google.com",
    upi: "user@ybl"
} // items between {} will go into Heap. (Non-Primitive)
let userTwo = userOne // userTwo will get reference from original value.
userTwo.email = "ayush@google.com"
console.log(userOne.email); // Output : ayush@google.com
console.log(userTwo.email); // Output : ayush@google.com
// (Original Value gets changed)
