var barbody = d3.select("#bar-chart");
var svg = barbody
  .append("svg")
  .attr("height", window.innerHeight)
  .attr("width", window.innerWidth - 100)

var margin = {
  top: 20,
  right: 20,
  bottom: 30,
  left: 50
},
  width = +svg.attr("width") - margin.left - margin.right,
  height = +svg.attr("height") - margin.top - margin.bottom,
  g = svg.append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`)

var x = d3
  .scaleBand()
  .rangeRound([0, width])
  .padding(0.1)

var y = d3
  .scaleLinear()
  .rangeRound([height, 0]);

var tooltip = d3
  .select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

d3.csv("Data.csv")
  .then(function (data) {
    console.log(data);
    // arrays higher map reduce filter

    // var mapped = data.map(function (item) {
    //   return item["Report Date"] = Date.parse(item["Report Date"]);
    // });
    // var filtered = data.filter(function (item) {
    //   return item.UC2_Literal != "LARCENY-FROM VEHICLE";
    // });
    // console.log(filtered);
    // console.log(mapped)
    // var reduced = data.reduce(function (arr, item) {
    //   arr = item.Neigborhood != "Inman Park" ? item : null
    //   return arr
    // }, [])
    // console.log(reduced);
    var crime_count = data.reduce(function (counter, item) {
      counter[item.Neigborhood] = counter.hasOwnProperty(item.Neigborhood) ? counter[item.Neigborhood] + 1 : 1;
      return counter
    }, {});
    var new_data = [];
    // console.log(crime_count);
    function neighborhood_obj(name, count) {
      this.name = name;
      this.count = count;
    }
    for (key in Object.keys(crime_count)) {
      if (key < 20 && Object.keys(crime_count)[key] != "") {
        new_data.push(new neighborhood_obj(Object.entries(crime_count)[key][0], Object.entries(crime_count)[key][1]))
      }
    }
    // console.log(new_data)
    x.domain(new_data.map(function (d) {
      return d.name;
    }));
    y.domain([0, d3.max(new_data, function (d) {
      return d.count;
    })]);

    g.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("color", "#fff");

    g.append("g")
      .call(d3.axisLeft(y))
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -40)
      .attr("dy", ".1em")
      .attr("text-anchor", "end")
      .text("Crime Count");

    g.selectAll("bar")
      .data(new_data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", function (d) {
        return x(d.name);
      })
      .attr("y", function (d) {
        return y(Number(d.count));
      })
      .attr("width", x.bandwidth())
      .attr("height", function (d) {
        return height - y(Number(d.count));
      })
      .on("mouseover", function (d) {
        tooltip
          .transition()
          .duration(200)
          .style("opacity", .9);
        tooltip
          .html(`Neighborhood: ${d.name} </br> Crime Count: ${d.count}`)
          .style("left", `${d3.event.pageX}px`)
          .style("top", `${d3.event.pageY - 50}px`)
      })
      .on("mouseout", function () {
        tooltip
          .transition()
          .duration(500)
        style("opacity", 0)
      })



  }).catch(function (err) { console.log(err) })

// function cartoonCharacter(name, color) {
//   this.name = name;
//   this.color = color;
// }

// var SpongeBob = new cartoonCharacter("Bob", "Yellow");
// var Squidward = new cartoonCharacter("Squid", "Greenish-Gray");

// var chars = [
//   SpongeBob,
//   Squidward
// ]
// console.log(chars);