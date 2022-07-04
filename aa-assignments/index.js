// ADD TO THE ARRAY CHALLENGES

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


/*
Pit Pat
Write a function pitPat(max) that accepts a number as an arg. The function should
return an array containing all positive numbers
less than or equal to max that are divisible by either 4 or 6, but not both.
 */

// your code here
let pitPat = function(max){

    let divisibles = []

    for(let i = 1; i <= max; i++ ){

        if(i % 2 === 0 && i % 6 !== 0){
            divisibles.push(i)
        } else if(i % 6 === 0 && i % 2 !== 0){
            divisibles.push(i)
        }
    }

    return divisibles
}


console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]

/*
Double Sequence
Write a function doubleSequence that accepts a base and a length as arguments.
The function should return an array representing a sequence that contains "length" elements.
The first element of the sequence is always the "base",
the subsequent elements can be generated by doubling the previous element of the sequence.
*/

// Your code here
let doubleSequence = function(base, length){
    if(length === 0) {
        return [];
    }
    let seq = [base];

    while(seq.length < length) {
        let currentSequence = seq[seq.length - 1];
        let nextSquence = currentSequence * 2;
        seq.push(nextSquence);
    }

    return seq
}

console.log(doubleSequence(7, 3));  // [7, 14, 28]
console.log(doubleSequence(3, 5));  // [3, 6, 12, 24, 48]
console.log(doubleSequence(5, 3));  // [5, 10, 20]
console.log(doubleSequence(5, 4));  // [5, 10, 20, 40]
console.log(doubleSequence(5, 0));  // [ ]

/*
 Triple Sequence
Write a function tripleSequence that takes in two numbers, start and length.
The function should return an array representing a sequence that begins with start
and is length elements long. In the sequence, every element should be 3 times the
previous element. Assume that the length is at least 1.
*/

function tripleSequence(start, length) {
    // your code here
    if( length === 0){
        return [];
    }

    let seq = [start];

    while(seq.length < length){
        let currentSeq = seq[seq.length - 1];
        let nextseq = currentSeq * 3;
        seq.push(nextseq)
    }

    return seq
}

console.log(tripleSequence(2, 4)); // [2, 6, 18, 54]
console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]

/*
Unique
Write a function unique that accepts an array as an argument.
The function should return a new array containing elements of the input array,
without duplicates.
*/

// your code here
let yeller = function(words){

    let yell = []
    for(let i = 0; i < words.length; i++){

        let word = words[i];
        let yelledWord = word.toUpperCase();
        yell.push(yelledWord)
    }

    return yell
}




console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]

/*
Tripler
Write a function tripler(nums) that takes in an array as an arg.
The function should return a new array containing three times every number of the original array.
*/
// your code here
let tripler = function(array){

    let triples = [];
    for(let i = 0; i < array.length; i++){
        let element = array[i]
        let tripleNumber = element * 3
        triples.push(tripleNumber)
    }

    return triples
}





console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]

/*
Long Words
Write a function longWords(words) that takes in an array of words.
The function should return an array containing only the words that are longer than 5 characters.
*/

// your code here
let longWords = function(words) {

    let newWords = [];

    for(let i = 0; i < words.length; i++){
        let word = words[i]
        if(word.length > 5){
            newWords.push(word)
        }
    }

    return newWords
}


console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]


/*
Write a function chooseyEndings that accepts an array of words and a suffix string as arguments.
The function should return a new array containing the words that end in the given suffix.
If the value passed in is not an array, return an empty array. HINT: There are built in JavaScript functions that will help with determining if a strings ends a certain way.
Go see if you can find it on MDN!
*/

// Your code here
let chooseyEndings = function(words, str){

    let sufixArray = []

    for(let i = 0; i < words.length; i++){
        let word = words[i]

        if(word.endsWith(str)){
            sufixArray.push(word)
        }
    }
    return sufixArray
}


console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'ly'));
// [ 'family', 'fly', 'timidly' ]

console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'nd'));
// [ 'hound', 'bond' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'icity'));
// [ 'simplicity', 'felicity' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'ily'));
// [ ]

console.log(chooseyEndings(17, 'ily'));
// [ ]

/*
Common Factors
Write a function commonFactors that accepts two numbers as arguments. The function should return an
array containing positive numbers that are able to divide both arguments.
*/

