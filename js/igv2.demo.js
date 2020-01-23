$(document).ready(function () {

        var div,
                options,
                browser;

        div = $("#myIGV2")[0];
        options = {
            locus: "myc",
            showKaryo: false,
            showNavigation: true,
            showRuler: true,
            reference: {
                fastaURL: "../data/hg19.fasta",
                cytobandURL: "../data/cytoBand.txt"
            },
            flanking: 1000,
            apiKey: 'AIzaSyDUUAUFpQEN4mumeMNIRWXSiTh5cPtUAD0',
            trackDefaults: {
                bam: {
                    coverageThreshold: 0.2,
                    coverageQualityWeight: true
                }
            },
            palette: [
                ["#00A0B0", "#6A4A3C", "#CC333F", "#EB6841"]
            ],
            tracks: [
                {
                    name: "Genes",
                    type: "annotation",
                    format: "bed",
                    sourceType: "file",
                    url: "../data/refGene.hg19.bed.gz",
                    indexURL: "../data/refGene.hg19.bed.gz.tbi",
                    order: Number.MAX_VALUE,
                    visibilityWindow: 300000000,
                    displayMode: "EXPANDED"
                }
            ]
        };

        browser = igv.createBrowser(div, options);

        igv.ga4gh.initialize();

});
