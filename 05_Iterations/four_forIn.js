// For in

// 'For in' on Objects
const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    console.log(`${key} shortcut is ${myObject[key]}`);
} // Output: js shortcut is javascript and so on...

/* Note: For in Loop works on Objects. 

----------------------------------------------------------------
'For in' on Array */

const programming = ["js", "cpp", "java", "py"]
for (const key in programming) {
    // console.log(key); // Gives array keys from 0 to 3 (index)
    console.log(programming[key]);
} /* Ouput: Gives values inside programming array. 

----------------------------------------------------------------
'For in' on Map */

const map = new Map()
map.set('IN', "India")
map.set('USA', "America")
map.set('Fr', "France")

for (const key in map) {
    console.log(key);
} // Output: Runs but gives not value

// Note: Maps is not iterable in 'for in' loop.