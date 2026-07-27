<<<<<<< HEAD
const numbers = [12, 23, 34, 45, 56, 67, 78, 89, 90]

const reversed = numbers.reverse()
console.log(reversed);

// Another way using unshift

const friends = ["Nafisha", "Maha", 'Hiya', 'Rodoshi', 'Sumaiya']

const afterReverse = []
for (const friend of friends){
    afterReverse.unshift(friend)
    console.log(afterReverse)

}

// Using for loop only no unshift 

const digits = [10, 11, 21, 13, 41, 15, 61]

for(let i = digits.length - 1 ; i>=0; i--)
    console.log(i, digits[i]);
=======
const numbers = [12, 23, 34, 45, 56, 67, 78, 89, 90]

const reversed = numbers.reverse()
console.log(reversed);

// Another way using unshift

const friends = ["Nafisha", "Maha", 'Hiya', 'Rodoshi', 'Sumaiya']

const afterReverse = []
for (const friend of friends){
    afterReverse.unshift(friend)
    console.log(afterReverse)

}

// Using for loop only no unshift 

const digits = [10, 11, 21, 13, 41, 15, 61]

for(let i = digits.length - 1 ; i>=0; i--)
    console.log(i, digits[i]);
>>>>>>> 9c92693014f4ebce007315c076a1d4dbb67cfa0a
