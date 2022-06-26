function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let newArray = []
    for(let i = 1; i < arr.length; i+=2 ){
        let oldValues = arr[i];
        newArray = newArray.concat(oldValues)
    }
    return newArray;
}
// console.log(oddIndices([1,2,3,4]))

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let oddIndicesReversed = []
    for( let i = 1; i < arr.length; i+=2){
        let oldValue = arr[i];
        oddIndicesReversed = oddIndicesReversed.concat(oldValue)
        oddIndicesReversed.reverse();
    }

    return oddIndicesReversed
}
// console.log(oddReverse([1, 2, 3, 4]))

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let powerArray = []
    for (let i = 1; i < arr.length; i *= 2) {
        powerArray.push(arr[i]);
    }
 return powerArray
}

// console.log(secondPower([1, 2, 3, 4, 5, 6, 7, 8]))

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let nthArray = []
    for (let i = 1; i < arr.length; i *= n){
        nthArray.push(arr[i])
    }
    return nthArray
}

// console.log(nthPower([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 4))

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let newArray = []
    for (let i = 0; i < arr.length / 2; i += 1) {
        newArray.push(arr[i])
    }
    return newArray
}

// console.log(firstHalf([1, 2, 3, 4]))

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let newArray = []
   for (let i = arr.length / 2; i >= 1; i--) {
       const element = arr[i];
        newArray.push(element);
   }
   return newArray
}
console.log(secondHalf([1, 2]))
module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
