// Write a program that calculates a discount based on the purchase amount. 
// Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a 
// discount of 10. Otherwise discount is 0

let name = "Racy";
let price= ""

function discount(price) {
    if (price >= 100) {
      console.log(`Dear ${name} you have a discount of #20`);
    } else if (price >= 50) {
      console.log(` Dear ${name} you have a discount of #10`);
    } else {
      console.log(` Dear ${name} you have 0 discount, Try and buy more`);
    }
  }
  discount(price)