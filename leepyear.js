function isleepyear(year){
    if(year % 4 === 0){
        return true
    }
else{
   return false
}
}
const output = isleepyear(2021)
console.log(output)
function isleepyear2(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true
    }
else{
   return false
}
}
const output2 = isleepyear3(4000)
console.log(output)
function isleepyear3(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true
    }
    else if (year % 100 === 0 && year % 400 === 0){
        return true
    }
else{
   return false
}
}
const output3 = isleepyear3(2400)
console.log(output3)