// Your code here
let commonFactors = function(num, num2){

    let arr = []
    for(let i = 1; i <= num; i++){
        if(num % i === 0 && num2 % i === 0){
            arr.push(i)
        }
    }

    return arr
 }

 console.log(commonFactors(50, 30));            // [1, 2, 5, 10]
 console.log(commonFactors(8, 4));              // [1, 2, 4]
 console.log(commonFactors(4, 8));              // [1, 2, 4]
 console.log(commonFactors(12, 24));            // [1, 2, 3, 4, 6, 12]
 console.log(commonFactors(22, 44));            // [1, 2, 11, 22]
 console.log(commonFactors(7, 9));              // [1]


 /*

 Adjacent Sums
Write a function adjacentSums that accepts an array of numbers as an argument. The function
should return a new array containing the sum of each pair of elements in the input array.
 // Your code here */
let adjacentSums = function(arr){

    let sums = [];

    for(let i = 0; i < arr.length -1; i++){
        let el = arr[i];
        let nextEl = arr[i + 1]
        let sum = el + nextEl
        sums.push(sum)
    }

    return sums
}

console.log(adjacentSums([3, 8, 7, 1]));        // [ 11, 15, 8 ]
console.log(adjacentSums([10, 5, 4, 3, 9]));    // [ 15, 9, 7, 12 ]
console.log(adjacentSums([2, -3, 3]));          // [-1, 0]

/*
Fibonacci Sequence
Write a function fibonacciSequence that accepts a number as an argument.
The function should return an array representing the fibonacci sequence up to the given length.
The first and second numbers of the sequence are 1 and 1.
To generate subsequent numbers of the sequence, we take the sum of the previous two numbers of the sequence.
*/

// Your code here
let FibonacciSequence = function(length) {

    if(length === 0){
        return [];
    } else if(length === 1){
        return [1]
    }

    let seq = [1, 1]

    while(seq.length < length){
        let lastValue = seq[seq.length - 1]
        let secondLastvalue = seq[seq.length - 2]
        let next = lastValue + secondLastvalue

        seq.push(next)
    }

    return seq
}


console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence(0));  // [ ]
console.log(fibonacciSequence(1));  // [ 1 ]
console.log(fibonacciSequence(2));  // [ 1, 1 ]

/*

Pick Primes
Write a function pickPrimes that takes in an array of numbers and
returns a new array containing only the prime numbers.
 */

let isPrime = function(num){
    if(num < 2){
        return null
    }

    for(let i = 2; i < num; i++){

        if(num % i === 0){
            return false
        }
    }

    return true
}

function pickPrimes(array) {
    // your code here
    let primes = [];

    for(let i = 0; i < array.length; i++){
        let el = array[i]
        if(isPrime(el)){
            primes.push(el)
        }
    }

    return primes
}



console.log(pickPrimes([2, 3, 4, 5, 6]));  // [2, 3, 5]
console.log(pickPrimes([101, 20, 103, 2017]));  // [101, 103, 2017]

/*
Greatest Factor Array
Write a function greatestFactorArray that takes in an array of numbers and returns a new array
where every even number is replaced with it's greatest factor.
A greatest factor is the largest number that divides another with no remainder. For example,
the greatest factor of 16 is 8. (For the purpose of
this problem we won't say the greatest factor of 16 is 16, because that would be too easy).
*/
function greatestFactorArray(array) {
    // your code here
    let newArray = [];

    for(let i = 0; i < array.length; i++){
        let el = array[i]
        if(el % 2 === 0){
            newArray.push(greatestFactor(el))
        } else {
            newArray.push(el)
        }
    }

    return newArray
}

let greatestFactor = function(el) {

    for(let i = el-1; i >= 0; i--){
        if(el % i === 0){
            return i
        }
    }
}

console.log(greatestFactorArray([16, 7, 9, 14])); // [8, 7, 9, 7]
console.log(greatestFactorArray([30, 3, 24, 21, 10])); // [15, 3, 12, 21, 5]

/**
 Summation Sequence
A number's summation is the sum of all positive numbers less than or equal to the number.
For example: the summation of 3 is 6 because 1 + 2 + 3 = 6, the summation of 6 is 21 because 1 + 2 + 3 + 4 + 5 + 6 = 21.
Write a function summationSequence that takes in two numbers: start and length. The function should return an array containing length total elements. The first number of the sequence should be the start number. At any point, to
generate the next element of the sequence we take the summation of the previous element. You can assume that length is not zero.
 */

let summation = function(num){
    let sum = 0;
    for(let i = 1; i <= num; i++){
        sum += i
    }

    return sum
}

console.log(summation(6))
function summationSequence(start, length) {
    // your code here
    if(length === 0) {
        return []
    }

    let seq = [start]

    while(seq.length < length){
        let currentNumber = seq[seq.length - 1]
        let next = summation(currentNumber)
        seq.push(next)
    }

    return seq
}

console.log(summationSequence(3, 4)); // [3, 6, 21, 231]
console.log(summationSequence(5, 3)); // [5, 15, 120]
