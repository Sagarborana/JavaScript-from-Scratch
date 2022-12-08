//  Conditional Statements in JS

let age = 68

if(age >= 18){ // only executes if the condition is met
  console.log("You can drive buddy!")
}else if(age <= 0){
  console.log("Invalid Age!!!")
}else{ // executes if above condition is not met
  console.log("Sorry, but you're a kid!")
}

// Note :- Only one of the above block of code is executed..
// if two conditions are fulfilled only the first if condition will execute


// Ternary Operator
// Syntax --> (condition) ? exp1 : exp2
(age >= 18) ? console.log("You can drive!") : console.log("You can't drive!")
