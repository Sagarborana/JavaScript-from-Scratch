// Exercise 1: Guess the number

let number = Math.floor((Math.random() * 10) + 1);
let chances = 0

do{
  let entry = prompt("Enter a number between 1 to 100 : ")
  chances++;
  
  if(entry == number){
    console.log(number+"! You guessed it right... Congrats")
    console.log("Your score is",100-chances)
    break;
  }else{
    console.log("Wrong Answer.. Try Again!!")
  }
}while(chances <= 100)
