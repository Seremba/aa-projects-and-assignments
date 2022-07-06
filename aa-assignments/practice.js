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
