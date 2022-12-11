let arr = [45, 23, 21]

// Array map method
let a = arr.map((value, index, array) => { // map() returns a new array
  console.log(value, index, array)
  return value + index
})
console.log(a)

// Array filter method
let arr2 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter((a) => { // filters the arr acc to given condition and returns it in form of a new array
  return a < 10
})
console.log(a2, arr2)

// Array reduce method
let arr3 = [1, 2, 3, 5, 2, 1]
const reduce_func = (h1, h2) => {
  return h1 + h2
}
let newarr3 = arr3.reduce(reduce_func) // reduces the array acc to given function
console.log(newarr3, arr3)
