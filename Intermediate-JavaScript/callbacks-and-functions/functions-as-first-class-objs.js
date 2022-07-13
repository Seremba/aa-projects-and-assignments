// example 1
let foo = function(arg){
   arg()
}

let bar = function(){
    console.log( "Interesting")
}
foo(bar)

// return functions from functions

let food = function(){
    let foodType = function(){
        console.log("I love Salads prepared by Sarah")
    }
    return foodType;
}

let res = food()

res()

/*
Write a function greaterResult that accepts a number and two callbacks as arguments. The
function should call both callbacks, passing in the number and return
the result of the callback which is greater
*/

let greaterResult = function(num, cb1, cb2){
 let res1 = cb1(num);
 let res2 = cb2(num);

 if(res1 > res2){
     return res1;
 } else {
     return res2;
 }
}

let doubler = function(n){
    return n * 2;
}

let squarer = function(n){
    return n * n;
}


console.log(greaterResult(5, doubler, squarer))

// reverse engineer forEach array method
let myForEach = function(array, cb){
    for(let i = 0; i < array.length; i++){
        let el = array[i];
        cb(el, i, array);
    }
}

let peeps = ["Sarah", "Nancy", "Mum"];

myForEach(peeps, function(el, i) {
    console.log(el.toUpperCase() + ' ' + i);
})

// reverse engineer map array method

let myMap = function(array, cb){
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let result = cb(element, index, array);
        newArray.push(result);
    }
    return newArray;
}

let result = myMap([4, 9, 81, 25], function(n){
    return n * 2;
})

console.log(result);

//reverse engineer filter method

let myFilter = function(array, cb){

    let newArray = [];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(cb(element, index, array)){
            newArray.push(element);
        }

    }

    return newArray;
}
let buddies = ["James", "Jackie", "Lucy", "Lucky"]
let results = myFilter(buddies, function(n){
    return n.includes("ck")
})

console.log(results)

// reverse engineer array every method
let sarahNames = ["my", "cute", "wife"];

let myEvery = function(array, cb){
    for(let i = 0; i < array.length; i++){
        let el = array[i];
        if(cb(el) === false){
            return false;
        }
    }
    return true;
}

let containsE = function(el) {
    return el.includes("y")
}

console.log(myEvery(sarahNames, containsE))
