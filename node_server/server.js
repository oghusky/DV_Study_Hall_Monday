// PACKAGE NAMES
var path = require('path');
var fs = require('fs');
var express = require('express');
var app = express();
// TELLS APP WHERE FIND STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

// @GET ROUTE TO INDEX OF API
app.get("/api", function (req, res) {
  // file server package to grab chipotle_stores.csv file
  fs.readFile('./chipotle_stores.csv', 'utf-8', function (err, data) {
    // if there is no error
    if (!err) {
      // split up data using regex
      var split_data = data.split(/\r?\n/);
      // stringify data
      var stringed_data = JSON.stringify(split_data);
      // change data to JSON
      var parsed_data = JSON.parse(stringed_data);
      // map parsed, split data to a new array
      var chipotle_data = parsed_data.map((data, i) => {
        if (i !== 0) {
          return {
            state: data.split(",")[0],
            city: data.split(",")[1],
            address: `${data.split(",")[2]} ${data.split(",")[3]}`,// print(f"{data.split()}")
            lat: data.split(",")[4],
            lon: data.split(",")[5]
          }
        }
      })
      // object that send data to front end
      // data is "fetched" in app.js file
      res.json({
        chipotle_data: chipotle_data
      });
    }
  })
})

// @HOME ROUTE TO RENDER INDEX HTML PAGE
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./index.html"));
})

// TELLS APP TO LISTEN ON PORT 5000
app.listen(5000, function () {
  console.log("SERVER STARTED");
})


// TEST FUNCTION TO SHOW DATA WHEN SERVER IS STARTED
function logData() {
  fs.readFile('./chipotle_stores.csv', 'utf-8', function (err, data) {
    if (!err) {
      var split_data = data.split(/\r?\n/);
      var stringed_data = JSON.stringify(split_data);
      var parsed_data = JSON.parse(stringed_data);
      var individuals = parsed_data.map((data, i) => {
        if (i !== 0) {
          return {
            state: data.split(",")[0],
            city: data.split(",")[1],
            address: data.split(",")[2],
            lat: data.split(",")[3],
            lon: data.split(",")[4]
          }
        }
      })

    }
  })
}
logData();