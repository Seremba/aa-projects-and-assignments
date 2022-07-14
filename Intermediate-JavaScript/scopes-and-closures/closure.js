function pizzaMaker(food){
    let order = "I'd like a pizza with ";
    function oven(){
        return order + food;
    }
    return oven();
}

console.log(pizzaMaker("cheese"))


//  another example

function groceryList(list){
   let groceries = list;

   function addItem(){
       groceries.push("and ice cream!");
   }

   addItem();

   return groceries;
}

console.log(groceryList(["water", "soda"]))

// another example

function elephantCollecter(){
  const elephants = ["dumbo"]

  return function(name){
     elephants.push(name)
     return elephants
  }
}

let elephantis = elephantCollecter()

console.log(elephantis("Sarah"))
console.log(elephantis("susie"))
