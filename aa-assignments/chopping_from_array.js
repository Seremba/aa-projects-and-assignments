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

/*
Reverse Sentence
Write a function reverseSentence(sentence) that takes in a sentence as an arg.
The function should return a new sentence where the order of the words is reversed.
Note that you should reverse the order among words,
not the order among characters.
*/

// your code here
let reverseSentence = function(sentence){

    let words = sentence.split(' ')
    let reversed = []

    for(let i = words.length - 1; i >= 0; i--){
        let word = words[i]
        // console.log( word)
        reversed.push(word)
    }

    return reversed.join(' ')
}





console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'


/*
Contains Word
Write a function containsWord(sentence, targetWord) that accepts two strings as args.
The function should return a boolean indicating whether the targetWord is found inside of
the sentence. Solve this without using String's indexOf() or includes() methods.
 */

// your code here
let containsWord = function(sentence, targetWord) {

    let words = sentence.split(' ')

    for( let i = 0; i < words.length; i++){
        let word = words[i]
        if(word.toLowerCase() === targetWord.toLowerCase()){
            return true
        }
    }

    return false
}



console.log(containsWord('sounds like a plan', 'like')); // true
console.log(containsWord('They are great', 'they')); // true
console.log(containsWord('caterpillars are great animals', 'cat')); // false
console.log(containsWord('Cast the net', 'internet')); // false

/*
Abbreviate Words
Write a function abbreviateWords(sentence) that takes in a sentence string.
The function should return a new sentence where words that are longer than 4 characters
have their vowels removed.
Hint: Consider creating a helper function to remove all vowels in a string.
*/
// your code here
let removeVowels = function(word){
    let vowels = 'aeiou';
    let newStr = ''
    for(let i = 0; i < word.length; i++){
        let char = word[i]
        if(!vowels.includes(char)){
            newStr += char
        }
    }

    return newStr
}

let abbreviateWords = function(sentence){

    let words = sentence.split(' ')
    let abbreviates = []
    // console.log(words)
    for(let i = 0; i < words.length; i++){

        let word = words[i];

        if(word.length > 4){
            abbreviates.push(removeVowels(word))
        } else {
            abbreviates.push(word)
        }
    }

    return abbreviates.join(' ')
}



console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg

/*
Snake to Camel
Write a function snakeToCamel that takes in a snake_cased string and returns a PascalCased version of the string. snake_case is where each word is separated with underscores (_).
PascalCase is a string where the first char of each word is capital, all other chars lowercase.
*/

// Your code here
let snakeToCamel = function(sentence){
    let words = sentence.split('_')
    // console.log(words)
    let pascals = []
    for(let i = 0; i < words.length; i++){
        let word = words[i]
        let newWord = word[0].toUpperCase() + word.slice(1).toLowerCase()

        pascals.push(newWord)
    }

    return pascals.join('')
}


console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'

/*
Hipsterfy
Write a function hipsterfy(sentence) that takes in a
sentence string and returns the sentence where every word is missing its last vowel.
*/
let removeLastVowel = function(word) {
    let vowels = 'aeiou';

    for(let i = word.length - 1; i >= 0; i--) {
        let char = word[i];
        if (vowels.includes(char)) {
            return word.slice(0, i) + word.slice(i + 1);
        }
    }

    return word;
};

let hipsterfy = function(sentence) {
    let newWords = [];
    let words = sentence.split(' ');

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        newWords.push(removeLastVowel(word));
    }

    return newWords.join(' ');
};

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'


// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//
// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
//
// Can you reduce the problem into helper functions?

let repeatingTranslate = function(sentence) {
    let words = sentence.split(' ');
    let newWords = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length < 3) {
            newWords.push(word);
        } else {
            newWords.push(translateWord(word));
        }
    }
    return newWords.join(' ');
};


let translateWord = function(word) {
    let vowels = 'aeiou';
    let lastChar = word[word.length - 1];
    if (vowels.includes(lastChar)) {
        return word + word;
    }

    let i = word.length - 1;
    while (i >= 0) {
        if (vowels.includes(word[i])) {
            return word + word.slice(i);
        }
        i--;
    }
};

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"

/*
Consonant Cancel
Write a function consonantCancel that takes in a sentence
and returns a new sentence where every word begins with it's first vowel.
*/

let beginWithFirstVowel = function(word){

    let vowels = 'aeiou';

    for(let i = 0; i < word.length; i++){
        let char = word[i]

        if(vowels.includes(char)){
            return word.slice(i)
        }
    }
    return word
}

function consonantCancel(sentence) {
    let words = sentence.split(' ');
    let newWords = [];

    for(let i = 0; i < words.length; i++){
        let word = words[i]
        newWords.push(beginWithFirstVowel(word))
    }

    return newWords.join(' ')
}

console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"

/*
 Same Char Collapse
Write a function sameCharCollapse that takes in a string and returns a collapsed version of the string.
To collapse the string, we repeatedly delete 2 adjacent characters that are the same until there are no such adjacent
characters. If there are multiple pairs that can be collapsed, delete the leftmost pair. For example,
we take the following steps to collapse "zzzxaaxy": zzzxaaxy -> zxaaxy -> zxxy -> zy
*/
function sameCharCollapse(str) {
    let reducible = true;

    while (reducible) {
        let chars = str.split("");
        reducible = false;

        for (let i = 0; i < chars.length - 1; i++) {
            if (chars[i] == chars[i+1]) {
                chars[i] = "";
                chars[i + 1] = "";
                reducible = true;
            }
        }
        str = chars.join("");
    }
    return str;
}

console.log(sameCharCollapse("zzzxaaxy"));  // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv
