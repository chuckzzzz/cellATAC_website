var clusters = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14', 'C15', 'C16', 'C17', 'C18', 'C19']


Plotly.d3.csv('./data/XW45_merge.csv', (err, rows) => {
  var data = clusters.map(c => {
    var d = rows.filter(r => r.cluster === c)

    return {
      type: 'scatter',
      mode: 'markers',
      name: c,
      x: d.map(r => r.x),
      y: d.map(r => r.y)
    }
  })

var layout = {
  xaxis: {
    range: [ -50, 50 ]
  },
  yaxis: {
    range: [-50, 50]
  },
  title:'XW45 tSNE'
};

  Plotly.newPlot('XW45_tSNE', data, layout)
})

