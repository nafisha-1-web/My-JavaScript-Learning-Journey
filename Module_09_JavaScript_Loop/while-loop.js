// Syntax

// initialization
// while (condition) {
//     loop body
//     increment/decrement
// }
// let count = 1; //initialization
// while (count<5) {   //condition
//     console.log(count);
//     count++        //increment
// }

// let i = 899;
// while(i<905){
//     console.log("While Loop! " , i);
//     i++;
// }

// // Using Break in While loop

// let count1 = 0;
// while(count1 <=10) {
//     if ( count1 > 4){
//         console.log('Nice!');
//         break;
//     }
//     console.log('Get Out!' , count1);
//     count1++ 
// }

// Using Continue (To skip )

// console.log(' Skipping 5 Now by Using Continue');

// let count2 = 1;
// while( count2 <= 10) {
//     if(count2 === 5){
//         count2++;
//         continue;
//     }
//      console.log(count2);
//      count2++
   

// }

// // Print the numbers from 1 to 10 using a while loop.
// // let j = 1;
// // while(j<=10){
// //     console.log(j);
// //     j++;
// // }

// // Print all even numbers from 1 to 20 using a while loop.
// let j = 1;
// while(j<=20){
//     if(j % 2 ===0){
//          console.log(j);
       
//     }
//     j++;
// }

// Sum of 2 - 50;
console.log('Sum of 2 to 50');

let sum = 0;
let i = 2;
while(i<=50){
    sum= sum + i;
    console.log(sum , i);
    i++;
}