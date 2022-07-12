//Destructuring helps you extra parts of an arry into distinct variables

let numArray = [10, 20];

let [num1, num2] = numArray;

console.log(num1, num2);

//You can declare variables first before destructuring

let animalArr = ["cat", "dog"];

let firstAnimal, secondAnimal;

[firstAnimal, secondAnimal] = animalArr;

console.log(firstAnimal, secondAnimal)

// we can swap variables with destructing

let num3 = 13;
let num4 = 20;

[num3, num4] = [num4, num3]

console.log(num3);
console.log(num4);

//we can destructure objects into vriables

let obj = {name: "apples", breed: ["tabby", "short hair"]};

let {name, breed} = obj;

console.log(name);
console.log(breed)

// destructure objects with different key names

let obj1 = {apple: "red", banana: "yellow"}

let {apple: newApple, banana: newBanana} = obj1;

console.log(newApple, newBanana)

// destructure large objects

let obj3 = {animal: {name: "Fiona", species: "Hippo"}}

let{
    animal: {species}
} = obj3;

console.log(species)

// another example
let user = {
    userId: 1,
    favoriteAnimal: "hippo",
    fullName: {
        fname: "Pat",
        lname: "Rick"
    }
}

let{fname, lname} = user.fullName;

console.log(fname, lname
    )

    // another example

    let bootcamp = {
        name: "App Academy",
        color: "red",
        instructor: {
            fullName : {
                lname1: "Sarah",
                lname2: "Seremba"
            }
        }
    }

    let {lname1, lname2} = bootcamp.instructor.fullName;

    console.group(lname1, lname2)

    // destructuring and rest parameter
    let foods = ["matooke", "rice", "nkoko", "nyama", "mbuzi", "irish", "yams"];

    let[firstFood, secondFood, ...otherFoods] = foods;

    console.log(firstFood, secondFood, otherFoods)

    // we can destructure parameters too

    let cat = {linya: "Curtis", owner: "Seremba"};

    function ownerName({owner}){
        console.log("This cat belongs to " + owner);
    }

    ownerName(cat)

    // another example
    let bigCat = {
        name: "Jet",
        owner: { name: "Rose" },
        toys: ["ribbon"],
        siblings: { name: "Freyja", color: "orange", toys: ["mouse", "string"] }
      };

      // here we use *aliased* object destructuring to create a siblingToys variable
function toyFinder({ toys, siblings: { toys: siblingToys } }) {
    let allToys = toys.concat(siblingToys);
    return allToys;
  }

  console.log(toyFinder(bigCat)); // => ["ribbon", "mouse", "string"]


  let obj5 = { name1: "Crystal", traits: ["mammal", "dog"] };
let { traits, name1 } = obj5;

console.log(traits); // => ???
