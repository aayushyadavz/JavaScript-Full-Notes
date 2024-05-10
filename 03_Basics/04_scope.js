// 4. Nested Scope

function one () {
    const username = "Ayush"

    function two () {
        const website = "Youtube"
        console.log(username);
        // Note: function two can access the variables of function one
    }
    // console.log(website); // Output: Error
    // Note: We cannot access the website variable outside function two

    two()
}
one()
/* Output: Ayush
Note: In nested function child can access parent variables. 

--------------------------------------------------------------------------*/
if (true) {
    const username = "Ayush"
    if (username === "Ayush") /* (true) */ {
        const website = " Youtube"
        console.log(username + website);
        // We can access username variable in child if statement.
    }
    // console.log(website); // Output: Error
    // Note: We cannot access website variable outside the scope. 
}
// console.log(username); // Output: Error
// Note: We cannot access username variable outside the scope.
/* Output: Ayush Youtube 

**************************** Interesting ***********************************/
console.log(addone(5));

function addone (num) {
    return num + 1
} // Output: 6


// console.log(addtwo(5));

const addtwo = function (num){
    return num + 2
} // Output: error