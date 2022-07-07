/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/
let countVowels = function(word){
    let count = 0;
    let vowels = 'aeiou';
    for(let i = 0; i < word.length; i++){
        let char = word[i]
        if(vowels.includes(char)){
            count++
        }
    }
    return count
}


let hasThreeVowels = function(string) {
    // Your code here
    for(let i = 0; i < string.length; i++){
        if(countVowels(string) > 3){
            return true
        }
    }
    return false
};

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false


// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
