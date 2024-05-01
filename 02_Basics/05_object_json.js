// 5. De-Structuring Object,

/* Destructuring objects in JavaScript is a convenient way to extract properties 
from objects and assign them to variables. This syntax simplifies accessing data 
within objects and helps you write cleaner and more readable code. */

const course = {
    courseName: "Learn Javascript",
    price: "Free",
    courseInstructor: "Ayush"
}
// const {courseInstructor, price} = course
const {courseInstructor: instructor} = course
console.log(instructor); // Output: Ayush

/*----------------------------------------------------------------------------------------------
An API is like a menu at a restaurant. It tells you what you can order and how to ask for it. 
It lets different software talk to each other and share information.

JSON (Javascript Object Notation), 
JSON is a way to organize data in a simple format that both humans and computers can understand.
It's like putting information in a neat box for easy shipping.

   {
      "name": "Ayush",
      "courseName": "JS Hindi",
      "price": "Free"
   } 
   
The given JSON data is an array of three empty objects,

   [
      {},
      {},
      {}
   ] 
*/ 