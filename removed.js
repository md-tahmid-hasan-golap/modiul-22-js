// function arrayNoDublicate(array){
//     let item = [];
//     for(let num of array){
//         // console.log(num)
//         if(item.includes(num) === false){
//         item.push(num)
//         item.unshift(num)
       
//         }
        
//     }
// // return item
// console.log(item)
// }

// const  number = [10, 33, 10, 44, 33, 9, 33];
// const output = arrayNoDublicate(number);
// console.log(output)

const myFriends = ["basar", "golap", "basar", "imrul", "golap"]

function noDouble(array){

    // console.log(array)
    let double = [];

    for (let friend of array){
        if(double.includes(friend) === false){
            double.push(friend)
        }
        
    }
    return double
}

const output = noDouble(myFriends);
console.log(output)