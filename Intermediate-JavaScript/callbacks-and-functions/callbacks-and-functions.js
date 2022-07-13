/* Call backs accept other functions as parameter, callbacks behave like normal functions
so they can have their own parameters too */
example

let foobar = function(callback) {
  console.log("foo");
  callback();
  console.log("bar");
};

let sayHello = function() {
  console.log("hello");
};

foobar(sayHello);

// another example
let add = function(num1, num2, cb) {
    let sum = num1 + num2;
    let result = cb(sum);
    return result;
  };

  let double = function(num) {
    return num * 2;
  };

  let negate = function(num) {
    return num * -1;
  };

  console.log(add(2, 3, double)); // 10
  console.log(add(4, 5, negate)); // -9

  //
