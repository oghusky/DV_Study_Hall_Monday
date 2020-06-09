var tooltip = d3
  .select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);
var barbody = d3.select("#bar-chart"),
  svg = barbody.append("svg")
    .attr("height", window.innerHeight)
    .attr("width", window.innerWidth - 100),
  margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 50
  }
width = +svg.attr("width") - margin.left - margin.right,
  height = +svg.attr("height") - margin.top - margin.bottom,
  g = svg.append("g").attr("transfrom", `translate(${margin.left}, ${margin.top})`);
var x = d3.scaleBand()
  .rangeRound([0, width])
  .padding(0.1);
var y = d3.scaleLinear()
  .rangeRound([height, 0]);



d3.csv("Data.csv").then(function (data) {
  /*
  for item in data:
    print(item)
  */
  // for (var i = 0; i < data.length; i++){
  //   console.log(data[i]);
  // }
  // for (let item in data) {

  // }

  var mapped = data.map(function (item) {
    return item
  });
  // console.log(mapped);
  var filtered = data.filter(function (item) {
    return item.UC2_Literal === "LARCENY-NON VEHICLE";
  })
  // console.log(mapped);
  // console.log(filtered);
  var crime_count = data.reduce(function (counter, item) {
    // if you look in counter object(dictionery) and see a property
    // add 1 to its count
    // if you do not see this property in the object create and add 1
    counter[item.UC2_Literal] = counter.hasOwnProperty(item.UC2_Literal) ? counter[item.UC2_Literal] + 1 : 1;
    return counter
  }, {});
  // console.log(crime_count);
  var new_data = [];
  function crime_obj(name, count) {
    this.name = name;
    this.count = count;
  }
  for (key in Object.keys(crime_count)) {
    if (key < 20 && Object.keys(crime_count)[key] != "") {
      new_data.push(new crime_obj(Object.entries(crime_count)[key][0], Object.entries(crime_count)[key][1]));
    }
  }
  // console.log(new_data);
  // Bar chart======================
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
    .attr("color", "#000")

  g.append("g")
    .call(d3.axisLeft(y))
    .append("text")
    .attr("fill", "#555")
    .attr("tranform", "rotate(-90")
    .attr("y", -40)
    .attr("dy", ".1em")
    .attr("text-anchor", "end")
    .text("Crime Count");

  g.selectAll(".bar")
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
        .style("opacity", 1)
      tooltip
        .html(`Crime Type: <b>${d.name}</b></br>Crime Count: <b>${d.count}</b>`)
        .style("left", `${d3.event.pageX}px`)
        .style("top", `${d3.event.pageY - 50}px`)
    })
    .on('mouseout', function () {
      tooltip
        .transition()
        .duration(500)
        .style('opacity', 0)
    })
  var vlSpec = {
    data: {
      values: new_data
    },
    mark: "bar",
    encoding: {
      y: { field: "count", type: "quantitative" },
      x: {
        field: "name", type: "nominal"
      }
    }
  }
  vegaEmbed("#printed_data", vlSpec);
});

