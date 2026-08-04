// includes

const email = 'nafishasultanailma@gmail.com'


if(email.includes('.Com')){
    console.log('True')
}
else{
    console.log('False')
}

// Start with & Ends with
const fileName = 'student Data.csv'
const TwitterHandle = '@Nafisha'

if(TwitterHandle.startsWith('@') && fileName.endsWith('.csv')){
    console.log("All Set!")
}
else{
    console.log('Do it Properly')
}

// We can also slice string

const text = "I am a student"
console.log(text.slice(1,4))            //(1,4)-> starts with 1 and ends with before 4 that means 3

console.log(text.slice(-2))             //(-2) or something - will give sliced output from backward 

// Concat Connects multiple const together

const firstName = 'Nafisha'
const secondName = 'Sultana'
const thirdName = 'Ilma'

console.log(firstName.concat(' ', secondName).concat(' ' ,thirdName))

// Split -> Split or divide strings

const companyStr = 'Tesla SpaceX Facebook Instagram Twitter LinkedIn'
// const companies = companyStr.split('')      // if we split with '' only then it will split every word separately
// console.log(companies);

// const companyStr = 'Tesla SpaceX Facebook Instagram Twitter LinkedIn'
// const companies = companyStr.split(' ')      // if we give a white space ' ' then it will split when it found whitespace 
// console.log(companies);

const companies = companyStr.split('a')      // if we split with 'a'  then it will split every time it founds a.
console.log(companies);
const againStr = companies.join('')           // Join will add the splitted string together and also convert the array into string again
console.log(againStr)

// Reverse -> 

const quote = 'I will work hard and never give up'
const parts = quote.split('')
console.log(parts)
const reversed = parts.reverse('')
const reversedParts = reversed.join(' ')
console.log(reversedParts)

let reversedParts2 = ' ';
for( reverse of quote){
    reversedParts2 = reverse + reversedParts;
    console.log(reverse , '->' ,  reversedParts2)
}