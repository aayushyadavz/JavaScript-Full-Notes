// Static Property

class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ // don't allow access this
        return "123"
    }
}

const user = new User("ayushyadavz")
console.log(user.createId()); // throws error

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const teacher = new Teacher("hitesh sir", "hitesh@gmail.com")
console.log(teacher.logMe()); // Username: hitesh sir 
console.log(teacher.createId()); // throws error