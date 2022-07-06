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
