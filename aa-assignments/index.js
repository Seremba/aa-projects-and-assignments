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

/*
 Even Numbers
Write a function evenNumbers(max) that takes in a number as an arg. The function should return an array containing all positive, even numbers that are less than max.

Define this function using function expression syntax.
*/

let evenNumbers = function(max){

    let arr = []

    for(let i = 2; i < max; i += 2){
        arr.push(i)
    }

    return arr
}

// or

let even2Numbers = function(max){

    let arr = []

    for(let i = 1; i < max; i++){
        if(i % 2 === 0){
            arr.push(i)
        }
    }

    return arr
}

console.log(evenNumbers(7)); // [ 2, 4, 6 ]
console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]

 /*
 Write a function logBetweenStepper(min, max, step) that takes in 3 numbers as parameters. The function should print out numbers between min and max at step intervals. See the following examples.

Hint: this function only needs to print using console.log it does not need to return.
*/
let logBetweenStepper = function(min, max, step) {

    let i = min;

    while( i < max){

        console.log(i)

        i += step
    }

}

// Examples:
logBetweenStepper(5, 9, 1); // prints out:
5
6
7
8
9


logBetweenStepper(-10, 15, 5)  // prints out:
-10
-5
0
5
10
15

/*
Factors Of
Write a function factorsOf(num) that takes in a number as an arg. The method should return an array containing all positive numbers that are able to divide into num with no remainder.

Define this function using function expression syntax.
*/

// your code here
let factorsOf = function(num){

    let arr = [];

    for(let i = 1; i <= num; i++){

        if(num % i === 0){
            arr.push(i)
        }
    }

    return arr
}






console.log(factorsOf(5)); // [ 1, 5 ]
console.log(factorsOf(8)); // [ 1, 2, 4, 8 ]
console.log(factorsOf(9)); // [ 1, 3, 9 ]
console.log(factorsOf(10)); // [ 1, 2, 5, 10 ]
console.log(factorsOf(24)); // [ 1, 2, 3, 4, 6, 8, 12, 24 ]
console.log(factorsOf(2017)); // [ 1, 2017 ]


/*
Fizz Buzz Array
Write a function fizzBuzz(max) that accepts a number as an arg.
The function should return an array containing all positive numbers
less than max that are divisible by either 3 or 5, but not both.
 */

// your code here
let fizzBuzz = function(max){

    let divisibles = [];

    for(let i = 1; i < max; i++){

        if(i % 3 === 0 && i % 5 !== 0){
            divisibles.push(i)
        } else if(i % 5 === 0 && i % 3 !== 0){
            divisibles.push(i)
        }
    }

    return divisibles
}






console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]
