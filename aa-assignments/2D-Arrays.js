/*
Two Dimensional Sum
Write a function twoDimensionalSum(arr)
that takes in a 2D array of numbers and returns the total sum of all numbers.
*/

// your code here
let twoDimensionalSum = function(arr){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        let subArr = arr[i]
        for(let j = 0; j < subArr.length; j++){
            let num = subArr[j]
            sum += num
        }
    }

    return sum
}


let arr1 = [
    [1, 3],
    [-4, 7, 10],
    [2]
];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [
    [],
    [3, 1, 2],
];
console.log(twoDimensionalSum(arr2)); // 6

/*
Two Dimensional Product
Write a function twoDimensionalProduct(array) that takes in a 2D array of numbers as an argument.
The function should return the total product of all numbers multiplied together.
*/
// your code here
let twoDimensionalProduct = function(array){

    let product = 1;

    for(let i = 0; i < array.length; i++){
        let miniArray = array[i]

        for(let j = 0; j < miniArray.length; j++){
            let num = miniArray[j]
            product *= num
        }
    }

    return product
}





console.log(twoDimensionalProduct([
    [6, 4],
    [5],
    [3, 1]
])); // 360


console.log(twoDimensionalProduct([
    [11, 4],
    [2]
])); // 88
