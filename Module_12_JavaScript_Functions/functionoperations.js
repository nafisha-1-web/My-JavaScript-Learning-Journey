// Parameter: A variable that receives a value in a function.

function sayHello(name){
    console.log('Hello', name , '!')
    // console.log(name)
}

sayHello('araf')

function add(x,y){
    const sum = x + y ;
    console.log("Total value :", sum)
}

add(123,67);

function sub(a,b){
    const sub = a - b;
    console.log("Subtracted Value :", sub)
}

sub(123,23);

function mul(i,ii){
    const mul = i * ii;
    console.log("Multiplied Value:" , mul)
}

mul(5,20);

function div(m,n){
    const div = m/n;
    console.log('Divided Value :', div)
}

div(20,3);

// Multiple

function sumAll(a,b,c,d){
    const sumAll = a+b+c+d;
    console.log("Sum of All is : ", sumAll)
}
sumAll(1,2,5,6);

// Square

function Square(number){
    // return number*number;
    const Square = number*number
    console.log("Value of Square is :" , Square);

}
Square(5);
Square(7);

const money = 25;
Square(money);

function cutHalf(number){
    const half = number/2;
    return half
}
const result = cutHalf(500);
    console.log("The value after cutting half is :" ,result)


function doMath(a,b,c,d) {
    const firstNum = a + b ;
    const secondNum = a - b ;
    const thirdNum = a * b;
    const fourthNum = a /b ;
    // return firstNum;
    return fourthNum;


}
// const finalResult = doMath;
const finalResult = doMath(1,2,3,4)
console.log(" final Result is ", finalResult)


// Even or not 

function isEven (number){
    if(number % 2 === 0 ){
        return true;
    }
    else{
        return false;
    }
}
const resultEven = isEven(59)
console.log("The result is :", resultEven);


// Odd or not 

function isOdd(num){
    if(num % 2 === 1){
        return true;
    }
    else {
        // console.log("This is an even number")

        return false;
    }
    
}
 const resultOdd = isOdd(48)
 console.log("THe result of odd is:" , resultOdd)



//  Return All the Even numbers from Array

const numbers = [11, 23,22,44,67,89,98]

// for(num of numbers){
//     if(num % 2 === 0){
//         console.log(num)
//     }
// }

function evenAre(numbers){
    for (const num of numbers){
        if(num % 2 === 0){
        console.log( "The result is : " ,num)
    }
    }
    
}
 evenAre(numbers);
