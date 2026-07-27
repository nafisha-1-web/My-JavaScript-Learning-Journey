<<<<<<< HEAD
// To add an element in array in the END(Push)

const name =['Ali', 'Araf', 'Ajwad', 'Shawon']
name.push("Ilma")
name.push('Dina')
console.log(name);

// To delete an element from array from the END (Pop)

const number = [11, 22, 33, 44, 55, 66, 77, 88, 99]
// number.pop()    
     //automatically deletes the last item of the array
    //  We can also write like this 
    const firstOut = number.pop()
console.log(number);
// number.pop() 
//this line can also written like this 
const secondOut = number.pop()
console.log(number);
console.log(firstOut , secondOut);

// // To delete an element from the FRONT (shift)
// const fruits = ['Mango', 'Banana', 'Lichi', 'Berry', 'Strawberry']
// console.log(fruits);
// fruits.shift()
// console.log(fruits);

// To add an element in the FRONT (unshift)
const fruits = ['Mango', 'Banana', 'Lichi', 'Berry', 'Strawberry']
console.log(fruits);
fruits.unshift("Guava")
console.log(fruits);

// To check if an element is available in array or not (includes)
const num = [1, 2, 3, 4, 5, 6]
const hasItem = num.includes(5)
const hasItem2 = num.includes(8)
console.log(hasItem , hasItem2);    //includes is case sensitive

// To combine two array elements together (concat)
 const total = fruits.concat(num);
 console.log(total);

//  To combine all elements in an array (join)
// const joined = total.join("")      //Alternate ways
// const joined = total.join(" ")  
const joined = total.join(", ")  
console.log(joined);

// To find out the position of an element in an array (indexOf)

const position = num.indexOf(5);
console.log('The position of 5 is :',position );
// If the number or element we r searching in the array is not available in the array the output will come -1.

// To check the type of an Array (isArray)

console.log(Array.isArray(num));

// Slice (array name.slice(start,end))  to extract any element from array
console.log(fruits);
const slicedArray= fruits.slice(1,5)
console.log(slicedArray);


// Splice (which index to start with , how many index to remove) To remove any element from array

const numbers = ['Mango', 'Jackfruit', 'Berry', 'Lichi', 'Guava', 'Watermelon', 'Strawberry', 'Cherry' ]

const spliced = numbers.splice(2,3)
// console.log(spliced);
console.log(numbers);

// To add something using splice 

const fish = ['Hilasha', 'Rui', 'Katla', 'Pabda', 'Chingri' , 'Loitta']
const parted = fish.splice(1,3,99, 'Salmon')  //Write after the , what to input
console.log(fish);




=======
// To add an element in array in the END(Push)

const name =['Ali', 'Araf', 'Ajwad', 'Shawon']
name.push("Ilma")
name.push('Dina')
console.log(name);

// To delete an element from array from the END (Pop)

const number = [11, 22, 33, 44, 55, 66, 77, 88, 99]
// number.pop()    
     //automatically deletes the last item of the array
    //  We can also write like this 
    const firstOut = number.pop()
console.log(number);
// number.pop() 
//this line can also written like this 
const secondOut = number.pop()
console.log(number);
console.log(firstOut , secondOut);

// // To delete an element from the FRONT (shift)
// const fruits = ['Mango', 'Banana', 'Lichi', 'Berry', 'Strawberry']
// console.log(fruits);
// fruits.shift()
// console.log(fruits);

// To add an element in the FRONT (unshift)
const fruits = ['Mango', 'Banana', 'Lichi', 'Berry', 'Strawberry']
console.log(fruits);
fruits.unshift("Guava")
console.log(fruits);

// To check if an element is available in array or not (includes)
const num = [1, 2, 3, 4, 5, 6]
const hasItem = num.includes(5)
const hasItem2 = num.includes(8)
console.log(hasItem , hasItem2);    //includes is case sensitive

// To combine two array elements together (concat)
 const total = fruits.concat(num);
 console.log(total);

//  To combine all elements in an array (join)
// const joined = total.join("")      //Alternate ways
// const joined = total.join(" ")  
const joined = total.join(", ")  
console.log(joined);

// To find out the position of an element in an array (indexOf)

const position = num.indexOf(5);
console.log('The position of 5 is :',position );
// If the number or element we r searching in the array is not available in the array the output will come -1.

// To check the type of an Array (isArray)

console.log(Array.isArray(num));

// Slice (array name.slice(start,end))  to extract any element from array
console.log(fruits);
const slicedArray= fruits.slice(1,5)
console.log(slicedArray);


// Splice (which index to start with , how many index to remove) To remove any element from array

const numbers = ['Mango', 'Jackfruit', 'Berry', 'Lichi', 'Guava', 'Watermelon', 'Strawberry', 'Cherry' ]

const spliced = numbers.splice(2,3)
// console.log(spliced);
console.log(numbers);

// To add something using splice 

const fish = ['Hilasha', 'Rui', 'Katla', 'Pabda', 'Chingri' , 'Loitta']
const parted = fish.splice(1,3,99, 'Salmon')  //Write after the , what to input
console.log(fish);




>>>>>>> 9c92693014f4ebce007315c076a1d4dbb67cfa0a
