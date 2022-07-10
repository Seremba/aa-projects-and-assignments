/*
suppose you have the following function that solves the problem of returning figuring out
if an array of numbers includes three consecutive
elements that are consecutive numbers (i.e. [5, 1, 2, 3, 6] => true; [5, 1, 2, 4, 6] => false).


const threeIncreasing = function(nums) {
    for (let i = 0; i < nums.length - 2; i++) {
      if (nums[i] + 1 === nums[i + 1] && nums[i + 1] + 1 === nums[i + 2]) {
        return true;
      }
    }
    return false
  };

  console.log(threeIncreasing([5, 1, 2, 3, 6])); // true
  console.log(threeIncreasing([5, 1, 2, 4, 6])); // false
*/

//   refactored code which is DRY, it is actually longer than the original code

const isConsecutive = function(nums){
    const separatedBy = 1;

    for (let i = 0; i < nums.length - 1; i++) {
      const num1 = nums[i];
      const num2 = nums[i + 1];

      if (num1 + separatedBy !== num2) {
        return false;
      }
    }
    return true;
  };

  const threeIncreasing = function(nums){
    for (let i = 0; i < nums.length - 2; i++) {
      const consecutiveNums = [];
      for (let j = i; j < i + 3; j++) {
        consecutiveNums.push(nums[j]);
      }

      if (isConsecutive(consecutiveNums)) {
        return true;
      }
    }
    return false;
  };
