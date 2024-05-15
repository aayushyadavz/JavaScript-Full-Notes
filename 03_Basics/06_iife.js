/* 6. IIFE (Immediately Invoked Function Expressions)

Note: An IIFE in JavaScript is a function that is executed immediately 
after it's defined. It's typically used to create a private scope for variables
and functions to avoid polluting the global namespace.

Name IIFE, */
(function chai(){
    console.log(`DB Connected`);
})(); /* Output: DB Connected
Note: Using semicolon ; to end the first IIFE function. 

Simple IIFE, */
((name) /* parameter */ => {
    console.log(`DB Connected, ${name}`);
})("Ayush") /* argument | Output: DB Connected, Ayush

******************* 07 JS Execute Code - Call Stack is in readme.md ************
***************************** JS Basics The End ********************************/