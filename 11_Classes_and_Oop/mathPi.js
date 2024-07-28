// Checking Universal Constant Math.PI
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor);
/* After console.log we will see that writable property of Math.PI is set to be false
which cannot be set to true, that's why it's value is constant and cannot be changed.


Doing the same with our own created object */
const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderChai: function () {
        console.log("Chai Not Available");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// We will see that writable & enumerable property for name is set to false.

// forOf loop on chai object
for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') { // so that we get key value pairs
        console.log(`${key}: ${value}`);
    }
}

// After setting enumerable property to false for name, the loop will not print this.