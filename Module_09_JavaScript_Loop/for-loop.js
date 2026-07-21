// Syntax of For LOOP 

// for( initialization ; condition ; modification/value adjustment/increment or decrement){
//        console.log("output");
// } 

for(let count = 0; count < 10 ; count++ ){   //we can also use i instead of count
    console.log('Done!')
}

for(let count = 0; count < 100 ; count++ ){
    console.log('Done!')
}
for(let i = 0; i < 10 ; i++ ){
    console.log('Done!')
}

for(let i = -5; i < 10 ; i++ ){
    console.log(i)
}

for(let i = -5; i < 10 ; i = i + 2 ){
    console.log(i)
}

console.log("New");

for(let i = 2; i<=20; i = i + 2){
    console.log(i);
}

// Sum using for loop 
console.log("Sum");

let sum = 0;
for(let i = 0 ; i <=10 ; i++){
     sum = sum + i;
    console.log(sum , i);
}


// Decrement using For Loop 

console.log("Decrement with for loop...")

for(let i = 10; i >= 0 ; i-- ){
    console.log(i);
}

for(let i = 10; i >= 0 ; i = i - 2 ){
    console.log(i);
}

// Table using for loop 

console.log('Table of 5');

const number = 5;

for(let i = 1; i <= 10; i++){
    console.log(number, 'X' ,i , '=', i*number);
}

// Using Break in for loop

for(let i = 1; i<= 10; i++){
    if(i > 5){
        break;
    }
    console.log(i);
}

// Using Continue (To skip )

console.log('Using Continue');

for(let i = 1; i<=10 ; i++){
    if(i ===2){
        continue;
    }
        console.log(i);
}

console.log(' Skipping 5 Now by Using Continue');

for(let i = 1; i<=10 ; i++){
    if(i ===5){
        continue;
    }
        console.log(i);
}
