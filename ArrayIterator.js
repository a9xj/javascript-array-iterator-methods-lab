// Find function 
// const arr = ['Salman', 'Ali', 'Saif']

// arr.find((arrs)=>{
// console.log(arrs)
// })

// Map fucntion 
// const numbers = [1,2,5]

// const doubled = numbers.map((number) =>{
//     return number *2 
// })
// console.log(doubled)
// fikter function 

// const numbers = [10,20,30,40]
// const result = numbers.filter((number) =>{
// return number > 20 
// })
// console.log(result)

// const array = ['apple','banana','orange'];

// const mappedArray = array.map((element, index, array) => {
//   return `element is: ${element}, index is: ${index}, array is ${array}`;
// });

// console.log(mappedArray)


const animal = ['chicken', 'goat', 'pig', 'sheap', 'cow']
const oddAnimals = animal.filter((animal, index) => {
    if(index % 2) return animal; 
})
console.log(oddAnimals)