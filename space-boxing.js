const prompt = require('prompt-sync')({sigint: true});

let venus = 1;
let mars = 2;
let jupiter = 3;
let saturn = 4;
let uranus = 5;
let neptune = 6;

let ageSum = 0;

let num1 = Number(prompt('What is your weight on earth?: '));
console.log(num1);

console.log('Choose the planet where you expect to compete : 1. Venus, 2. Mars, 3. Jupiter, 4. Saturn, 5. Uranus, 6. Neptune: ')

let num2 = Number(prompt('> '));
console.log(num2);
 

if (num2 === 1){
  let gravRate = 0.78
  console.log('Your weight on Venus is: ');
  console.log(num1 * gravRate);
}

else if(num2 === 2){
  let gravRate = 0.39
  console.log('Your weight on Mars is: ');
  console.log(num1 * gravRate);
}

else if(num2 === 3){
  let gravRate = 2.65
  console.log('Your weight on Jupiter is: ');
  console.log(num1 * gravRate);
}

else if(num2 === 4){
  let gravRate = 1.17
  console.log('Your weight on Saturn is: ');
  console.log(num1 * gravRate);
}

else if(num2 === 5){
  let gravRate = 1.05
  console.log('Your weight on Uranus is: ');
  console.log(num1 * gravRate);
}

else if(num2 === 6){
  let gravRate = 1.23
  console.log('Your weight on Neptune is: ');
  console.log(num1 * gravRate);
}

else{
  console.log('Not a valid entry, choose a number between 1-6.')
}