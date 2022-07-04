/*  Write a function that takes a location, either "FRONT" or "BACK"
and adds an element to either the front or back of the given array.
If location is anything besides "FRONT" or "BACK", print an error.
Your function should not return anything and should mutate the original array.
(Hint: Look up the JavaScript functions: push/pop/shift/unshift)   */


function addToArray(location, element, arr) {
    // Your code here
        if(location === "FRONT"){
            arr.unshift(element)
        } else if(location === "BACK"){
            arr.push(element)
        } else {
            console.log("error")
        }
}

testArray = [1,2,3]

// addToArray("FRONT", 0, testArray)
// console.log(testArray) // [0,1,2,3]

// addToArray("BACK", 4, testArray)
// console.log(testArray) // [0,1,2,3,4]

// addToArray("MIDDLE", 4, testArray) // "ERROR"
// console.log(testArray) // [0,1,2,3,4]


/*
RANGE
Write a function range(min, max) that takes in two numbers.
The function should return an array containing all numbers from min to max inclusive.
Define this function using function expression syntax.
*/

// your code here
let range = function(min, max){
    let arr = []
    let i = min
    
    while(i <= max){
        arr.push(i)
        i++
    }
    return arr
}


console.log(range(3, 10)); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(range(217, 220)); // [ 217, 218, 219, 220 ]
console.log(range(-5, 1)); // [ -5, -4, -3, -2, -1, 0, 1 ]
console.log(range(10, 3)); // []
