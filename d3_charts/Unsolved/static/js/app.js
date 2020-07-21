var barbody = d3.select("#bar-chart"),
  svg = barbody.append("svg")
    .attr("height", window.innerHeight)
    .attr("width", window.innerWidth - 100),
  margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 50
  },
  width = +svg.attr("width") - margin.left - margin.right,
  height = +svg.attr("height") - margin.top - margin.bottom,
  g = svg.append("g").attr("transform", `translate(${margin.left}, ${margin.top})`);
var x = d3.scaleBand()
  .rangeRound([0, width])
  .padding(0.1);
var y = d3.scaleLinear()
  .rangeRound([height, 0]);

var tooltip = d3.select("body")
  .append("div")
  .attr("classe", "tooltip")
  .style("opacity", 0)
d3.csv("./Data.csv").then(function (data) {
  // console.log(data);
  // setting up data to manipulate our chart
  // reduce
  var crime_count = data.reduce(function (counter, d) {
    counter[d.UC2_Literal] = counter.hasOwnProperty(d.UC2_Literal) ? counter[d.UC2_Literal] + 1 : 1;
    return counter;
  }, {})
  // console.log(crime_count);
  var new_data = [];
  function neigborhood_obj(name, count) {
    this.name = name;
    this.count = count;
  }
  for (key in Object.keys(crime_count)) {
    // console.log(Object.entries(crime_count))
    new_data.push(new neigborhood_obj(Object.entries(crime_count)[key][0], Object.entries(crime_count)[key][1]))
  }
  console.log(new_data);
  // vega bar chart
  // vega lite code
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
  vegaEmbed("#vega-chart", vlSpec);

  // ================== Bar Chart 
  x.domain(new_data.map(function (d, i) {
    return d.name;
  }));
  y.domain([0, d3.max(new_data, function (d) {
    return d.count
  })]);
  g.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("color", "#000")

  g.append("g")
    .call(d3.axisLeft(y))
    .append("text")
    .attr("fill", "#555")
    .attr("transform", "rotate(-90)")
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

  // ============================ misc array functions
  // console.log(data.length);
  // for (var i = 0; i < data.length; i++) {
  //   if (data[i].Neigborhood === "Inman Park") {
  //     console.log(data[i]);
  //   }
  // }
  var mappedData = data.map(function (d, i) {
    if (i < 20) {
      const dDiv = document.createElement("tr");
      dDiv.innerHTML = `
      <td>${d.UC2_Literal}</td>
      <td>${d.Neigborhood}</td>
      <td>${d.Beat}</td>
      `;
      document.querySelector("tbody").appendChild(dDiv)
    }
  })
  // console.log(mappedData);
  var filteredData = data.filter(function (d) {
    return d.UC2_Literal === "LARCENY-FROM VEHICLE"
  })
  // console.log(filteredData);
  // var spliced = data.splice(0, 4);
  // console.log(spliced);
  // data.forEach(function (d) {
  //   parseFloat(d.Lat);
  //   parseFloat(d.Long);
  // });
  // ========================== D3 BAR CHART CODE  ==================

})
  .catch(function (err) {
    console.log(err);
  });