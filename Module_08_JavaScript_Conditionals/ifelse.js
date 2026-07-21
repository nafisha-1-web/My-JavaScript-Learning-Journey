
const a = 100;
const b = 150;
if(a == b){
    console.log('a is equal to b')
}
else{
    console.log('a is not equal to b')
}
// -----------------------------------------------


const mango = 100;
const strawberry = 800;
if(mango>strawberry){
    console.log('Hurry up, Buy it!')
}
else{
    console.log('Mango is tastier than Strawberry')
}

// ------------------------------------------------

const x = 100;
const y = 250;
if(x !== y){
    const z = x + y ;
    console.log('Value of z = ' + z)
}
else{
    console.log('They are not equal')
}

// if else condition with multiple conditions 

const salary = 50000;
const hasCar = true;
const hasHouse = true;

// & operator

if(salary>60000 && hasCar == true && hasCar == true ){  
    console.log('Congratulations!!Your are selected.')
}
else{
     console.log('Get Out!!')
}

// || (OR Operator)

const looksGood = false;
const knowEnglish = true;
const weight = 50;

if(weight<50 || looksGood == true){
    console.log("Perfect!")
}
else{
    console.log('Will let u know soon!')
}

// & and || Operation together

if((weight<50 && !looksGood) || knowEnglish){
    console.log("Perfect!")
}
else{
    console.log('Will let u know soon!')
}

// ------------------------------------------
// Multi level if else 

    const marks = 75;

    if( marks > 80) {
        console.log('A+');
    }
    else if( marks > 70) {
        console.log('B+');
    }
    else if ( marks > 60) {
        console.log('C+');
    }
    else if( marks > 50) {
        console.log('D+');
    }
    else {
        console.log('Fail')
    }


    // Nested if else

const age = 19;
const livesIn = "Dhaka";
const haveDrivingLicence = true;

if (age >= 18) {
    if (haveDrivingLicence) {
        if (livesIn === "Dhaka") {
            console.log("U can drive");
        } else {
            console.log("U cannot");
        }
    }
}

 // Ternary Operator (Shortcut)
//  condition ? if true : If false ;

const quantity = 20;
quantity>=18 ? console.log('Please VOTE!') : console.log('Grow Up!')

let tShirtprice = 500;
// let isLeader = true;
let isLeader = false;


// if(!isLeader){ (That means isLeader = false ) // Logical not operator
if(isLeader){
    console.log('Free')
}
else{
    tShirtprice = tShirtprice + 100;
    
}
console.log('price is :', tShirtprice);

// Ternary for this one 
// 'condition' ? 'true' : 'false'

tShirtprice = isLeader ? 0 : tShirtprice + 100;

console.log('Price now : ' , tShirtprice);

