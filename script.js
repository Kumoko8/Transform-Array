
var map = function(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        returnArray = fn(arr[i], i)        
    }
   
    
    return returnArray
};
function plusOne(n) {
    return n +1;
}
const inputArr = [1,2,3]

const result = map(inputArr, plusOne)
console.log(result);