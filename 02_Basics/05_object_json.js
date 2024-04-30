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

/*--------------------------------------------------------------------------------
JSON (Javascript Object Notation), 
API can provide data in a structured format such as JSON,
JSON's structure is easy for humans to read and understand,

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