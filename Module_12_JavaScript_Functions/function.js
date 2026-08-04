// Function: A reusable block of code that performs a specific task.
// Parameter: A variable that receives a value in a function.
// Argument: The actual value passed to a function.
// Return: Sends a value back from a function and ends its execution.
// Callback Function: A function passed as an argument to another function.


// Function Declaration

function OpenTheGate(){
    console.log('Stand up');
    console.log("Walk towards the gate");
    console.log('See who is here');
}

function goToSchool(){
    console.log("Get up & go!");
}

// Call function 

OpenTheGate();              //We have to call it to see the output
goToSchool();

// Function Syntax
// Declare Function

function sum(x,y){                       //(x,y) here is parameter
    const result = x + y;
    return result;                        //inside {} is Argument
}
// Calling Function

const total = sum(4,8);
console.log(total)
