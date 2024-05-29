/* Data Types are divided into 2 Types,
1. Primitive Data Type &
2. Non-Primitive Data Type

Note : How Data is stored and How data is accsessed from the memory on the basis of this categorisation of
data is done. 

Note : JavaScript is dynamically typed. 

----------------------------------------------------------------------------------------------------------

1. Primitive Data Type : 7 Types : String, Number, Boolean, Symbol, Null, undefined, BigInt. (These 
are call by value) */

const score = 100
const scoreValue = 100.3
// Both comes into number category there is noting like float value for decimal e.t.c like other languages.
const isLoogedIn = true // Boolean
const outsideTemp = null // Null
let weather; // OR let weather = undefined // Undefined
// Symbol,
const id = Symbol('123')
const anotherId = Symbol('123') 
/* The return type for both will be the data type (Symbol) and both id & anotherId treated diffrently.
To check, */
console.log(id === anotherId); // false
const bigNumber = 23873847283748289483n // By writing n at the end it gets converted into BigInt.

/* -------------------------------------------------------------------------------------------------------

2. Reference Type (Non-Primitive) : array, objects, functions. */

// Array,
const heros = ["ironman", "spiderman", "batman"];
// Objects,
let myObj = { // We can store them into a Variable
    name: "Ayush",
    age: 21, 
} // The code inside these curly braces is object.
// Function,
const myFunction = function (){ // Defintion stored into a variable
    console.log("Hello World");
}

/* ------------------------------------------------------------------------------------------------------

Checking Data Types of all, 
Primitive, */
console.log(typeof scoreValue); // number
console.log(typeof isLoogedIn); // boolean
console.log(typeof outsideTemp); // object
console.log(typeof weather); // undefined
console.log(typeof anotherId); // symbol
console.log(typeof bigNumber); // bigint

// Non Primitive,
console.log(typeof heros); // Object
console.log(typeof myObj); // object
console.log(typeof myFunction); // function