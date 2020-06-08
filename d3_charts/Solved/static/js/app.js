// set which div chart will show up in
var barbody = d3.select("#bar-chart"),
  svg =
    barbody.append("svg")
      .attr("height", window.innerHeight)
      .attr("width", window.innerWidth - 100),
  // set margins
  margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 50
  }
// set width and height minus margins
width = +svg.attr("width") - margin.left - margin.right,
  height = +svg.attr("height") - margin.top - margin.bottom,
  // set initial grouping
  g = svg.append("g").attr("transform", `translate(${margin.left}, ${margin.top})`);
// initialize x and y axes ranges
var x = d3.scaleBand()
  .rangeRound([0, width])
  .padding(0.1);
var y = d3.scaleLinear()
  .rangeRound([height, 0]);

// for some cool stuff later
var tooltip = d3
  .select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0)
// parse csv to json
d3.csv('Data.csv')
  .then(function (data) {
    // reduce neighborhood names down to single instances
    // grab all occurrences of neighborhood names
    var crime_count = data.reduce((counter, item) => {
      counter[item.Neigborhood] = counter.hasOwnProperty(item.Neigborhood) ? counter[item.Neigborhood] + 1 : 1;
      return counter;
    }, {});
    // format data the way d3 needs
    // create array
    var new_data = [];
    // create object constructor
    function neighborhood_obj(name, count) {
      this.name = name;
      this.count = count;
    }
    // push each object to array
    for (key in Object.keys(crime_count)) {
      // set name to object key
      // set count to object value
      if (key < 20 && Object.keys(crime_count)[key] != "") {
        new_data.push(new neighborhood_obj(Object.entries(crime_count)[key][0], Object.entries(crime_count)[key][1]))
      }
    }
    console.log(typeof new_data);
    // ============= Bar Chart =================

    x.domain(new_data.map(function (d, i) {
      return d.name;
    }))
    y.domain([0, d3.max(new_data, function (d) {
      return d.count
    })]);
    g.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("color", "#fff")

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
      //width of/spacing between bars
      .attr("x", function (d) {
        return x(d.name)
      })
      // height of bars
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
          .style("opacity", 1);
        tooltip
          .html(`Neighborhood: <b>${d.name}</b></br>Crime Count: <b>${d.count}</b>`)
          .style("left", `${d3.event.pageX}px`)
          .style("top", `${d3.event.pageY - 50}px`)
      })
      .on('mouseout', () => {
        tooltip
          .transition()
          .duration(500)
          .style('opacity', 0)
      });
  })
  .catch(err => console.log(err));