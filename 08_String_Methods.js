// String Methods in JS

let myName = "Sagar"

console.log(myName.toUpperCase())
console.log(myName.toLowerCase())

console.log(myName.slice(2, 4)) // slices the string from start index to end index-1(excluding the last index given)
console.log(myName.slice(2)) // if only 1 argument is passed it gives the remaining string till end


console.log(myName.replace("Sag", "Doll")) // replaces the part of string with the given argument

let friend = "Virat"
console.log(myName.concat(" is a friend of ",friend)) // concatenates two strings

let friend2 = "      Sahil        "
console.log(friend2)
console.log(friend2.trim()) //trims all the leading and trailing spaces


// friend2[4]= "o" // This is not possible because Strings are immutable in JS

// QuickQuiz: Use a for loop to print a string

for(let i = 0;i<myName.length;i++){
  console.log(myName[i]);
}

for(let i of myName){
  console.log(i);
}
