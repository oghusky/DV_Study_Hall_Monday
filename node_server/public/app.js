var people = [
  "Phil", "James", "Jane", "Sara", "One"
]
// FILTER RETURNS COPY OF ORIGINAL ARRAY WITH ONLY VALUES SPECIFIED TO RETURN
var Phil = people.filter(person => person === "Phil")
// FOR LOOP SIMILAR TO WHAT FILTER IS DOING
for (var i = 0; i < people.length; i++) {
  if (people[i] === "Phil") {
    return people[i];
  }
}
