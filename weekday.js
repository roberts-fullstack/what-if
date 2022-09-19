
const prompt = require('prompt-sync')({sigint: true});

let weekday = Number(prompt("Enter a number from 1-7 to display the day of the week: "));
console.log(weekday);

if(weekday === 1){
  console.log('Monday');
}

else if( weekday === 2){
console.log('Tuesday');
}

else if (weekday === 3){
console.log('Wednesday');
}

else if(weekday === 4){
  console.log('Thursday');
}

else if(weekday === 5){
console.log('Friday');
}

else if(weekday === 6){
console.log('Saturday');
}

else if(weekday === 7){
console.log('Sunday'); 
}

else {
  console.log('error');
}