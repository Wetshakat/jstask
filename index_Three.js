
// Write a program to determine the greater of two numbers (between two numbers). Use both the if/else statement and tenary operator.

let name = "Racy";
let score = 76;
let age = 24;


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