// For each Loop

// 'For each' on Array
const coding = ["js", "python", "java", "C++"]

coding.forEach( function (val) {
    // console.log(val);
} ) 
/* Note: We don't write name of these functions cause it's 
callback functions. 
Note: Everytime this function (coding) will execute and take
the values of array as an parameter (val). 

-------------------------------------------------------------
'For each' on Array using Arrow functions */

coding.forEach( (items) => {
    // console.log(items);
} )
/* All the items of the array will be printed one by one. 

-------------------------------------------------------------
Creating function */
function printMe(item){
    // console.log(item);
}
// Giving reference of this function
coding.forEach(printMe)

// ----------------------------------------------------------

coding.forEach( (val, index, arr) => {
    // console.log(val, index, arr);
} )
/* Output: js 0 [ 'js', 'python', 'java', 'C++' ] and so on 

-------------------------------------------------------------
'For each' on Objects in Array */

const myCoding = [
    {
        langName: "javascript",
        langFileName: "js"
    },
    {
        langName: "java",
        langFileName: "java"
    },
    {
        langName: "python",
        langFileName: "py"
    },
]

myCoding.forEach( (lang) => {
    console.log(lang.langFileName);
} )