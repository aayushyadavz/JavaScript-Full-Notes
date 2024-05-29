const coding = ["js", "python", "java", "C++"]

const values = coding.forEach( (item) => {
    // console.log(item)
    return item 
} )
console.log(values); // Output: Undefined

/* Note: So now we know that 'for each' doesn't return any value, either we use return keyword or not.

------------------------------------------------------------------------------------------------------
Filter */

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numbers = myNums.filter( (num) => num > 4 /* (Condition) */ )
console.log(numbers); // Output: [ 5, 6, 7, 8, 9, 10 ]

const number = myNums.filter( (val) => { // Scope Open
    return val > 4 // 03_Basics/05_arrow.js, Explicit return
} )
console.log(number); // Output: [ 5, 6, 7, 8, 9, 10 ]

// Doing the same with 'For each',
const newNums = []

myNums.forEach( (items) => {
    if (items > 4) {
        newNums.push(items)
    }
} )
console.log(newNums);

/*----------------------------------------------------------------------------------------------------
Example */

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let myBook = books.filter( (bk) => bk.genre === 'History' )

myBook = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === 'History'
} )

console.log(myBook);