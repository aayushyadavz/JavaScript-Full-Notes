// 4. Objects,

const tinderUser = new Object() // Singleton Object
// console.log(tinderUser); // Output: {}

const tinderUserTwo = {} // Non-singleton Object
// console.log(tinderUserTwo); // Output: {}

tinderUserTwo.id = "123abc"
tinderUserTwo.name = "sammy"
tinderUserTwo.isLoggedIn = false
// console.log(tinderUserTwo); // Output: { id: '123abc', name: 'sammy', isLoggedIn: false }

/*-------------------------------------------------------------------------------------------------
Objects into Objects, */
const regularUser = {
    email: "someuser@gmail.com",
    fullName: {
        usersName: {
            firstName: "Ayush",
            lastName: "Yadav"
        }
    }
}
// console.log(regularUser.fullName.usersName.lastName); // Output: Yadav

//-------------------------------------------------------------------------------------------------
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// Combining Objects,
// const obj3 = Object.assign({}, obj1, obj2) // {} Target | obj1, obj2 Source
// console.log(obj3); // Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// const obj3 = {...obj1, ...obj2} // used most of the time
// console.log(obj3); // Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

/*-------------------------------------------------------------------------------------------------
Array of Objects, */
const user = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "i@gmail.com"
    },
    {
        id: 3,
        email: "j@gmail.com"
    },
    {
        id: 4,
        email: "k@gmail.com"
    }
]
// console.log(user[2].email); // Output: j@gmail.com

/*-------------------------------------------------------------------------------------------------
Some more impotant syntax, */
console.log(Object.keys(tinderUserTwo)); // Output: [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUserTwo)); // Output: [ '123abc', 'sammy', false ]
console.log(Object.entries(tinderUserTwo)); /* Output: [ [ 'id', '123abc' ], [ 'name', 'sammy' ], 
[ 'isLoggedIn', false ] ] 

Checking Property exist or not, */
console.log(tinderUserTwo.hasOwnProperty('isLoggedIn')); // Output: true