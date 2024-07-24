// Call Keyword

function setUsername(username) {
    this.username = username
}

function createUser(username, email, password){
    // setUsername(username) // reference given not called
    setUsername.call(this, username) // explicitly calling the method, holding reference
    this.email = email
    this.password = password
}

const user = new createUser("ayushyadavz", "ayush@gmail.com", "123")
console.log(user); 