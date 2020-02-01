  
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
      title: 'logUMI',
      showgrid: false,
      showline: true,
      zeroline: true,
      range:[0,55]
    },
    yaxis: {
      title: 'tsse',
      showline: true,
      zeroline: true,
      range:[0,5.5]
    },
    xaxis2: {
      domain: [0.85, 1],
      showgrid: false,
      zeroline: false
    },
    yaxis2: {
      domain: [0.85, 1],
      showgrid: false,
      zeroline: false
    }
  };
  var layout_COOR = {
    title: 'Correlation',
    showlegend: false,
    autosize: false,
    width: 600,
    height: 550,
    margin: {t: 50},
    hovermode: 'closest',
    bargap: 0,
    xaxis: {
      title: 'X Label',
      showgrid: false,
      zeroline: false,
      domain: [0, 0.85],
    },
    yaxis: {
      title: 'Y Label',
      showgrid: false,
      zeroline: false,
      domain: [0, 0.85],

    },
  };

var QC_data = [ QC_data ];  
var corr=[corr_data] 
// Plotly.newPlot('QC', QC_data, layout_QC);
Plotly.newPlot('corr', corr, layout_COOR);

var path = window.location.pathname;
var page = path.split("/").pop();
page = page.replace(/html/g, "tsv")
data_file="../data/QC/"+page;
console.log( data_file );

$.ajax({
  type: "Get",
  url: data_file,
  dataType: "text",
  success: function(data) {
      var array=data.split('\n');
      array.shift();
      var tsse=[];
      var logUMI=[];
      array.forEach(function(item, index, array) {
        tsse.push(item.split('\t')[0]);
        logUMI.push(item.split('\t')[1]);
      });
      var x_max=Math.max.apply(Math, logUMI);
      var y_max=Math.max.apply(Math, tsse);
      layout_QC['xaxis']['range']=[0, x_max+2];
      layout_QC['yaxis']['range']=[0, y_max+0.2];
      // layout_QC['xaxis2']['range']=[0, x_max+2];
      // layout_QC['yaxis2']['range']=[0, y_max+0.2];
      var QC_data={
        x:logUMI, 
        y:tsse,
        name: 'QC_data',
        mode: 'markers',
        type: 'scatter',
        marker: {
          color: 'rgb(102,0,0)',
          size: 2,
          opacity: 0.5
        },
      };
      var QC_density={
        x: logUMI,
        y: tsse,
        name: 'density',
        ncontours: 20,
        colorscale: 'Hot',
        reversescale: true,
        showscale: false,
        type: 'histogram2dcontour',
      };
      var x_density_histo={
        x: logUMI,
        name: 'logUMI density',
        marker: {color: 'rgb(102,0,0)'},
        yaxis: 'y2',
        type: 'histogram',
        domain: {
          x: [0.85, 1],
          y: [0.85, 1]
        },
      }
      var y_density_histo={
        y: tsse,
        name: 'tsse density',
        marker: {color: 'rgb(102,0,0)'},
        xaxis: 'x2',
        type: 'histogram',
        domain: {
          x: [0.85, 1],
          y: [0.85, 1]
        },
      } 
      QC=[QC_data,QC_density, x_density_histo,y_density_histo]
      Plotly.newPlot('QC', QC, layout_QC);
      },
      error: function(){
          alert(data_file + "Not Found");
      }
  },
     
);


// function readTextFile(file)
// {
//   var reader = new FileReader();
//   reader.readAsText(file);
// }

// var test = readTextFile("../data/QC/GABA.Cge.Cge6.tsv")
// console.log(test);