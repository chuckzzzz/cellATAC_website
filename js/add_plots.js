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
      title: 'TSSE',
      showgrid: false,
      showline: true,
      zeroline: true,
      range:[0,55]
    },
    yaxis: {
      title: 'LogUMI',
      showline: true,
      zeroline: true,
      range:[0,5.5]
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
      var x_max=Math.max.apply(Math, tsse);
      var y_max=Math.max.apply(Math, logUMI);
      layout_QC['xaxis']['range']=[0, x_max+2];
      layout_QC['yaxis']['range']=[0, y_max+0.2];
      var QC_data={x:tsse, y:logUMI,
        mode: 'markers',
        type: 'scatter',
        marker: {
            color: 'rgb(142, 124, 195)',
            size: 4,
            opacity: 0.5
        },
      };
      var QC_density={
        x: tsse,
        y: logUMI,
        name: 'density',
        ncontours: 20,
        colorscale: 'Hot',
        reversescale: true,
        showscale: false,
        type: 'histogram2dcontour'
      };
      QC=[QC_data,QC_density]
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