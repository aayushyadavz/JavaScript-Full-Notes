// 1. Let, const, var 

const accoundId = "14431"
let accountEmail = "ayushyadav@gmail.com"
var accountPassword = "1234"
accountCity = "Azamgarh" /* We can declare a variable by directly writing it's name but it's not a good
method. */

// Let's change these,
// accoundId = "15531" // This will throw an error cause changing Const variable is not possible.
accountEmail = "amanyadav@gmail.com"
accountPassword = "4321"
accountCity = "Varanasi"

console.table([accountEmail, accountPassword, accountCity]) /* Console.table helps us to write multiple 
variables in it using [] square bracets. */

//1. Either you put ; semicolon in end or not it doesn't matter.
//2. Const, let, var these are keyword.