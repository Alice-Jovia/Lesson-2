/*
DATA TYPES
- Number
- String
- Boolean
- Null
- Undefined
*/

const fristName = "JB";
const lastName = null;
const isOrphan = true;
let score;
console.log(typeof isOrphan);

// OPERATORS
/**
 * Assignment Operators (=)
 * Arithmetic Operators (+ - / * % **)
 * Comparison Operators (< > <= >= != == === !==)
 */

const x = 5;
const y = "5";
//Type coersion
// console.log(x !== y);

// CONTROL STATEMENTS
// IF STATEMENTS AND SWITCH STATEMENTS
// const age = prompt("Enter your age? ");
const age = 25;
// SYNTAX
// if (condition) {
//   //Choice if condition is true
// } else {
//   //Choice if Condition not true
// }

// if (age >= 18) {
//   console.log("Your allowed to vote");
//   window.location.href = "adult.html";
// } else {
//   console.log("Your still young to vote");
//   window.location.href = "young.html";
// }

// Conditional Operator (are good if you have one Condition)
age >= 18
  ? console.log("Your allowed to vote")
  : console.log("Your still young to vote");

// SIMPLE INTEREST
//  A = PRT/12*100

const principal = Number(prompt("Enter your principle?"));
console.log(typeof principal);
let rate;
// RATES
/*
1000 and Below = r =5
1000 and 5000 = r=10
above 5000 = r=15
*/
if (principal <= 1000) {
  rate = 5;
} else if (principal >= 1000 && principal <= 5000) {
  rate = 10;
} else if (principal > 5000) {
  rate = 15;
} else {
  alert("Please enter a Number eg 1000");
}
console.log(rate);

const time = 5;
if (principal && rate) {
  const amount = (principal * rate * time) / (12 * 100);
  // Rounding off
  console.log(Math.round(amount));
  // console.log(amount);
} else {
  alert("You entered wrong values");
}

// STRING FUNCTIONS
const name = "John";
console.log(name.toLowerCase());
console.log(name.toUpperCase());
