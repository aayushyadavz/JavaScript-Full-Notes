// Reduce

const myNums = [1, 2, 3]

const total = myNums.reduce( function (acc, currval) {
    console.log(`acc: ${acc} and currVal: ${currval}`);
    return acc + currval
}, 0 /* acc start value */ )
console.log(total);

/* Output: 
acc: 0 and currval: 1 (0 + 1)
acc: 1 and currval: 2 (1 + 2)
acc: 3 and currval: 3 (3 + 3)
6 (total) 

--------------------------------------------------------------------
'Reduce' in Arrow function */

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0 )

console.log(myTotal); /* Output: 6 

--------------------------------------------------------------------
Real life example */

const shopppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "Py Course",
        price: 999
    },
    {
        itemName: "Mobile dev Course",
        price: 5999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    },
]

const priceToPay = shopppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(priceToPay); // Output: 22996