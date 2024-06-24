/* Promises

Ask this, "Why do we use promises in JavaScript? Explain in simple terms" to ChatGPT to 
understand promises. 

How to make Promises, */
const promiseOne = new Promise(function(resolve, reject){
    // Do an Async Task
    setTimeout(function(){
        console.log("Async Task is completed");
        resolve() // To connect resolve & .then
    }, 1000)
})

// Consuming Promises
promiseOne.then(function(){ // ".then" has direct relation with resolve
    console.log("Promise Consumed");
})

// -------------------------------------------------------------------------------------
new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async task 2 resolved");
})

// -------------------------------------------------------------------------------------
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        // passing data in resolve which is an object in most cases
        resolve({username: "Ayush Yadav", email: "ayushyadav@gmail.com"}) 
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
}) // While consuming we get parameter passed in resolve in .then

// -------------------------------------------------------------------------------------
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) { // When (error = false)
            resolve({username: "ayushyadavz", password: "123"})
        } else { // When (error = true)
            reject("Error: Something went wrong")
        }
    }, 1000)
})

promiseFour.then(function(user){ // Expecting to receive username
    console.log(user);
    return user.username
}).then(function(myUsername){ // Chaining (Upper returned value will come here)
    console.log(myUsername); // Output : ayushyadavz
}).catch(function(err){ 
    console.log(err); // Prints reject's value
}).finally(() => console.log('The Promise is either resolved or rejected.')) // This will always execute

// -------------------------------------------------------------------------------------