d3.json("./items.json")
  .then(function (data) {
    // parse string into number
    if (window.location.pathname === "/index.html") {
      var menu = document.querySelector(".menu-row");
      data.items.forEach(item => {
        return parseFloat(item.price);
      });
      // menu map
      data.items.map(item => {
        if (item.name === "chicken salad") {
          menu.innerHTML += `
        <div class="col-lg-3 col-sm-6 menu-item">
        <h3 class="py-0">${item.name.toUpperCase()}</h3>
        <p class="py-0">$${(item.price * .7).toFixed(2)}</p>
        <p class="py-0"><em>${item.description}</em></p>
        </div>
        `
        } else {
          menu.innerHTML += `
        <div class="col-lg-3 col-sm-6 menu-item">
        <h3 class="py-0">${item.name.toUpperCase()}</h3>
        <p class="py-0">$${item.price}</p>
        <p class="py-0"><em>${item.description}</em></p>
        </div>
        `
        }
      })
    }

    if (window.location.pathname === "/dashboard.html") {
      // vega - lite setup
      // side bar
      var barObj = {
        "data": {
          "values": data.items
        },
        "mark": "bar",
        "encoding": {
          "y": { "field": "name", "type": "nominal" },
          "x": {
            "field": "times_sold", "type": "quantitative",
            "title": "Amount of items sold"
          }
        }
      }
    }
    vegaEmbed('#sidebar-chart', barObj);

    // line chart
    var lineObj = {
      "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
      "data": {
        "values": data.items
      },
      "mark": "line",
      "encoding": {
        "x": { "field": "price", "type": "ordinal" },
        "y": { "field": "times_sold", "type": "quantitative" },
        // "strokeDash": { "field": "predicted", "type": "nominal" }
      }
    }
    vegaEmbed('#linechart', lineObj);
    // pie chart
    var pieObj = {
      "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
      "description": "A simple pie chart with embedded data.",
      "data": {
        "values": data.items
      },
      "mark": "arc",
      "encoding": {
        "theta": { "field": "times_sold", "type": "quantitative" },
        "color": { "field": "name", "type": "nominal" }
      },
      "view": { "stroke": null }
    }
    vegaEmbed('#piechart', pieObj);

  })
  .catch(err => console.log(err));