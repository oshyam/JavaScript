//Write a program that display a Listing Price and Discounted price of  a course using Operator

// ((listingPrice - sellingPrice)/listingPrice)*100 The calculation is based on operator precedence

// quickreference --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

const sellingPrice = 4500;
const listingPrice = 7999;
const discountedPrice = ((listingPrice - sellingPrice)/listingPrice)*100;
const showroundfigureDiscountedRate = Math.round(discountedPrice);


console.log(
 ` 
 The listing Price is Ruppes ${listingPrice}
 You got at discounted  of " ${showroundfigureDiscountedRate} % off
 
 `

);

// console.log(typeof listingPrice); typeof return data type

console.log( "The data type of discounted Price is " + typeof showroundfigureDiscountedRate);

