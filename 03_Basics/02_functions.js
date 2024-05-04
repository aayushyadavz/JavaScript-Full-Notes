/* 2. Functions

Note: Here, ... is known as Rest Operator. */
function calculateCartPrice(...num1) {
    return num1
}
console.log(calculateCartPrice(200, 300, 400)); /* Output: [ 200, 300, 400 ]

if, */
function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
console.log(calculateCartPrice(200, 300, 400, 500)); /* Output: [ 400, 500 ]
Note: 200, 300 will go in val1 and val2. 

------------------------------------------------------------------------------------

Function with Object, */
const user = {
    username: "Ayush",
    price: 199
}

function handleObject(anyObject) {
   console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user) /* Output: Username is Ayush and price is 199
We can directly pass objects here, */
handleObject({
    username: "sam",
    price: 300
}) /* Output: Username is sam and price is 300

-------------------------------------------------------------------------------------

Function with Array, */
const myNewArr = [200, 300, 400, 500]

function returnSecondValue(getArr){
    return getArr[1];
}
console.log(returnSecondValue(myNewArr)); /* Output: 300
We can directly pass Array here, */
console.log(returnSecondValue([300, 400, 500, 600])); // Output: 400