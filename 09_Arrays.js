// Arrays in JS

// Arrays are objects which are used to store multiple values in a single variable
let marks = [91, 82, 63, 84, false, "Not Present"]
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
console.log(marks[5])
console.log(marks[6]) // Will be undefined because index 6 does not exist
console.log("The length of marks is", marks.length)
marks[6] = 89 // Adding a new value to the array
marks[0] = 96 // Changing the value of an array
console.log(marks)
console.log(typeof marks)
