// import d3 from something
d3
  .csv("./job_skills.csv")
  .then(function (data) {
    // console.log(data);
    // var job_title = data.map(function (d) {
    //   return d.Title;
    // })
    // console.log(job_title)
    function cake_slices(name, count) {
      this.name = name;
      this.count = count;
    }

    var titles_arr = [];
    var title_count = data.reduce((counter, item) => {
      counter[item.Title] = counter.hasOwnProperty(item.Title) ? counter[item.Title] + 1 : 1;
      return counter
    }, {});
    console.log(title_count);
    for (key in Object.keys(title_count)) {
      if (Object.keys(title_count)[key] !== "") {
        titles_arr.push(new cake_slices(Object.entries(title_count)[key][0], Object.entries(title_count)[key][1]))
      }
    }
    var sorted_title = titles_arr.sort((a, b) => b.count - a.count)
    console.log(sorted_title)




    var locations_arr = [];
    var location_count = data.reduce((counter, item) => {
      counter[item.Location] = counter.hasOwnProperty(item.Location) ? counter[item.Location] + 1 : 1;
      return counter
    }, {});
    console.log(location_count);
    for (key in Object.keys(location_count)) {
      if (Object.keys(location_count)[key] !== "") {
        locations_arr.push(new cake_slices(Object.entries(location_count)[key][0], Object.entries(location_count)[key][1]))
      }
    }
    var sorted_location = locations_arr.sort((a, b) => b.count - a.count)
    console.log(sorted_location)
    // =================================================================================
    // create table
    // var thead = d3.select("thead");
    var thead = document.querySelector("thead");
    var tbody = document.querySelector("tbody");
    // thead.html(`<th scope="col">Job Title</th>
    // <th scope="col">Job Title Count</th>`)
    thead.innerHTML = `
    <th scope="col">Job Title</th>
    <th scope="col">Job Title Count</th>
    `
    sorted_title.map(d => {
      tbody.innerHTML += `
        <tr>
        <td>${d.name}</td>
        <td>${d.count}</td>
        </tr>
      `
    })
  })




























