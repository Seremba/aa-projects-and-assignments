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

/*
Write a function maxInMatrix(matrix) that takes in a 2-dimensional array (matrix) and returns
the largest value in the matrix. The matrix contains at least one value.
*/
function maxInMatrix(matrix) {
    // your code here...
    let highest = null
    for(let i = 0; i < matrix.length; i++){
        let row = matrix[i]

        for(let j = 0; j < row.length; j++){
            let num = row[j]
            let nextNum = row[ j + 1]
            if(num < nextNum){
                highest = nextNum
            }
        }
    }

    return highest
  }


  matrix = [[11,  2,-99],
            [20, 19, 10],
            [47, 72, 56]]

  console.log(maxInMatrix(matrix)); // 72

  /*
  Max in Columns
 Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix) and returns an array containing
 the maximum value in each column. The array length should be equal to the number of columns,
 such that returnArray[i] is equal to the max value in the ith column.
  */


function maxColumn(matrix) {
    const height = matrix.length;
    const width = matrix[0].length;

    const maxColumns = [];
    for (let col = 0 ; col < width ; col++) {
      let colMax = matrix[0][col];
      for (let row = 1 ; row < height ; row++) {
          if (matrix[row][col] > colMax) {
              colMax = matrix[row][col];
          }
      }
      maxColumns.push(colMax);
    }


    return maxColumns;
  }

  matrix = [[ 5,  9, 21],
            [ 9, 19,  6],
            [12, 14, 15]]

  console.log(maxColumn(matrix)); // [12, 19, 21]

  /*
  Zip
Write a function zip that accepts two arrays as arguments. The function should return a two
dimensional array with subarrays of length 2 that contain elements at corresponding indices
from the input arrays. You may assume that the input arrays have the same length.
  */

// Your code here
let zip = function(arr1, arr2){
    let array = [];

    for( let i = 0; i < arr1.length; i ++){
        let el1 = arr1[i]
        let el2 = arr2[i]
        array.push([el1, el2])
    }

    return array
}

console.log(zip([1, 2, 3, 4], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, 'vier' ] ]

console.log(zip(['eins', 'zwei', 'drei'], [1, 2, 3]));
// [ [ 'eins', 1 ], [ 'zwei', 2 ], [ 'drei', 3 ] ]

console.log(zip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]

/*
Zany Zip
Write a function zanyZip that accepts two arrays as arguments.
The function should return a two dimensional array with subarrays of length 2 that contain
elements at corresponding indices from the input arrays.
If one of the arrays is shorter than the other, then substitute null for the missing elements.
*/
// Your code here
let zanyZip = function( array1, array2){

    let array = [];

    for(let i =0; i < array1.length || i < array2.length; i++){

        let el1 = array1[i]
        let el2 = array2[i]

        if(el1 === undefined){
            el1 = null
        }

        if(el2 === undefined){
            el2 = null
        }

        array.push([[el1, el2]])
    }

    return array
}


console.log(zanyZip([1, 2], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

console.log(zanyZip([1, 2, 3, 4], ['eins', 'zwei', 'drei']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

console.log(zanyZip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]

/*
Matrix Addition
A 2-dimensional array is also known as a "matrix".
Write a function matrixAddition that accepts two matrices as arguments.
The two matrices are guaranteed to have the same "height" and "width".
The function should return a new matrix representing the sum of the two arguments.
To add matrices, we add the values at the same positions.
*/

// Your code here
let matrixAddition = function(m1, m2){
    let sum = []

    for(let row = 0; row < m1.length; row++){
        let subArray = [];
        for(let col = 0; col < m1[0].length; col++){
            subArray.push(m1[row][col] + m2[row][col])
        }

        sum.push(subArray);
    }

    return sum
}


let matrixA = [[2,5], [4,7]]
let matrixB = [[9,1], [3,0]]
let matrixC = [[-1,0], [0,-1]]
let matrixD = [[2, -5], [7, 10], [0, 1]]
let matrixE = [[0 , 0], [12, 4], [6,  3]]

console.log(matrixAddition(matrixA, matrixB)); // [[11, 6], [7, 7]]
console.log(matrixAddition(matrixA, matrixC)); // [[1, 5], [4, 6]]
console.log(matrixAddition(matrixB, matrixC)); // [[8, 1], [3, -1]]
console.log(matrixAddition(matrixD, matrixE)); // [[2, -5], [19, 14], [6, 4]]
