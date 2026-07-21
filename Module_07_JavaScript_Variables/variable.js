console.log(7);
console.log(3);

// ***variable name should be meaningful. It should indicate what it contains
// *** keywords cant be use as name of variable 
// We dont normally use var anymore we use let/const instead..

var weight = 100;

console.log(weight);

// let (We can change or update something by using let)

let price = 200;
price = 150;
price = 500;

// strings should stay inside quatotion (" " /' ' ) 

let myName = "Nafisha" ; 
let country = 'Bangladesh'
console.log(myName);
console.log(country);

let fruit = 'Mango';


// const ( for constant value )

const PI = 3.1416;

// for Boolean
const isrich = true;
console.log(isrich);

const Nafishaisagoodgirl = false;
console.log(Nafishaisagoodgirl);

// To check of variable (typeof)

console.log(typeof isrich);
console.log(typeof PI);
console.log(typeof fruit);

// Variable name should be in 1 word but if its big and we have to use multiple words we can use some ways 

let my_name_is_nafisha = "Nafisha";   //Snake Case
let myNameIsNafisha = "Sultana";      // *Camel Case
let MyNameIsNafisha = "Ilma";      //Pascal Case 

console.log(my_name_is_nafisha);
console.log(myNameIsNafisha);
console.log(MyNameIsNafisha);

// Name cannot start with a number . But number can be used anywhere except first letter .

// const 6fruits = 'Mango'  //This is wrong 
const fruits6 = 'Mango'  //This is right
const fru6its = 'Mango'  // we can also write like this if needed

//   In starting for special character we can only use either _ or $ nothing else 
// Variable is case sensitive

// To add something 
const orangePrice = 15;
const mangoPrice = 20;
const totalPrice = orangePrice + mangoPrice;
console.log(orangePrice);
console.log(mangoPrice);
console.log(totalPrice);

// To add strings 
const firstName = 'Nafisha';
const lastName = ' Sultana';
const fullName = firstName + lastName;
console.log(fullName);

// parseInt = Converts float into Integer

const numberString = '20.78';
const number = parseInt(numberString);
console.log(number)

// parseFloat = converts Integer into Float

const numberString1 = '22.88';
const number1 = parseFloat(numberString1);
console.log(number1)

// Adding 2 float numbers 
// const firstNumber = 0.1;
// const secondNumber = 0.2;
// const totalNumber = firstNumber + secondNumber;
// console.log(totalNumber);    //output 0.30000000000004

// To solve this issue 

const firstNumber = 0.1;
const secondNumber = 0.2;
const total = firstNumber + secondNumber;
const totalTwoDecimal = total.toFixed(2)  //as many digits we will like to see after decimal that will be inside ()
const totalTwoDecimalNumber = parseFloat(totalTwoDecimal);
console.log(totalTwoDecimalNumber);

// Addition