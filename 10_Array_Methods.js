// Array Methods in JS

let num = [1, 2, 3, 34, 4, 'Sagar']
let b = num.toString() // b is now a string 
console.log(b, typeof b)

let c = num.join(" and ") //returns a string seperated by the argument passed
console.log(c, typeof c)

let r = num.pop() // pop removes the last element and returns it
console.log(num, r)

let s = num.push(56) // push adds element to the end and returns the new array length
console.log(num, s)

let u = num.shift() // Removes an element from the start of the array and returns it
console.log(u, num) 

let v = num.unshift(78) // Adds an element at the start of the array and returns the new array length
console.log(v, num)

let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]

// console.log(num2.length)
// delete num2[0] // deletes the element but does not reduce the size
// console.log(num2.length)

// console.log(num2)

num2[0] = 1
// let newArray = num2.concat(num_more, num_even_more) //returns new array after concatenation
// console.log(newArray)

// sort method
let num3 = [551, 22, 3, 14, 5, 6, 7, 8, 229]
num3.sort() // sorts alphabetically (not ascending or descending) 
console.log(num3)

let compare = (a, b)=>{
  return a - b
}

num3.sort(compare) // we have to pass this compare function to sort it like whatever way we want 
console.log(num3)

num3.reverse() //reverse the array
console.log(num3)

// Splice and Slice
//splice takes 3 paramters(starting index,elements to be removed,new elements...)

let num4 = [551, 22, 3, 14, 5, 6, 7, 8, 229]
let deletedValues = num4.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
console.log(num4)
console.log(deletedValues)

let newNum = num4.slice(3)
console.log(newNum) //slices the array from the index given till end in end index is not given and returns a new array

newNum = num4.slice(3, 5)
console.log(newNum)
