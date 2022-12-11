// Strings in JS

//we can either use '' for "" for declaring strings in JS
let n = "Sagar"
let myName = 'Borana'
console.log(n)
console.log(myName)

// let hobby = 'He love's playing cricket' // this will throw error
let hobby = "He love's playing cricket" // you can use "" if your string contains '' and vice versa 
console.log(hobby)

// you can use backtick or escape sequence character also
let s = `He said "I'm Sagar"`
console.log(s)

let l = "He said \"I'm Rohit\"" // escape sequence character

// to get length of a string
console.log(myName.length)

// we can get any character of string using this
console.log(myName[2]) // indexing starts from 0

// Template literals
let boy1 = "Sagar"
let boy2 = "Virat"
// Virat is a friend of Sagar
let sentence = `${boy2} is a friend of ${boy1}` //only bactick can be used here
console.log(sentence)
