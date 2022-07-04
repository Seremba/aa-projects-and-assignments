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
