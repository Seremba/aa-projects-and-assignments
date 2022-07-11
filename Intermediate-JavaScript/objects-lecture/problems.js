/*
Iterate Through Obj
Write a function printObject(obj) that prints out all key-value pairs of an object.
The format should be key - value
*/

let printObject = function(obj) {
    // your code here...
    for(let prints in obj){
        let value = obj[prints];
        console.log(prints + ' - ' + value);
    }
  }

  let bootcamp = {
    name: "App Academy",
    color: "Red",
    population: 120
  };

  printObject(bootcamp); // prints
  // name - App Academy
  // color - Red
  // population - 120

  /**
   Cat Builder
Write a function catBuilder(name, color, toys)
that returns a cat object object with the corresponding properties
   */

let catBuilder = function(name, color, toys){
   let builder = {};
   builder.name = name;
   builder.color = color;
   builder.toys = toys

   return builder;
}

console.log(catBuilder("Whiskers", "black", ["scratching-post", "yarn"]));
// prints: { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }

console.log(catBuilder("Nyan", "rainbow", ["poptarts"]));
// prints: { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }
