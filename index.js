// Write a program that determines whether a given number is positive or negative.
let name = "Racy";
let score = 76;
let age = 24;
let price= 16

function checkNumbers(score) {
    if (score > 0) {
        console.log(`${score} is a Positive number.`);
    } else {
        console.log(`${score} is a Negative number or Zero.`);
    }
}

checkNumbers(score);




// Write a program to determine the greater of two numbers (between two numbers). Use both the if/else statement and tenary operator.

function checkGreaternumber(age,score){
if (age>score){
    console.loge(`True`)
} else{
    console.log(`how?`)
}

}
checkGreaternumber(age,score);

// using Tenary ops

let checkGreaterNumber = age > score ? "True" : "False";
console.log(checkGreaterNumber);

// Write a program that transforms a numerical grade to a letter grade (0-44: F, 45-49: D, 50-59: C, 60-69: B, 70-100: A).

function racySCore(score) {
    if (score >= 70 && score <= 100) {
        console.log(` ${name} Your Grade is: A`);
    } else if (score >= 60) {
        console.log(`${name} Your Grade is: B`);
    } else if (score >= 50) {
        console.log(`${name} Your Grade is: C`);
    } else if (score >= 45) {
        console.log(`${name} Your Grade is: D`);
    } else {
        console.log(`${name} Your Grade is: F`);
    }
}
racySCore(score)



// Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

function getTicketPrice(age) {
    if (age < 12) {
        console.log(` Dear ${name} your Ticket Price is: $5`);
    } else if (age < 18) {
        console.log(` Dear ${name} your Ticket Price is: $10`);
    } else if (age < 60) {
        console.log(` Dear ${name} your Ticket Price is: $20`);
    } else {
        console.log(`Dear ${name} your Ticket Price is: $15`);
    }
}
getTicketPrice(age)

// Write a program that calculates a discount based on the purchase amount. Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0

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

