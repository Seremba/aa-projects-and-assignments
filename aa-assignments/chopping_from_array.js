/*
Remove From Array Research
Write a function that takes a location, either "FRONT" or "BACK" and removes the element at either
the front or back of the given array. If location is anything besides "FRONT" or "BACK", print an
error. Your function should not return anything and should mutate the original array.
(Hint: Look up the JavaScript functions: push/pop/shift/unshift)
 */


function removeFromArray(location, arr) {
    // Your code here

        if(location === "FRONT") {

            arr.shift()
        } else if(location === "BACK"){
            arr.pop()
        } else {
            console.log("error")
        }
}

testArray = [0,1,2,3,4]

removeFromArray("FRONT", testArray)
console.log(testArray) // [1,2,3,4]

removeFromArray("BACK", testArray)
console.log(testArray) // [1,2,3]

removeFromArray("MIDDLE", 4, testArray) // "ERROR"
console.log(testArray) // [1,2,3]


/*
Popper
Write a function popper(array, num) that takes in an array and a number as args. The function
should remove the last num elements from the array, mutating the original array. The function
should return a new array containing the elements that were removed.

Define this function using function expression syntax
*/

let popper = function(array, num) {
    let removedElArray = [];

    for (let i = 0; i < num; i++) {
        let el = array.pop();
        removedElArray.push(el);
    }

    return removedElArray;
};

let arr1 = ['a', 'b', 'c', 'd', 'e'];
console.log(popper(arr1, 2)); // [ 'e', 'd' ]
console.log(arr1); // [ 'a', 'b', 'c' ]

let arr2 = ['kale', 'spinach', 'collard greens', 'cabbage'];
console.log(popper(arr2, 1)); // [ 'cabbage' ]
console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]


/*
Rotate Right
Write a function rotateRight(array, num) that takes in an array and a number as args.
The function should return a new array where the elements of the array are rotated to the right
num times. The function should not mutate the original array and instead return a new array.

Define this function using function expression syntax.

HINT: you can use Array's slice() method to create a copy of an array
*/
// your code here
let rotateRight = function(array, num){
    let newArray = array.slice()

    for(let i = 0; i < num; i++){
        let el = array.pop()
        newArray.unshift(el)
    }

    return newArray
}



let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]

/*
Rotate
Write a function rotate(array, num) that takes in an array and a number as args.
When the num is positive, the elements of the array should be rotated to the right.
When the num is negative, the elements of the array should be rotated to the left.
The function should mutate the original array.

Define this function using function expression syntax.
*/

// your code here
let rotate = function(array, num) {
    if(num > 0){
        for(let i = 0; i < num ; i++){
            let el = array.pop()
            array.unshift(el)
        }
    } else if(num < 0){
        for(let i = 0; i < -(num); i++){
            let el = array.shift()
            array.push(el)
        }
    }
}



 ;
rotate(['a', 'b', 'c', 'd', 'e'], 2);
console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]


rotate(['wombat', 'koala', 'opossum', 'kangaroo'], -1);
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]

/*
Initials
Write a function initials(name) that accepts a full name as an arg.
The function should return the initials for that name.
*/

// your code here
let initials = function(name){
    let parts = name.split(' ');
    let fisrtLetters = [];

    for(let i = 0; i < parts.length; i++){
        let part = parts[i]
        fisrtLetters.push(part[0].toUpperCase())
    }

    return fisrtLetters.join('')
}



console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'

/*
Longest Word
Write a function longestWord(sentence) that takes in a sentence string as an argument.
The function should return the longest word in the sentence.
If there is more than one "longest word", return the first of these instances.
*/
let longestWord = function(sentence){

    let words = sentence.split(' ');
    let longestWord = '';

    for(let i = 0; i < words.length; i++){
        let word = words[i]
        if(word < longestWord){
            longestWord = word;
        }
    }

    return longestWord;
}


console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''
