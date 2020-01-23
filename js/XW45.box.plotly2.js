var clusters = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14', 'C15', 'C16', 'C17', 'C18', 'C19']

Plotly.d3.csv('./data/XW45_merge_box.csv', function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var allGeneNames = unpack(rows, 'gene'),
        allx = unpack(rows, 'x'),
        allcluster = unpack(rows, 'cluster'),
        allcolor = unpack(rows, 'color'),
        listofGenes = [],
        currentGene,
        currentx = [],
        currentcluster = [],
        currentcolor = [];

    for (var i = 0; i < allGeneNames.length; i++ ){
        if (listofGenes.indexOf(allGeneNames[i]) === -1 ){
            listofGenes.push(allGeneNames[i]);
        }
    }

    function getGeneData(chosenGene) {
        currentx = [];
        currentcolor = [];
        currentcluster = [];
        for (var i = 0 ; i < allGeneNames.length ; i++){
            if ( allGeneNames[i] === chosenGene ) {
                currentx.push(allx[i]);
                currentcolor.push(allcolor[i]);
                currentcluster.push(allcluster[i]);
            }
        }
    };

    // Default Country Data
    setBubblePlot('Neurod6');

    function setBubblePlot(chosenGene) {
        getGeneData(chosenGene);
/*
    var data = clusters.map(c => {
      var d = rows.filter(r => r.cluster === c)
      return {
        type: 'box',
        name: c,
        y: d.map(r => r.color)
      }
    });
*/

        var trace1 = {
            x: currentcluster,
            y: currentcolor,
            type: 'box',
        };

        var data = [trace1];

    var layout = {
      title:'XW45 gene enrichment'
    };

        Plotly.newPlot('XW45_box', data);
    };

    var innerContainer = document.getElementById('bubble1'),
        plotEl = innerContainer.querySelector('.plot1'),
        geneSelector = innerContainer.querySelector('.genedata1');

    function assignOptions(textArray, selector) {
        for (var i = 0; i < textArray.length;  i++) {
            var currentOption1 = document.createElement('option');
            currentOption1.text = textArray[i];
            selector.appendChild(currentOption1);
        }
    }

    assignOptions(listofGenes, geneSelector);

    function updateGene(){
        setBubblePlot(geneSelector.value);
    }

    geneSelector.addEventListener('change', updateGene, false);
});



