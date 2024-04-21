/* 7. Strings

(i) Concatenation in Strings, */
const name = "Ayush"
const repoCount = 19
// Outdated Syntax,
console.log(name + repoCount + " etc."); // Output : Ayush19 etc.
// Modern day Syntax,
console.log(`My name is ${name} and I have total ${repoCount} repositories on GiHub.`);
// Output : My name is Ayush and I have total 19 repositories on GiHub.
/* Note: Benifits of this syntax is that we can use methods like, ${name.toUpperCase} e.t.c.

-------------------------------------------------------------------------------------------------- */

// (ii) One more way of declaring strings,
const gameName = new String('SuperMario') /* When we run this in Browser's console we can see
some interesting things there.

Some Methods of String, */
// (a) Accessing 0th key of gameName,
console.log(gameName[0]); // Output : S
// (b) Accessing prototype,
console.log(gameName.__proto__); // Output : {}

// (c) Accessing methods of Prototype,
console.log(gameName.length); // Output : 10
console.log(gameName.toUpperCase()); // Output : SUPERMARIO 
// This will not change our original string cause as we know about Stack.
console.log(gameName.charAt(3)); // Output : e
console.log(gameName.indexOf('M')); // Output : 5

const discordName = "hitesh-hc"
console.log(discordName.length); // Output : 9
const newString = discordName.substring(0, 4) // It will not include the 4th one.
console.log(newString); // Output : hite

const anotherString = discordName.slice(-8, 4)
console.log(anotherString); /* Output : ite
Note : We cannot give negative values in substring but we can give negative value in slice. */

const oneNewString = "    hitesh    "
console.log(oneNewString.trim()) // Output : hitesh (will remove that spaces around the string.)

const url = "https://ayush.com/ayush%20yadav"
console.log(url.replace('%20', '-')); /* Output : https://ayush.com/ayush-yadav
Also, */
console.log(url.includes('ayush')) // Output : true

console.log(discordName.split('-')); /* Output : [ 'hitesh', 'hc' ] (Converted into array with
two strings) */




