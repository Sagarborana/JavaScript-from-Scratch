// Variables and Data Types in JS

//command to print
console.log("Hello JavaScript!!")

var a = 10 //var is globally scoped and can be re-declared
console.log(a)

var a ="Sagar" //redeclared var
console.log(a)

let b = "Virat" //let is block scoped and cannot be redeclared 
console.log(b)

// let b = 18 //we cannot redeclare let.. this will throw an error
b = 18
console.log(b);

const c = 7 //const cannot be redeclared and updated
console.log(c)

// c = 18 //we cannot update a const variable


// Primitive Data Types
// nn bb ss u
// Null, Number, Boolean, BigInt, String, Symbol, Undefined

let d; //undefined

//typeof operator is used for getting the datatype
console.log(typeof a); 
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof true);
