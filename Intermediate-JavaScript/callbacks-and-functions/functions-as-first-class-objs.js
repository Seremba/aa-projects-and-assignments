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

// reverse engineer forEach function
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