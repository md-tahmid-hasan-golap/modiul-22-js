// function oddEvenNumber(numbers){
//     let sum = 0;
//     for(let number of numbers){
//         console.log(number)
//         sum = sum + number
        
//     }
//     console.log(sum)
// return sum

// }
// const number = [11, 22, 33, 44, 55, 66, 77];
// const total = oddEvenNumber(number)

// function evenNumber (numbers){
//     let array = []
//  for(let number of numbers){
    
//     if(number % 2 === 1){
//         // console.log(number)
//         array.unshift(number)
        
//     }
//  }
//  console.log(array.join())
// }
// const number = [11, 33, 22, 44, 55, 66, 77, 88];
// const result = evenNumber(number)
function evenNumber (numbers){
    let sum = 0;
 for(let number of numbers){
    
    if(number % 2 === 1){
        // console.log(number)
        sum = sum + number;
        console.log(sum)
        
        
    }
 }
 
 
}
const number = [11, 33, 22, 44, 55, 66, 77, 88];
const result = evenNumber(number)