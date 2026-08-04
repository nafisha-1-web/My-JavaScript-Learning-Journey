// By doing Loop through in object we can get the key values

// for.....in -> object
// for.....of -> array

const numbers = [11, 24, 37, 98,74]
for(const number of numbers){
    console.log(number)
}
const man = {
    name : 'Haemin Sunim',
    profession : "Writer",
    books : ['When things dont go your way ', 'The Things You Can See Only When You Slow Down', 'Love for Imperfect Things']
}
for(const keys in man){
    // console.log(key)
    const value = man[keys]
    console.log(keys , value);
}