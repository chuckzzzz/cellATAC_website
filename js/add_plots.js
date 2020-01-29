var QC_data = {        x: [1, 2, 3, 4, 5, 6, 7, 8],        y: [1, 4, 9, 16, 25, 36, 49, 64]};
  
corr_data={
    x:[1,2,3,4,5],
    y:[1,3,5,2,3],
    mode: 'markers',
    type: 'scatter',
    marker: {
        color: 'rgb(142, 124, 195)',
        size: 8
    },
};
  var layout_QC = {
    title: 'Quality Control',
    xaxis: {
      title: 'Depth',
      showgrid: false,
      zeroline: false
    },
    yaxis: {
      title: 'Tsse',
      showline: false
    }
  };
  var layout_COOR = {
    title: 'Correlation',
    xaxis: {
      title: 'X Label',
      showgrid: false,
      zeroline: false
    },
    yaxis: {
      title: 'Y Label',
      showline: false
    }
  };
var QC_data = [ QC_data ];  
var corr=[corr_data] 
Plotly.newPlot('QC', QC_data, layout_QC);
Plotly.newPlot('corr', corr, layout_COOR);