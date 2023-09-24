var map = function(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        returnArray = fn(arr[i], i)        
    }
    
    return returnArray
};