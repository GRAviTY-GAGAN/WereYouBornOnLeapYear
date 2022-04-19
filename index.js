// program to check leap year
const readlineSync = require("readline-sync");
const userAnswer = readlineSync.question("Welcome!!! Do you want to find out if you were born on a leap year or not? \n");
if(userAnswer.toLowerCase() == "yes") {
  const user = readlineSync.question("Okay then. Give me your NAME \n");
  const year = readlineSync.question(`Okay ${user}, enter your birth year: \n`);
  if(year < 2022){
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(`${user} you were born on leap year (${year}.)`);
    } else {
        console.log(`${user} you were not born on leap year (${year})`);
    }
}

// take input
// const year = prompt('Enter a year:');

checkLeapYear(year);
  } else {
    console.log(user, "this is not a vaild year. Start again and enter a valid year");
  }
} else {
console.log("Ok, Bye...")
}