// NOTE: Make sure to use the `var` keyword for ALL variable declarations

var people = [
  {
    name: "Layla",
    age: 27,
    knownLanguages: 3
  }, {
    name: "Keanu",
    age: 54,
    knownLanguages: 1
  }, {
    name: "Jasmine",
    age: 35,
    knownLanguages: 2
  }
]

// #1: Use the `map` array method to create a new array containing the names of each
// person in the `people` array. Assign the returned array to a variable
// called `peopleNames`.
// Type your solution immediately below this line:

for(let i = 0;i<people.length; i++){
 

  var newArrayOne = people.map(movingNames)
  newArrayOne.push(peopleNames);
  var peopleNames = []

    function movingNames (){
      
  }
  console.log(peopleNames)
}




// #2: Use the `filter` array method to create a new, filtered array containing only
// persons from the `people` array who know multiple languages. Assign the returned array
// to a variable called `polyglotPeople`.
// Type your solution immediately below this line:


// people.knownLanguages > 1



var newA = [];
var many = people.filter(knownL)

 function knownL () {
  if (people.knownLanguages > 1){
    
    console.log(people.push(newA))

  }
 }
 
  // return people.knownLanguages > 1;


//  var newA = [];
 
// var many = people.filter(Langk)

// var pushing = many.push(newA)

// Langk();?