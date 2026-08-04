// WAys to declare string 
const player = 'Messi'

const name = "Araf"
console.log(name[3]);    //Index of String

const flower = `Water Lily`

console.log(player.length);
console.log(flower.length);
console.log(flower[0]);
console.log(flower[1]);
flower

const numbers = [10, 4, 55, 67, 89]
// console.log(numbers[1]);
numbers[1] = '8';
console.log(numbers);   
//We can change the array like this but we can not change String like this
// Thats why it called "Immutable" which can't change


// Upper Case & Lower Case

const subject = 'CheMiStry'
const book = 'chemistry'
// Its not same because strings are case sensitive 

console.log(subject.toLowerCase())  //It will turn the whole string into lower case

const emailUserProvider = 'nafisha@gmail.com'
const UserDatabaseInfo = 'Nafisha@gmail.com'

if(emailUserProvider.toLowerCase()==UserDatabaseInfo.toLowerCase()){
    console.log(' Welcome');
}

else{
    console.log('Not Matched')
}

// To remove whiteSpace
const person = "   Nafisha   ";

//  console.log(person.trim())          // .trim() to trim whitespace

console.log(person.trim().toUpperCase())   // We can also use 2 or more together