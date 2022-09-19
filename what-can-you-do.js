
const prompt = require('prompt-sync')({sigint: true});

let age = Number(prompt("Please enter your age: "));
console.log(age);


if (age < 16){
console.log("You can't even drive.")
}

else if(age <= 17){
  console.log("You can drive to the poll, but you can't yet vote.")
}

else if(age >= 18){
  console.log("You're old enough to vote.")
}

else if (age >= 21){
  console.log("You can also purchase alcohol.")
}
