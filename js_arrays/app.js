//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
var nums = [1, 2, 4, 5, 3, 9, 7];

for (var i = 0; i < nums.length; i++) {
  // how to print all elements
  // console.log(nums[i]);
  // nested if statement
  if (nums[i] > 4) {
    // console.log(nums[i]);
  }
}
// directly effects the original data
nums.forEach(function (num) {
  num = num * 2;
  return num
});

var mapped = nums.map(function (num) {
  return num * 2;
})

// console.log("Mapped data", mapped);

var filtered = nums.filter(function (num) {
  return num > 4
})

// console.log("Filtered data", filtered);

var sorted = nums.sort(function (a, b) {
  return a - b
});

// console.log("Sorted data", sorted);

function fetchData(url) {
  fetch(url)
    // comes to app as stringed data.
    // res.json() turns stringed data into dictionaries(objects).
    .then(response => response.json())
    .then(data => {
      // do all functional stuff in here. 
      var filterAlbum = data.filter(function (album) {
        return album.userId > 1 && album.userId < 3
      })
      // console.log(filterAlbum);

      var mapAlbum = data.map(function (album) {
        return {
          userid: album.userId / 3,
          title: album.title.split(" ")[0],
          id: album.id * Math.pow(2, 5)
        }
      })
      // console.log(mapAlbum);
    }).catch(err => console.log(err));
}
fetchData("https://jsonplaceholder.typicode.com/albums")

// declare class instance
class Person {
  // set constructor on class
  constructor(age) {
    this.age = age;
  }
  // method that adds one year to inital age
  yearPasses() {
    return this.age + 1;
  };
  // method to give age group by if statement
  amIOld() {
    if (this.age < 13) {
      console.log("Your are young")
    } else if (this.age >= 13 && this.age < 18) {
      console.log("You are a teenager");
    } else {
      console.log("You are old")
    }
  }
}
  // declare method on class outside of class curly braces
  // prototype methods are not saved in to memory the same
  // as methods declared inside of curly braces
  Person.prototype.setAge = function (initialAge) {
  if (initialAge> 0) {
  age = initialAge
  console.log(age);
} else {
  age = 0;
  console.log("Age is not valid, setting to 0")
}
};
// how to declare new instance of class
var phil = new Person(37);
// how to call on different methods of class
phil.setAge(-1);
console.log(phil.yearPasses());
phil.amIOld();
// encapsulation
// inheritance
// polymorphism
// abstraction
