// Class keyword

class user {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const ayush = new user("Ayush", "ayush@gmail.com", "123")
console.log(ayush.encryptPassword()); // 123abc
console.log(ayush.changeUsername()); // AYUSH

// Doing the same without Class syntax

// function user(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// user.prototype.encryptPassword = function (){
//     return `${this.password}abc`
// }

// user.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }

// const aman = new user("aman", "aman@gmail.com", "234")
// console.log(aman.encryptPassword()); // 234abc
// console.log(aman.changeUsername()); // AMAN