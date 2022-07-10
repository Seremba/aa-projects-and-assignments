/*
suppose you have the following function for abbreviating
words in a sentence. If a word in the sentence is longer than 3 characters,
shorten it to be three characters without
any vowels (i.e. "Hello World!" => "Hll Wrl").


const VOWELS = 'aeiou';

const abbreviateWords = function(sentence) {
  const words = sentence.split(' ');

  for (let wordIdx = 0; wordIdx < words.length; wordIdx++) {
    const word = words[wordIdx];
    if (word.length > 3) {
      let newWord = "";
      let charIdx = 0;

      while (charIdx < word.length && newWord.length < 3) {
        let char = word[charIdx];
        if (!VOWELS.includes(char)) {
          newWord += char;
        }
        charIdx++;
      }

      words[wordIdx] = newWord;
    }
  }

  return words.join(' ');
};


console.log(abbreviateWords("Hello World!")); // Hll Wrl

*/

/*
The above solution to the code is so lengthy and hard to read, but it can be broken down into at least three steps
1) separate the sentence into words,change the words then return it
2)For each word, change the word if the length of the word is greater than 3
3)If the length of the word is greater than 3, change the word to have a maximum length of 3 without any vowels

Each of these steps is doing different things and can be extracted into its own function

the refactored version looks like this
*/
const VOWELS = 'aeiou';

const changeWord = function(word) {
    let newWord = "";
    let charIdx = 0;

    while (charIdx < word.length && newWord.length < 3) {
      let char = word[charIdx];
      if (!VOWELS.includes(char)) {
        newWord += char;
      }
      charIdx++;
    }
    return newWord;
  }

  const abbreviateWord = function(word) {
    if (word.length > 3) {
      return changeWord(word);
    }
    return word;
  }

  const abbreviateWords = function(sentence) {
    const words = sentence.split(' ');

    for (let wordIdx = 0; wordIdx < words.length; wordIdx++) {
      const word = words[wordIdx];
      words.splice(wordIdx, 1, abbreviateWord(word));
    }

    return words.join(' ');
  };
