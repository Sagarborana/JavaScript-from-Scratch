// Loops in JS

// loops are used for repeating a block of code

// For Loop --> loops a block of code for number of times

// Syntax --> 
//   for(initialization; condition to stop; increment statement){
//     block of code
//   }

for(let i=0;i<10;i++){
  console.log(i)
}

// For in Loop --> loops through the keys of an object

// Syntax --> 
//   for(key in object)){
//     block of code
//   }

const marks = {
  Sagar : 99,
  Virat : 18,
  Paresh : 7
}

for(a in marks){
  console.log(a)
}

// For of Loop --> loops through the values of an iterable object

// Syntax --> 
//   for(key of iterable)){
//     block of code
//   }

// this will through error as marks is not iterable object
// for(a of marks){
//   console.log(a)
// }

const cars = ["BMW", "Audi", "Ferrari"] //array

for(a of cars){ //iterating over the values of array
  console.log(a)
}

// While Loop --> loops based on a specific condition

// Syntax --> 
//   while(condition){
//     block of code
//   }
