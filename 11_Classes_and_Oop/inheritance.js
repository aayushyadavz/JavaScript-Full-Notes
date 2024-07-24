class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A course was added by ${this.username}`);
    }
}

const teacher = new Teacher("Hitesh Chaudhary", "hitesh@gmail.com", "123")
teacher.addCourse() // A course was added by Hitesh Chaudhary

const newTeacher = new user("Angela Yu")
// newTeacher.addCourse() // newTeacher doesn't have access of addCourse()
newTeacher.logMe() // USERNAME is Angela Yu

// instanceOf

console.log(teacher instanceof user); // true
console.log(teacher instanceof Teacher); // true

console.log(newTeacher instanceof user); // true
console.log(newTeacher instanceof Teacher); // false