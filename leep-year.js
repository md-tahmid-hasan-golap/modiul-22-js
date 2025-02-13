function leepYear (year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true
    }
    else if(year % 100 === 0 && year % 400 === 0){
        return true
    }
else {
    return false
}
}

const output = leepYear(2021);
console.log(output)
const output2 = leepYear(2022)
console.log(output2)
const output3 = leepYear(2023)
console.log(output3)
// leepYear(2024)
// leepYear(2025)

function leepYear2(year){
    if(year % 100 === 0 && year % 400 === 0){
        return true
    }
}