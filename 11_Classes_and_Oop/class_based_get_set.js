// Getters and Setters
// class based get set

class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    // Suppose someone trying to get password
    get password(){ // method name should be same as property name
        return `${this._password}Ayush`
    }
    // if getter defined then setter also needs to be defined
    set password(value){ // takes some value as parameter
        this._password = value
    }
}
// to get some value inside of class, for that getter exists
// to set some value inside of class, for that setter exists

const user = new User("ayush@gmail.com", "abc")
console.log(user.password); // abcAyush
console.log(user.email); // AYUSH@GMAIL.COM