// To change something inside a object

const person = {
    name : 'Nafisha',
    age : 23,
    gender : 'Female',
    profession : 'Student',
    isSingle : true,
    'home address': 'Dhaka',
}
// console.log(person.age)
// console.log(person['home address'])     //if there is something unusual like this (home address) we have to write it like in []
person.age = 29
person.isSingle = false
console.log(person);        //We can change like this also

const key = 'profession'
console.log(person[key])    //key is a variable here 

// Keys

const keys = Object.keys(person)
console.log(keys)             // we can see all the keys declared in objects

console.log(Object.entries(keys))      //To get values in pair (.entries) -> Array of Array

// Values

const values = Object.values(person)
console.log(values)                 //We can get all the values 

// Delete

delete person.isSingle
console.log(person)


// Nested Object 
console.log('Nested Object')

const school = {
    name : 'MGILID',
    address : 'Mirpur',
    totalStudent : 8000,                          //Here 'school' , 'people' , 'principle' all are object
    people :  {
        principle : {
            Name : 'Jinat Farjana',
            age : 50,
            experience : '25 years'
        }
    }

}

console.log(school.people.principle.age)      //Nested