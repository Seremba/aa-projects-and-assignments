/***********************************************************************
Write a function `appleCounter(appleObj)` that takes in an object containing a
number of keys that have the word 'apple' contained within them. The `appleCounter`
function will be in charge of returning the number of keys that contain the word
"apple".

**Hint**: you may want to take all the keys and lower case them for easier
searching.


Example:
let obj = { banana: "yay!" };
appleCounter(obj); // => 0

let obj1 = { crabapple: "yum!" };
appleCounter(obj1); // => 1

let obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
appleCounter(obj2); // => 2


let obj3 = {
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};
appleCounter(obj3); // => 3
***********************************************************************/

function appleCounter(appleObj) {
  // your code here
  //save apple word in a variable
  // initialize the counter
  // loop through the object
  // check if the keys word apple in them
  // if yes, increment the counter
  // return the counter
   let counter = 0;
   let containedWord = "apple"
   for( let currentKey in appleObj){
       let lowerCaseKey = currentKey.toLowerCase();
       if(lowerCaseKey.includes(containedWord)){
         counter++
       }
   }
   return counter;
}

let obj3 = {
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};


console.log(appleCounter(obj3)); // => 2
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = appleCounter;
