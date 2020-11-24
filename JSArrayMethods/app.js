var fruits = ["apples", "melons", "grapefruit", "apples", "bananas", "oranges", "mangos", "grapes", "lemon", "guava"];

console.log(fruits);

// length
var arrlength = fruits.length;
console.log("Length", arrlength);

console.log(fruits[arrlength - 1]);

// add new fruit to end of array
fruits.push("cantaloupe");
console.log("PUSHED NEW FRUIT", fruits);

// remove from end of array
fruits.pop();
console.log("POPPED OFF LAST FRUIT: ", fruits);

// add to the beginning of array
fruits.unshift("tomatoes");
console.log("UNSHIFTED: ", fruits);

// remove from beginning of array
fruits.shift();
console.log("SHIFTED", fruits);

// get index of existing element
// returns numerical value of position if elements exists
// return -1 if element doesn't exist
var mangos = fruits.indexOf("mangos");
console.log("INDEX OF: ", mangos);

// remove items by position
var removed = fruits.splice(1, 2);
console.log("SPLICED: ", removed);

// remove grapes from fruits
var grapes = fruits.indexOf("grapes");
var grapesRemoved = fruits.splice(grapes, 1)
console.log("INDEX OF AND SPLICE COMBINED: ", grapesRemoved);

// filter grapes
var filterGrapes = fruits.filter(fruit => fruit !== "grapes");
console.log("FILTERED: ", filterGrapes);

// slice and splice differ because slice makes a copy of the array
// splice effects the original array
// make copy
var copyFruits = fruits.slice();
console.log("COPY OF FRUITS ARRAY: ", copyFruits);

// put in alphabetical order
var sortedFruits = fruits.sort();
console.log("SORTED ALPHABETICALLY: ", sortedFruits);

// reverse alphabetical order
// var backwardsSort = fruits.sort((a, b) => a > b ? -1 : 1);
// console.log("BACKWARDS SORTED: ":backwardsSort);

var reversed = fruits.reverse();
console.log("REVERSED: ", reversed);
// check if datatype is an array return boolean
console.log(Array.isArray(fruits));

// add one array to another
var veggies = ["broccoli", "beans", "peas", "spinach", "kale", "potatoes"];
var fruitsAndVeggies = fruits.concat(veggies);
console.log("CONCATENATED", fruitsAndVeggies);

// concatenation with ES6
var esFruitAndVeggies = [...fruits, ...veggies];
console.log("USING SPREAD OPERATOR", esFruitAndVeggies);

// array to string
var fruitsToString = fruits.toString();
console.log("TO STRING", fruitsToString);

// includes returns boolean
var isInArray = fruits.includes("apples");
console.log("IS ARRAY METHOD: ", isInArray);

// returns last position of named element
// if element doesn't exist returns -1
console.log("LAST INDEX APPLES: ", fruits.lastIndexOf("apples"));

// join by character
var joinedByPipChar = fruits.join(" | ");
console.log("JOINED: ", joinedByPipChar);

// replace specific elements in array
console.log("FILL METHOD WITH FIRST ARGUMENT: ", fruits.fill("pineapple"))
console.log("FILL METHOD WITH FIRST AND SECOND ARGUMENT: ", fruits.fill("avocado", 2));
console.log("FILL METHOD WITH ALL ARGUMENTS: ", fruits.fill("mangos", 5, 7));

// find element in array
var found = fruits.find(fruit => fruit === "mangos");
console.log(found);

// return FIRST ELEMENT to satisfy function 
var foundNum = [1, 3, 4, 5, 6, 7, 8].find(num => num > 5);
console.log(foundNum)

// return ARRAY without repeating elements
var unique = [...new Set(fruits)];
console.log(unique);

