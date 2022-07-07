/* Echo Recall
Write a function echo that takes in a string and console.logs that string "echo-ized". */
function echo(string) {
    // your code here...
    let yelled = '';

    let partOfString = string.toUpperCase() + ' ... ' + string[0].toUpperCase() + string.slice(1)
    let restOfString = ' ... ' + string.toLowerCase()

    yelled = partOfString + restOfString

    console.log(yelled)
  }

  echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"
  echo("hey"); // => prints "HEY ... hey ... hey"
  echo("JUMp"); // => prints "JUMP ... JUMp ... jump"

  /*
 Vowel Counter Recall
Write a function, countVowels(word), that takes in a string word and
returns the number of vowels in the word.
Vowels are the letters "a", "e", "i", "o", "u".
  */

  function countVowels(word) {
    // your code here...
    let count = 0;
    let vowels = 'aeiou'

    for(let i = 0; i < word.length; i++){
        let char = word[i]
        if(vowels.includes(char)){
            count++
        }
    }

    return count
  };

  console.log(countVowels("bootcamp")); // => 3
  console.log(countVowels("apple")); // => 2
  console.log(countVowels("pizza")); // => 2

  /*
 Sum Array Recall
Write a function sumArray(array) that takes in an array of numbers and returns the total sum of all the numbers.
  */
function sumArray(array) {
    // your code here...
    let sum = 0;

    for(let i = 0; i < array.length; i++){
        let num = array[i]
        sum += num
    }

    return sum
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30

/*
Pig Latin Recall
Pig Latin is a fun take on the English language where you move any consonant cluster from the start of the word to the
end of the word; when words begin on a vowel, you simply add "-yay". Vowels are "aeiou".

Write a function pigLatinWord that takes in a word string and translates the word into Pig Latin.
For this problem use the String.slice() method. The slice() method extracts a section of a string and
returns it as a new string, without modifying the original string.

Hint: Remember the String.includes method!
*/

// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

function pigLatinWord(word) {
    // your code here...
    let vowels = 'aeiou';

    if(vowels.includes(word[0])){
        return word + "yay";
    }

    for(let i = 0; i < word.length; i++){
        let letter = word[i]

        if(vowels.includes(letter)){
           let firstPart = word.slice(i)
           let  secondPart = word.slice(0, i)

           return firstPart + secondPart + "ay"
        }
    }
  };

  console.log(pigLatinWord("apple")); //=> "appleyay"
  console.log(pigLatinWord("eat")); //=> "eatyay"
  console.log(pigLatinWord("banana")); //=> "ananabay"
  console.log(pigLatinWord("trash")); //=> "ashtray"

  /*
  My Index Of Recall
Write a function myIndexOf(arr, target) that takes in an array and target value as args.
The function should return the first index where the target is found in the array.
If the target is not found, it should return -1. Solve this without using Array.indexOf.
  */
// your code here
let myIndexOf = function(arr, target){

    for( let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i
        }
    }

    return -1
}

console.log(myIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
console.log(myIndexOf([43, -7, 11, 13], 1)); // -1


/*
Two Sum Recall
Write a function twoSum(arr, target) that accepts an array and a target number as args.
The function should a return a boolean indicating if two distinct numbers of the array add up to the target value.
You can assume that input array contains only unique numbers.
*/

// your code here
let twoSum = function(arr, target){

    for(let i = 0; i < arr.length; i++){
        let el1 = arr[i]

        for(let j = i + 1; j < arr.length; j++){
            let el2 = arr[j]

            let sum = el1 + el2

            if(sum === target){
                return true
            }
        }
    }

    return false
}




console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 3], 11)); // false

/*
Remove Last Vowel Recall
Write a function removeLastVowel(word) that
takes in a string and returns the string with its last vowel removed.
*/


let removeLastVowel = function(word){
    let vowels = 'aeiou'
    for(let i = word.length - 1; i >= 0; i--){
        let char = word[i]

        if(vowels.includes(char)){
            return word.slice(0, i) + word.slice(i + 1)
        }
    }
}


console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'


/*
Least Common Multiple Recall
Write a function leastCommonMultiple(num1, num2) that accepts two numbers as arguments.
The functions should return the smallest number that is divisible by both num1 and num2.
*/
// your code here
let leastCommonMultiple = function(num1, num2){
    for(let i = 1; i <= (num1 * num2); i++){

        if(i % num1 === 0 && i % num2 === 0){
            return i
        }
    }
}


console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10

/*
Uncompress Recall
Write a function uncompress(str) that takes in a "compressed" string as an arg.
A compressed string consists of a character immediately followed by the number of times
it appears in the "uncompressed" form. The function should return the uncompressed version of the string.
See the examples.

Hint: you can use the built-in Number function should convert a numeric string into the number type. For example. Number("4") // => 4

You may assume that the number of times will always be an integer between 0 and 9
*/

// your code here
let uncompress = function(str){
    let string = ''

    for(let i = 0; i < str.length; i += 2){
        let element = str[i]
        let num = Number(str[i + 1])

        for(let j = 0; j < num; j++){
            string += element
        }
    }

    return string
}




console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
// console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
// console.log(uncompress('b1o2t1')); // 'boot'
