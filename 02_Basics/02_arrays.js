// 2. Arrays

// (i) Methods to merge Arrays,
const marvel_heros = ["Thor", "Hulk", "Loki"]
const dc_heros = ["Flash", "Superman", "Batman"]
// marvel_heros.push(dc_heros)
console.log(marvel_heros); // Output: [ 'Thor', 'Hulk', 'Loki', [ 'Flash', 'Superman', 'Batman' ] ]
/* Note: In this dc_heros array has been taken as an 4th element in marvel_heros array.
And this is not a good practice or a good syntax. */

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros); // Output: [ 'Thor', 'Hulk', 'Loki', 'Flash', 'Superman', 'Batman' ]
// Note: .push pushes on existing array & .concat returns a new array.

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros); // Output: [ 'Thor', 'Hulk', 'Loki', 'Flash', 'Superman', 'Batman' ]
/* Note: This methods is used more, cause we can add multiple values in this ([..., ..., ...]).

----------------------------------------------------------------------------------------------------*/

const another_array = [1, 2, 3, [4, 5], 3, 4, [9, [4, 3]]]
const another_new_array = another_array.flat(Infinity)
console.log(another_new_array); // Output: [1, 2, 3, 4, 5, 3, 4, 9, 4, 3]
/* Note: All the values spreaded into a Array.

----------------------------------------------------------------------------------------------------

(ii) Converting into Array, */
console.log(Array.isArray("Ayush")); // Output: false | Ayush is not an Array.
// Converting it into an Array,
console.log(Array.from("Ayush")); // Output: [ 'A', 'y', 'u', 's', 'h' ] | Converted string into Array.
// Objects into Array,
console.log(Array.from({name: "Ayush"})); // Output: [] | Returns an empty array.

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1, score2, score3)); // Output: [ 100, 200, 300 ]