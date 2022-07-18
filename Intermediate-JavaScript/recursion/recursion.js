// dump function is called within its function. That is recursion in action
function gentlyUnpackFruit(contents) {
    console.log("Your " + contents + " have been unpacked!");
  }

  function dump(crate) {
      if (crate.content_type === "crate") {
          dump(crate.contents);
      } else if (crate.content_type === "fruit") {
          gentlyUnpackFruit(crate.contents);
      }
  }


// using default parameters to make flags to a function
function sum(nums, verbose = false) {
    let total = 0;
    for (let i = 0 ; i < nums.length ; i++) {
        if (verbose) {
            console.log(total + " + " + nums[i] + " = " + (total + nums[i]));
        }
        total += nums[i];
    }
    return total;
}

nums = [1, 2, 3, 4];

console.log((sum(nums, true)));

// using default parameters to receive data from intermediate calcs

function allFactorials(num, factorial = [1]) {

    if(num > factorial.length){
        allFactorials(num - 1, factorial)
    }

    factorial.push(num * factorial[num - 1]);

    return factorial
}

console.log(allFactorials(2))

// case study

function count(num){
    if(num < 0){ // base case;
        return;
    }
    console.log(num)
    count(num - 1);
}


console.log(count(7));


// another example
function echo(word){
  if(word.length > 1){
     console.log(word.toUpperCase());
     let response = echo(word.slice(1));
     console.log(response)
     return word;
  } else {
    console.log(word.toUpperCase())
    return word;
  }
}

echo("Saara")

// another example to illustrate base case and recursive case;

let thatIsEnough = false;

function thisWineCup(){
    //base case:
    // - Is `justEnoughWine` true? Return & exit.
    if(thatIsEnough === true){
        console.log("Please, stop there bambi!");
        return true;
    }

    // Recursive case:
    // - justEnoughWine must not have been true,
    //   so let's set it and check again.
    thatIsEnough = true;
    thisWineCup();
}


thisWineCup();


// compare recursive and iterative solutions
// iterative
function countDown(startingNumber){
    for(let i = startingNumber; i>=0; i--){
        console.log(i);
    }
}

countDown(10);

// recursive
function countDown(startingNumber){
    if(startingNumber === 0){ // base case
        console.log("Time is Up please");
        return
    }

    console.log(startingNumber);
    countDown(startingNumber - 1) // recursive base, startingNumber - 1 is the recursive step
}

countDown(6);

// print values of an array recursively

function printArray(arr, i = 0){

    if(i >= arr.length) return

    console.log(arr[i]);

    printArray(arr, i + 1);
}

printArray([2, 4, 6, 8])

/* write a  function multiply(num1, num2) that returns the product of two numbers
without using using *, for, while. */

function alternateMultiply(num1, num2){
    return num1 / (1 / num2);
}
function multiply(num1, num2){
    // base case
    if (num2 == 0) return 0;

    if (num2 > 0) {
        return num1 + alternateMultiply(num1, num2 - 1);
    } else {
        return -num1 + alternateMultiply(num1, num2 + 1);
    }
}
console.log("******")
console.log(multiply(4, -6))
console.log("******")
