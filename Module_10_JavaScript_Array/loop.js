// To show array elements separately with loop (For Loop)

const flowers = ['Rose', 'Lily', 'Sunflower', 'Marigold', 'Tulip']

for(const name of flowers){
    console.log('Name of Flowers :', name);
}

// For loop option 2

const numbers = [12, 18, 17, 22, 45, 87, 99]
const length = numbers.length;
for(let i = 0; i< numbers.length ; i++){
    console.log('index value', i);
    const item = numbers[i];     //const item = numbers[0/1/2/3/4/....]
    console.log('Value of item is :' , item);
}


// while loop

const mark = [98, 92, 56, 78, 85, 54, 97]
let i = 0;
while(
    i < mark.length){
        const item = mark[i]
        console.log("Marks for index",i , "is : ", item)
        i++
    }


