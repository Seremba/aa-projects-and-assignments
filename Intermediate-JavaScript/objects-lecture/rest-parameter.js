function logArguments(...allArguments){
    console.log(allArguments)
}

// logArguments("Apple", "oranges", 5, 6, 10.2)

function added(num1, ...otherNums){
   console.log("The first num: " + num1)

   let sum = num1;
   otherNums.forEach(function(num){
       sum += num
   })

   console.log("The sum is: " + sum)
}

added(2, 3, 4)
