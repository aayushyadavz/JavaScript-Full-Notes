// object based get set

const User = {
    _email : "ayus@ai.com",
    _password : "2324",

    get email(){
        return this._email.toUpperCase()
    },
    set email(val){
        this._email = val
    }
}

const user = Object.create(User)
console.log(user.email); // AYUS@AI.COM