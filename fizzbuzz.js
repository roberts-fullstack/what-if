const prompt = require('prompt-sync')({sigint: true});


let num1 = Number(prompt('Enter a number to determine if it is divisible by 3, 5 or both: '));

console.log(num1);

if (num1 % 15 == 0 ){ 
  console.log('Fizzbuzz')
}

else if (num1 % 3 === 0){
  console.log('FIZZ')
}

else if(num1 % 5 === 0){
  console.log('BUZZ')
}

else {
  console.log('Try again.')
}
