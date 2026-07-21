// Question 01 --------------------------------------

const price1 = 100;
const price2 = 200; 

if(price1 == price2 ){
    console.log('Same Same ')
}
else{
    console.log("Not same ")
}
// ---------------------------------------
if(price1 === price2 ){
    console.log('Same Same ')
}
else{
    console.log("Not same ")
}
// --------------------------------------------
if(price1 != price2 ){
    console.log('Same Same ')
}
else{
    console.log("Not same ")
}

// --------------------------------------------
if(price1 !== price2 ){
    console.log('Same Same ')
}
else{
    console.log("Not same ")
}
// -------------------------------
if(price1 > price2 ){
    console.log('Same Same ')
}
else{
    console.log("Not same ")
}
// ---------------------------------
if(price1 < price2 ){
    console.log('Same Same ')
}
else{
    console.log("Not same ")
}
// -------------------------------------
if(price1 >= price2 ){
    console.log('Same Same ')
}
else{
    console.log("Not same ")
}
// -------------------------------
if(price1 <= price2 ){
    console.log('Same Same ')
}
else{
    console.log("Not same ")
}

// Question 02 -----------------------------------------

const Quantity = 10;
if(Quantity>= 5){
    console.log('Stock Available')
}
if(Quantity == 0){
    console.log('Stock Out')
} 

// -------------------------------------------------------

const year = 2020;
if(year % 4 === 0){
    console.log('Leap Year')
}

// --------------------------------------------------------

const isAdmin = true;
const isLoggedIn = true;

if(isLoggedIn && isAdmin){
    console.log('Admin Dashboard')
}
if(!isAdmin && isLoggedIn){
    console.log('User Dashboard')
}
if(!isLoggedIn){
    console.log('Please Log In ')
}
// else{
//     console.log('Sign Up')
// }

// -----------------------------------------------

// Determine a number is Even or odd by using ternary operator 

const mark = 14;
mark%2 == 0 ? console.log('Even') : console.log('Odd') 


