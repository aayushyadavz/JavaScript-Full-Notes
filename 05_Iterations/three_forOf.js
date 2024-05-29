// For of Loop

// 'For of' on Array
const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
    console.log(num);
} 
/* Prints array values from 1 to 5 

-----------------------------------------------------------------------------------------------

'For of' on String */
const greetings = "Hello World!"

for (const greet of greetings) {
    if (greet == " ") {
        continue
    } // To remove that space between o & W
    console.log(`Each charracter is : ${greet}`);
}

// --------------------------------------------------------------------------------------------

const map = new Map()
map.set('IN', "India")
map.set('USA', "America")
map.set('Fr', "France")
// Adding the same key and value again,
// map.set('IN', "India") // It will not be added
// Note: As Map is known for it's unique values and stays in that order on which it is entered.

console.log(map);
/* Output: Map(3) { 'IN' => 'India', 'USA' => 
'America', 'Fr' => 'France' } 

'For of' on Map */
for (const [keys, values] /*Destructure of Array*/ of map) {
    console.log(keys, '=', values);
}
/* Output: IN = India
           USA = America
           Fr = France 
           
-------------------------------------------------------------------------------------------------
'For of' on Object */
const myObject = {
    game1: 'NFS',
    game2: 'spiderman'
}

// for (const [keys, values] of obj) {
//     console.log(keys, "=", values);
// } // Output: Error :- myObject is not iterable

// Note: For of Loop doesn't work on Objects.