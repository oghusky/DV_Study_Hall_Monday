d3
  .json("/summary")
  .then(data => {
    console.log(data.cleaned)
    let cleaned = data.cleaned.sort((a, b) => b.count - a.count).slice(0, 10);
    const bar = {
      $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
      data: {
        values: cleaned
      },
      mark: "bar",
      encoding: {
        x: { field: "word", type: "nominal" },
        y: {
          aggregate: "average",
          field: "count",
          type: "quantitative",
          axis: {
            title: "Words with most frequency"
          }
        }
      }
    };
    vegaEmbed("#bar-chart", bar)
  })