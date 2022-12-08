// Operators in JS

// Arithmetic Operators

let a = 10
let b = 5

// Binary Operators
console.log(a + b) // addition
console.log(a - b) // subtraction
console.log(a * b) // multiplication
console.log(a / b) // division (gives value in floating number unlike c/c++/java)
console.log(a % b) // modulus operator (gives remainder)
console.log(a ** b) // exponantiation (a to the power of b)

// Unary Operators (operates on single operand)

console.log(a++) // post increment(first used then increment)
console.log(a--) // post decrement(first used then decrement)
console.log(++a) // pre increment(first increment then used)
console.log(--a) // pre decrement(first decrement then used)

// Assignment Operators

a = b 
a += b // a = a + b
a -= b // a = a - b
a *= b // a = a * b
a /= b // a = a / b
a %= b // a = a % b
a **= b // a = a ** b

a = 10

// Comparison Operators

// returns true if the condition true
console.log(a == b) // value equals to
console.log(a >= b)
console.log(a <= b)
console.log(a > b)
console.log(a < b)
console.log(a != b)// not equals to

let c = 18
let d = '18'

console.log(typeof c)
console.log(typeof d)

console.log(c == d) // returns true if value is same
console.log(c === d) // returns true if value and type both are same

console.log(c != b) // returns true if value is not same
console.log(c !== b) // returns true if either value or type is not same

// Logical Operators

console.log(c == d && a == b) //logical AND(gives true only if both conditons are true)
console.log(c == d || a == b) //logical AND(gives true if either of the conditons is true)
console.log(!true) //logical NOT(reverses the condition)
