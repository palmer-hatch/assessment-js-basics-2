///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.filter(cart => cart.price).reduce((acc,curr) => acc + curr.price, 0)

console.log(summedPrice)
//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

let calcFinalPrice = (cartTotal, couponValue, tax) =>{
    newCartTotal = cartTotal - (cartTotal * (tax +1))
    newNewCartTotal = newCartTotal - couponValue
    return newNewCartTotal
}



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    You would need:
     name in a string- so that you can search strings or match strings to previous orders
    age - number data type so that way you can check if they could order alchol or to see what age groups like
    Area code - number data type - to see if they can deliver that order to the person
    email - so they can respond if something bad happens. String so you can manipulate whether or not your customers have gmail accounts to do add targeting


*/

/*
    Now, create a customer object following your own
    guidelines.
*/

let customer = {
    name : "Palmer",
    age : 25,
    areacode: 84108,
    email : "palmermexico@gmail.com"
}
