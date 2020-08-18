// GRABS TBODY FROM HTML
var tbody = document.querySelector("tbody");
// BUILT IN JAVASCRIPT METHOD TO GRAB DATA FROM "RES.JSON({})" ON SERVER
fetch("/api")
  // fetch the data from /api route
  .then(res => res.json())
  // change response into json
  .then(data => {
    // MAP DATA TO NEW ARRAY
    var new_jersey = data.chipotle_data.map((taco, i) => {
      // GRABS EVERY ROW OF DATA EXCEPT ROW 0
      if (i !== 0) return taco
      // FILTERS DATA BECAUSE IF STATEMENT AND MAP RETURN "UNDEFINED" AT FIRST INDEX OF ARRAY
    }).filter(taco => taco !== undefined && taco.state === "New Jersey");
    // MAPS EACH ROW TO TBODY ELEMENT IN HTML
    new_jersey.map(row => {
      tbody.innerHTML += `
        <tr>
          <td>${row.city}</td>
          <td>${row.state}</td>
          <td>${row.address}</td>
        </tr>
      `
    })
    // PARSES "LONGITUDE" PROPERTY TO A NUMBERICAL VALUE
    data.chipotle_data.forEach((taco, i) => {
      if (i !== 0) {
        taco.lon = parseFloat(taco.lon);
      }
    })
    console.log(data.chipotle_data)
  })
  // turn json into readable data
  .catch(function (err) { console.log(err) });
  // catch errors if there are any