
// Write a program that transforms a numerical grade to a letter grade (0-44: F, 45-49: D, 50-59: C, 60-69: B, 70-100: A).

let name = "Racy";
let score = "A";



// function racySCore(score) {
//     if (score >= 70 && score <= 100) {
//         console.log(` ${name} Your Grade is: A`);
//     } else if (score >= 60) {
//         console.log(`${name} Your Grade is: B`);
//     } else if (score >= 50) {
//         console.log(`${name} Your Grade is: C`);
//     } else if (score >= 45) {
//         console.log(`${name} Your Grade is: D`);
//     } else {
//         console.log(`${name} Your Grade is: F`);
//     }
// }
// racySCore(score)

switch (score) {
    default:
      console.log("Invalid!");
      break;
  
    case "A":
      console.log("you got an A");
      break;
    case "B":
      console.log("you got a B");
      break;
    case "C":
      console.log("you got a C");
      break;
    case "D":
      console.log("you got a D");
      break;
    case "E":
      console.log("you got an E");
      break;
  }
