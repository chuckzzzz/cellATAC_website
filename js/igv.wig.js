document.addEventListener("DOMContentLoaded", function () {

        var div = document.getElementById("igvDiv"),
                options = {
                    genome: "hg19",
                    showRuler: true,
                    locus: "TP53",
                    // Insert your applications api key here,  or use OAuth
                    apiKey: 'AIzaSyDUUAUFpQEN4mumeMNIRWXSiTh5cPtUAD0',
                    tracks: [
                        {
                            type: 'wig',
                            url: 'https://s3.amazonaws.com/igv.broadinstitute.org/data/hg19/encode/wgEncodeBroadHistoneGm12878H3k4me3StdSig.bigWig',
                            name: 'bigWig track'
                        },
                        {
                            name: "Genes",
                            type: "annotation",
                            format: "bed",
                            sourceType: "file",
                            url: "https://s3.amazonaws.com/igv.broadinstitute.org/annotations/hg19/genes/refGene.hg19.bed.gz",
                            indexURL: "https://s3.amazonaws.com/igv.broadinstitute.org/annotations/hg19/genes/refGene.hg19.bed.gz.tbi",
                            order: Number.MAX_VALUE,
                            visibilityWindow: 300000000,
                            displayMode: "COLLAPSED"
                        }
                    ]
                };

        igv.createBrowser(div, options);
});
