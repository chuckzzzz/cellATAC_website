Plotly.d3.csv('./data/XW45_merge_gene.csv', function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var allGeneNames = unpack(rows, 'gene'),
        allx = unpack(rows, 'x'),
        ally = unpack(rows, 'y'),
        allcolor = unpack(rows, 'color'),
        listofGenes = [],
        currentGene,
        currenty = [],
        currentx = [],
        currentcolor = [];

    for (var i = 0; i < allGeneNames.length; i++ ){
        if (listofGenes.indexOf(allGeneNames[i]) === -1 ){
            listofGenes.push(allGeneNames[i]);
        }
    }

    function getGeneData(chosenGene) {
        currenty = [];
        currentx = [];
        currentcolor = [];
        for (var i = 0 ; i < allGeneNames.length ; i++){
            if ( allGeneNames[i] === chosenGene ) {
                currenty.push(ally[i]);
                currentx.push(allx[i]);
                currentcolor.push(allcolor[i]);
            }
        }
    };

    // Default Country Data
    setBubblePlot('Neurod6');

    function setBubblePlot(chosenGene) {
        getGeneData(chosenGene);

        var colorscaleValue = [
          [0, '#3D9970'],
          [1, '#001f3f']
        ];

        var trace1 = {
            x: currentx,
            y: currenty,
            mode: 'markers',
            marker: {
                color: currentcolor,
                colorscale: 'Viridis',
                showscale: true,
                opacity: 0.5
            }
        };

        var data = [trace1];

        var layout = {
          xaxis: {
            range: [ -50, 50 ]
          },
          yaxis: {
            range: [-50, 50]
          },
          title:'XW45 tSNE by genes'
        };

        Plotly.newPlot('XW45_tSNE_gene', data, layout);
    };

    var innerContainer = document.getElementById('bubble'),
        plotEl = innerContainer.querySelector('.plot'),
        geneSelector = innerContainer.querySelector('.genedata');

    function assignOptions(textArray, selector) {
        for (var i = 0; i < textArray.length;  i++) {
            var currentOption = document.createElement('option');
            currentOption.text = textArray[i];
            selector.appendChild(currentOption);
        }
    }

    assignOptions(listofGenes, geneSelector);

    function updateGene(){
        setBubblePlot(geneSelector.value);
    }

    geneSelector.addEventListener('change', updateGene, false);
});



