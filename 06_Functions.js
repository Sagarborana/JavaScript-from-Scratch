// Functions in JS

// Function is a block of code designed to perform a task so that we don't have to repeat the same code multiple times

//  Syntax -->
//  function name(parameters){
//    block of code
// }

function hello(){
  console.log("Hi Buddy!")
}

function sum(a,b){
  console.log("The sum is:",a+b);
}

hello();
sum(3,9);

function multiplication(a,b){ // function can also return a value
  return a*b;
}

let ans = multiplication(3,9)
console.log(ans)

// Another way to create a function

const average = (a,b) =>{
  // let c = Number.parseInt((a+b)/2); //to change float to integer
  let c = (a+b)/2;
  return c;
}

console.log(average(7,4))
