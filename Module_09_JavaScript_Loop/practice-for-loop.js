
// 1. Print the numbers from 1 to 10.
console.log('1 to 10');

for(let i = 1; i <=10; i++){
    console.log(i);
}
// 2. Print the numbers from 10 to 1 (reverse order).
console.log('10 to 1 reverse')

for(let i = 10; i >=1 ; i--){
    console.log(i);
}

// 3. Print all even numbers from 1 to 20.
console.log('Even numbers from 1 to 20')

// let number = 0;
for(let i = 1; i <=20; i++ ){
    if(i % 2 == 0){
         console.log(i);
    }
}

// 4. Print all odd numbers from 1 to 20.
console.log('Odd Numbers from 1 to 20');


for(let i = 1; i <=20; i++ ){
    if(i % 2 !== 0){
         console.log(i);
    }
}

// 5. Print the multiplication table of 5.
console.log('Table of 5');


const number = 5;

for(let i = 1 ; i <= 10 ; i++){
    console.log (number , 'x', i ,'=', i * number);
}

// 6. Print the numbers from 50 to 100.
console.log('Numbers from 50 to 100');


for(let i = 50 ; i <= 100 ; i++){
    console.log(i);
}

// 7. Print the numbers from 100 to 0, decreasing by 10 each time.

console.log('100 to 0 decreasing 10 each time');


for(let i = 100 ; i>=0 ; i = i - 10 ){      //shorthand  i -= 10
    console.log(i);
}

// 8. Print all numbers from 1 to 30 that are divisible by 3.
console.log('1 to 30 divisible by 3');

for(i=1; i<=30 ; i++){
    if(i % 3 == 0){
        console.log(i);
    }
}

// 9. Print all numbers from 1 to 50 that are divisible by 5.
console.log('1 to 50 divisible by 5');


for(i=1; i<=50 ; i++){
    if(i % 5 == 0){
        console.log(i);
    }
}

// 10. Find and print the sum of the numbers from 1 to 10.
console.log('Sum of 1 to 10');


let sum = 0;
for(i=1; i<= 10 ; i ++) {
    sum = sum + i;
    console.log(sum , i);
}

// 11. Count how many even numbers are between 1 and 100.
console.log('Counting how many even numbers between 1 to 100');


let count = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        count++;
    }
}

console.log(count);

// 12. Print the square of each number from 1 to 10.

console.log('Square if each number 1 to 10');
for(i = 1 ; i<= 10 ; i++){
        console.log(i **2);
    }

    // 13. Print the numbers from 1 to 20, but skip 10.
    console.log('1 to 20 skipping 10');
    let count1 = 10;
    for(let i = 1 ; i<=20 ; i++){
        if(i == 10){
            continue;                //to skip 
        }
        console.log(i);
    }

    // 14. Print all numbers from 1 to 50 that are divisible by 2 and 5.

    console.log('1 to 50 that are divisible by 2 and 5');

    
    for(let i = 1 ; i<= 50; i++){
        let condition1 = i % 2 == 0;
    let condition2 = i % 5 == 0;

        if(condition1 && condition2){

            console.log(i);
        }
    }

    // 15. Print the first 10 multiples of 7.
    console.log('first 10 multiplies of 7');

    const number1 = 7;

for(let i = 1 ; i <= 10 ; i++){
    console.log ( i * number1);
}