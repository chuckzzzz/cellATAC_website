var igvDiv = document.getElementById("igvDiv");
var options =
    {
        genome: "mm10",
        tracks: [

            {
                "name":"GABA.Cge.Cge3",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Cge.Cge3_treat_pileup.srt.bw",
                "color":"rgb(118,197,202)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Cge.Cge3_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Cge.Cge3.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Cge.Cge5",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Cge.Cge5_treat_pileup.srt.bw",
                "color":"rgb(73,165,172)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Cge.Cge5_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Cge.Cge5.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Cge.Cge6",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Cge.Cge6_treat_pileup.srt.bw",
                "color":"rgb(80,131,82)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Cge.Cge6_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Cge.Cge6.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Cge.CgeHip",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Cge.CgeHip_treat_pileup.srt.bw",
                "color":"rgb(58,166,152)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Cge.CgeHip_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Cge.CgeHip.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Cge.Lamp5",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Cge.Lamp5_treat_pileup.srt.bw",
                "color":"rgb(71,208,134)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Cge.Lamp5_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Cge.Lamp5.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Cge.Vip",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Cge.Vip_treat_pileup.srt.bw",
                "color":"rgb(50,130,150)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Cge.Vip_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Cge.Vip.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.CRc.CRc",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.CRc.CRc_treat_pileup.srt.bw",
                "color":"rgb(59,161,73)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.CRc.CRc_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Hip.Hip.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Hip.Hip",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Hip.Hip_treat_pileup.srt.bw",
                "color":"rgb(52,149,198)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Hip.Hip_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Mge.Mge1.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Mge.Mge10",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Mge.Mge10_treat_pileup.srt.bw",
                "color":"rgb(70,206,176)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Mge.Mge10_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Mge.Mge2.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Mge.Mge11",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Mge.Mge11_treat_pileup.srt.bw",
                "color":"rgb(74,201,229)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Mge.Mge11_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Mge.Mge3.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Mge.Mge12",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Mge.Mge12_treat_pileup.srt.bw",
                "color":"rgb(92,159,134)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Mge.Mge12_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Mge.Mge4.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Mge.Mge1",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Mge.Mge1_treat_pileup.srt.bw",
                "color":"rgb(107,163,118)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Mge.Mge1_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Mge.Mge5.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Mge.Mge2",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Mge.Mge2_treat_pileup.srt.bw",
                "color":"rgb(134,189,219)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Mge.Mge2_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Mge.Mge6.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Mge.Mge3",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Mge.Mge3_treat_pileup.srt.bw",
                "color":"rgb(57,175,107)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Mge.Mge3_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Mge.Mge7.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Mge.Mge4",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Mge.Mge4_treat_pileup.srt.bw",
                "color":"rgb(64,171,131)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Mge.Mge4_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Mge.Mge8.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Mge.Mge5",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Mge.Mge5_treat_pileup.srt.bw",
                "color":"rgb(143,194,154)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Mge.Mge5_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Mge.Mge9.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Mge.Mge6",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Mge.Mge6_treat_pileup.srt.bw",
                "color":"rgb(86,186,237)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Mge.Mge6_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Mge.Mge10.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Mge.Mge7",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Mge.Mge7_treat_pileup.srt.bw",
                "color":"rgb(117,198,174)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Mge.Mge7_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Mge.Mge11.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Mge.Mge8",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Mge.Mge8_treat_pileup.srt.bw",
                "color":"rgb(99,151,181)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Mge.Mge8_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Mge.Mge12.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Mge.Mge9",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Mge.Mge9_treat_pileup.srt.bw",
                "color":"rgb(46,132,133)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Mge.Mge9_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Msn.D1.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Msn.D1",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Msn.D1_treat_pileup.srt.bw",
                "color":"rgb(66,167,196)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Msn.D1_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Msn.D2.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Msn.D2",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Msn.D2_treat_pileup.srt.bw",
                "color":"rgb(47,140,94)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Msn.D2_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Msn.Foxp2.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Msn.Foxp2",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Msn.Foxp2_treat_pileup.srt.bw",
                "color":"rgb(100,165,97)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Msn.Foxp2_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Msn.MSNOLF.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Msn.MSNOLF",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Msn.MSNOLF_treat_pileup.srt.bw",
                "color":"rgb(74,201,200)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Msn.MSNOLF_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Mxd1.Mxd1.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Mxd1.Mxd1",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Mxd1.Mxd1_treat_pileup.srt.bw",
                "color":"rgb(97,197,100)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Mxd1.Mxd1_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Olf.OBDOP.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Olf.OBDOP",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Olf.OBDOP_treat_pileup.srt.bw",
                "color":"rgb(64,157,44)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Olf.OBDOP_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Olf.OBGC.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Olf.OBGC",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Olf.OBGC_treat_pileup.srt.bw",
                "color":"rgb(41,108,35)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Olf.OBGC_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Olf.OBGLO.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Olf.OBGLO",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Olf.OBGLO_treat_pileup.srt.bw",
                "color":"rgb(56,136,68)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Olf.OBGLO_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Olf.OBIGC.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Olf.OBIGC",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Olf.OBIGC_treat_pileup.srt.bw",
                "color":"rgb(50,109,140)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Olf.OBIGC_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Olf.OBNBL.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Olf.OBNBL",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Olf.OBNBL_treat_pileup.srt.bw",
                "color":"rgb(41,124,99)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Olf.OBNBL_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Sept.LSX.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Sept.LSX",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Sept.LSX_treat_pileup.srt.bw",
                "color":"rgb(122,199,143)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Sept.LSX_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Sept.MA.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Sept.MA",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Sept.MA_treat_pileup.srt.bw",
                "color":"rgb(46,105,60)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Sept.MA_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Sept.MS.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Sept.MS",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Sept.MS_treat_pileup.srt.bw",
                "color":"rgb(124,200,118)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Sept.MS_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Sept.Sept1.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Sept.Sept1",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Sept.Sept1_treat_pileup.srt.bw",
                "color":"rgb(68,205,152)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Sept.Sept1_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.Unk.Unk.reproduced.narrowPeak.bed"
            },
            {
                "name":"GABA.Unk.Unk",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/GABA.Unk.Unk_treat_pileup.srt.bw",
                "color":"rgb(44,129,31)",
            },
            {	type: "annotation",
                format: "bed",
                name:"GABA.Unk.Unk_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/Glutamate.CLA.CLA.reproduced.narrowPeak.bed"
            },
            {
                "name":"Glutamate.CLA.CLA",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/Glutamate.CLA.CLA_treat_pileup.srt.bw",
                "color":"rgb(154,76,81)",
            },
            {	type: "annotation",
                format: "bed",
                name:"Glutamate.CLA.CLA_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/Glutamate.CT.CT1.reproduced.narrowPeak.bed"
            },
            {
                "name":"Glutamate.CT.CT1",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/Glutamate.CT.CT1_treat_pileup.srt.bw",
                "color":"rgb(108,103,46)",
            },
            {	type: "annotation",
                format: "bed",
                name:"Glutamate.CT.CT1_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/Glutamate.CT.CT2.reproduced.narrowPeak.bed"
            },
            {
                "name":"Glutamate.CT.CT2",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/Glutamate.CT.CT2_treat_pileup.srt.bw",
                "color":"rgb(221,122,128)",
            },
            {	type: "annotation",
                format: "bed",
                name:"Glutamate.CT.CT2_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/Glutamate.CT.L6b.reproduced.narrowPeak.bed"
            },
            {
                "name":"Glutamate.CT.L6b",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/Glutamate.CT.L6b_treat_pileup.srt.bw",
                "color":"rgb(226,165,102)",
            },
            {	type: "annotation",
                format: "bed",
                name:"Glutamate.CT.L6b_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/Glutamate.GC.GC.reproduced.narrowPeak.bed"
            },
            {
                "name":"Glutamate.GC.GC",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/Glutamate.GC.GC_treat_pileup.srt.bw",
                "color":"rgb(233,154,161)",
            },
            {	type: "annotation",
                format: "bed",
                name:"Glutamate.GC.GC_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/Glutamate.HIP.CA1.reproduced.narrowPeak.bed"
            },
            {
                "name":"Glutamate.HIP.CA1p",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/Glutamate.HIP.CA1p_treat_pileup.srt.bw",
                "color":"rgb(215,175,82)",
            },
            {	type: "annotation",
                format: "bed",
                name:"Glutamate.HIP.CA1p_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/Glutamate.HIP.CA1p.reproduced.narrowPeak.bed"
            },
            {
                "name":"Glutamate.HIP.CA1",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/Glutamate.HIP.CA1_treat_pileup.srt.bw",
                "color":"rgb(183,117,41)",
            },
            {	type: "annotation",
                format: "bed",
                name:"Glutamate.HIP.CA1_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/Glutamate.HIP.CA2.reproduced.narrowPeak.bed"
            },
            {
                "name":"Glutamate.HIP.CA2",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/Glutamate.HIP.CA2_treat_pileup.srt.bw",
                "color":"rgb(180,137,35)",
            },
            {	type: "annotation",
                format: "bed",
                name:"Glutamate.HIP.CA2_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/Glutamate.HIP.CA3.reproduced.narrowPeak.bed"
            },
            {
                "name":"Glutamate.HIP.CA3",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/Glutamate.HIP.CA3_treat_pileup.srt.bw",
                "color":"rgb(233,153,125)",
            },
            {	type: "annotation",
                format: "bed",
                name:"Glutamate.HIP.CA3_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/Glutamate.HIP.CA4.reproduced.narrowPeak.bed"
            },
            {
                "name":"Glutamate.HIP.CA4",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/Glutamate.HIP.CA4_treat_pileup.srt.bw",
                "color":"rgb(131,90,54)",
            },
            {	type: "annotation",
                format: "bed",
                name:"Glutamate.HIP.CA4_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/Glutamate.HIP.CRc.reproduced.narrowPeak.bed"
            },
            {
                "name":"Glutamate.HIP.CRc",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/Glutamate.HIP.CRc_treat_pileup.srt.bw",
                "color":"rgb(59,161,73)",
            },
            {	type: "annotation",
                format: "bed",
                name:"Glutamate.HIP.CRc_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/Glutamate.HIP.Mossy.reproduced.narrowPeak.bed"
            },
            {
                "name":"Glutamate.HIP.Mossy",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/Glutamate.HIP.Mossy_treat_pileup.srt.bw",
                "color":"rgb(211,171,135)",
            },
            {	type: "annotation",
                format: "bed",
                name:"Glutamate.HIP.Mossy_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/Glutamate.HIP.NBL.reproduced.narrowPeak.bed"
            },
            {
                "name":"Glutamate.HIP.NBL",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/Glutamate.HIP.NBL_treat_pileup.srt.bw",
                "color":"rgb(172,183,52)",
            },
            {	type: "annotation",
                format: "bed",
                name:"Glutamate.HIP.NBL_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/Glutamate.HIP.unk1.reproduced.narrowPeak.bed"
            },
            {
                "name":"Glutamate.HIP.unk1",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/Glutamate.HIP.unk1_treat_pileup.srt.bw",
                "color":"rgb(145,143,86)",
            },
            {	type: "annotation",
                format: "bed",
                name:"Glutamate.HIP.unk1_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/Glutamate.HIP.unk2.reproduced.narrowPeak.bed"
            },
            {
                "name":"Glutamate.HIP.unk2",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/Glutamate.HIP.unk2_treat_pileup.srt.bw",
                "color":"rgb(222,165,156)",
            },
            {	type: "annotation",
                format: "bed",
                name:"Glutamate.HIP.unk2_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/Glutamate.IT.L4.reproduced.narrowPeak.bed"
            },
            {
                "name":"Glutamate.IT.L23",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/Glutamate.IT.L23_treat_pileup.srt.bw",
                "color":"rgb(193,182,123)",
            },
            {	type: "annotation",
                format: "bed",
                name:"Glutamate.IT.L23_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/Glutamate.IT.L5.reproduced.narrowPeak.bed"
            },
            {
                "name":"Glutamate.IT.L4",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/Glutamate.IT.L4_treat_pileup.srt.bw",
                "color":"rgb(169,67,80)",
            },
            {	type: "annotation",
                format: "bed",
                name:"Glutamate.IT.L4_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/Glutamate.IT.L6.reproduced.narrowPeak.bed"
            },
            {
                "name":"Glutamate.IT.L5",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/Glutamate.IT.L5_treat_pileup.srt.bw",
                "color":"rgb(140,85,78)",
            },
            {	type: "annotation",
                format: "bed",
                name:"Glutamate.IT.L5_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/Glutamate.IT.L23.reproduced.narrowPeak.bed"
            },
            {
                "name":"Glutamate.IT.L6",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/Glutamate.IT.L6_treat_pileup.srt.bw",
                "color":"rgb(171,128,96)",
            },
            {	type: "annotation",
                format: "bed",
                name:"Glutamate.IT.L6_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/Glutamate.NP.NP1.reproduced.narrowPeak.bed"
            },
            {
                "name":"Glutamate.NP.NP1",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/Glutamate.NP.NP1_treat_pileup.srt.bw",
                "color":"rgb(198,175,51)",
            },
            {	type: "annotation",
                format: "bed",
                name:"Glutamate.NP.NP1_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/Glutamate.NP.NP2.reproduced.narrowPeak.bed"
            },
            {
                "name":"Glutamate.NP.NP2",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/Glutamate.NP.NP2_treat_pileup.srt.bw",
                "color":"rgb(133,98,28)",
            },
            {	type: "annotation",
                format: "bed",
                name:"Glutamate.NP.NP2_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/Glutamate.NP.NPHIP.reproduced.narrowPeak.bed"
            },
            {
                "name":"Glutamate.NP.NPHIP",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/Glutamate.NP.NPHIP_treat_pileup.srt.bw",
                "color":"rgb(151,80,27)",
            },
            {	type: "annotation",
                format: "bed",
                name:"Glutamate.NP.NPHIP_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/Glutamate.PIR.OLFdeep.reproduced.narrowPeak.bed"
            },
            {
                "name":"Glutamate.PIR.OLFdeep",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/Glutamate.PIR.OLFdeep_treat_pileup.srt.bw",
                "color":"rgb(171,140,73)",
            },
            {	type: "annotation",
                format: "bed",
                name:"Glutamate.PIR.OLFdeep_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/Glutamate.PIR.Pir1.reproduced.narrowPeak.bed"
            },
            {
                "name":"Glutamate.PIR.Pir1",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/Glutamate.PIR.Pir1_treat_pileup.srt.bw",
                "color":"rgb(189,120,74)",
            },
            {	type: "annotation",
                format: "bed",
                name:"Glutamate.PIR.Pir1_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/Glutamate.PIR.Pir2.reproduced.narrowPeak.bed"
            },
            {
                "name":"Glutamate.PIR.Pir2",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/Glutamate.PIR.Pir2_treat_pileup.srt.bw",
                "color":"rgb(177,182,94)",
            },
            {	type: "annotation",
                format: "bed",
                name:"Glutamate.PIR.Pir2_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/Glutamate.PIR.Pir3.reproduced.narrowPeak.bed"
            },
            {
                "name":"Glutamate.PIR.Pir3",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/Glutamate.PIR.Pir3_treat_pileup.srt.bw",
                "color":"rgb(145,145,39)",
            },
            {	type: "annotation",
                format: "bed",
                name:"Glutamate.PIR.Pir3_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/Glutamate.PIR.Pir4.reproduced.narrowPeak.bed"
            },
            {
                "name":"Glutamate.PIR.Pir4",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/Glutamate.PIR.Pir4_treat_pileup.srt.bw",
                "color":"rgb(156,74,51)",
            },
            {	type: "annotation",
                format: "bed",
                name:"Glutamate.PIR.Pir4_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/Glutamate.PT.Pt.reproduced.narrowPeak.bed"
            },
            {
                "name":"Glutamate.PT.Ptlsx",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/Glutamate.PT.Ptlsx_treat_pileup.srt.bw",
                "color":"rgb(114,116,31)",
            },
            {	type: "annotation",
                format: "bed",
                name:"Glutamate.PT.Ptlsx_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/Glutamate.PT.Ptlsx.reproduced.narrowPeak.bed"
            },
            {
                "name":"Glutamate.PT.Pt",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/Glutamate.PT.Pt_treat_pileup.srt.bw",
                "color":"rgb(193,109,92)",
            },
            {	type: "annotation",
                format: "bed",
                name:"Glutamate.PT.Pt_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/NonN.Asc.AscNt.reproduced.narrowPeak.bed"
            },
            {
                "name":"NonN.Asc.AscNt",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/NonN.Asc.AscNt_treat_pileup.srt.bw",
                "color":"rgb(67,102,151)",
            },
            {	type: "annotation",
                format: "bed",
                name:"NonN.Asc.AscNt_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/NonN.Asc.AscT.reproduced.narrowPeak.bed"
            },
            {
                "name":"NonN.Asc.AscT",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/NonN.Asc.AscT_treat_pileup.srt.bw",
                "color":"rgb(152,178,230)",
            },
            {	type: "annotation",
                format: "bed",
                name:"NonN.Asc.AscT_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/NonN.Asc.Myoc.reproduced.narrowPeak.bed"
            },
            {
                "name":"NonN.Asc.Myoc",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/NonN.Asc.Myoc_treat_pileup.srt.bw",
                "color":"rgb(126,132,176)",
            },
            {	type: "annotation",
                format: "bed",
                name:"NonN.Asc.Myoc_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/NonN.Asc.NIPC.reproduced.narrowPeak.bed"
            },
            {
                "name":"NonN.Asc.NIPC",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/NonN.Asc.NIPC_treat_pileup.srt.bw",
                "color":"rgb(176,120,167)",
            },
            {	type: "annotation",
                format: "bed",
                name:"NonN.Asc.NIPC_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/NonN.Asc.RGDG.reproduced.narrowPeak.bed"
            },
            {
                "name":"NonN.Asc.RGDG",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/NonN.Asc.RGDG_treat_pileup.srt.bw",
                "color":"rgb(75,99,176)",
            },
            {	type: "annotation",
                format: "bed",
                name:"NonN.Asc.RGDG_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/NonN.Asc.RGSZ.reproduced.narrowPeak.bed"
            },
            {
                "name":"NonN.Asc.RGSZ",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/NonN.Asc.RGSZ_treat_pileup.srt.bw",
                "color":"rgb(170,60,124)",
            },
            {	type: "annotation",
                format: "bed",
                name:"NonN.Asc.RGSZ_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/NonN.Mgc.Mgc.reproduced.narrowPeak.bed"
            },
            {
                "name":"NonN.Mgc.Mgc",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/NonN.Mgc.Mgc_treat_pileup.srt.bw",
                "color":"rgb(144,79,129)",
            },
            {	type: "annotation",
                format: "bed",
                name:"NonN.Mgc.Mgc_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/NonN.Ogc.Cop.reproduced.narrowPeak.bed"
            },
            {
                "name":"NonN.Ogc.Cop",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/NonN.Ogc.Cop_treat_pileup.srt.bw",
                "color":"rgb(221,116,162)",
            },
            {	type: "annotation",
                format: "bed",
                name:"NonN.Ogc.Cop_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/NonN.Ogc.Mfol.reproduced.narrowPeak.bed"
            },
            {
                "name":"NonN.Ogc.Mfol",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/NonN.Ogc.Mfol_treat_pileup.srt.bw",
                "color":"rgb(87,147,212)",
            },
            {	type: "annotation",
                format: "bed",
                name:"NonN.Ogc.Mfol_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/NonN.Ogc.Mol.reproduced.narrowPeak.bed"
            },
            {
                "name":"NonN.Ogc.Mol",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/NonN.Ogc.Mol_treat_pileup.srt.bw",
                "color":"rgb(208,115,200)",
            },
            {	type: "annotation",
                format: "bed",
                name:"NonN.Ogc.Mol_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/NonN.Ogc.Nfol.reproduced.narrowPeak.bed"
            },
            {
                "name":"NonN.Ogc.Nfol",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/NonN.Ogc.Nfol_treat_pileup.srt.bw",
                "color":"rgb(172,132,218)",
            },
            {	type: "annotation",
                format: "bed",
                name:"NonN.Ogc.Nfol_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/NonN.Opc.Opc.reproduced.narrowPeak.bed"
            },
            {
                "name":"NonN.Opc.Opc",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/NonN.Opc.Opc_treat_pileup.srt.bw",
                "color":"rgb(227,155,225)",
            },
            {	type: "annotation",
                format: "bed",
                name:"NonN.Opc.Opc_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/NonN.Vc.Per.reproduced.narrowPeak.bed"
            },
            {
                "name":"NonN.Vc.Per",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/NonN.Vc.Per_treat_pileup.srt.bw",
                "color":"rgb(224,152,183)",
            },
            {	type: "annotation",
                format: "bed",
                name:"NonN.Vc.Per_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/NonN.Vc.Vec1.reproduced.narrowPeak.bed"
            },
            {
                "name":"NonN.Vc.Vec1",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/NonN.Vc.Vec1_treat_pileup.srt.bw",
                "color":"rgb(193,167,222)",
            },
            {	type: "annotation",
                format: "bed",
                name:"NonN.Vc.Vec1_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/NonN.Vc.Vec2.reproduced.narrowPeak.bed"
            },
            {
                "name":"NonN.Vc.Vec2",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/NonN.Vc.Vec2_treat_pileup.srt.bw",
                "color":"rgb(111,87,174)",
            },
            {	type: "annotation",
                format: "bed",
                name:"NonN.Vc.Vec2_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/NonN.Vc.Vec3.reproduced.narrowPeak.bed"
            },
            {
                "name":"NonN.Vc.Vec3",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/NonN.Vc.Vec3_treat_pileup.srt.bw",
                "color":"rgb(138,146,220)",
            },
            {	type: "annotation",
                format: "bed",
                name:"NonN.Vc.Vec3_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/NonN.Vc.Vec4.reproduced.narrowPeak.bed"
            },
            {
                "name":"NonN.Vc.Vec4",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/NonN.Vc.Vec4_treat_pileup.srt.bw",
                "color":"rgb(118,91,149)",
            },
            {	type: "annotation",
                format: "bed",
                name:"NonN.Vc.Vec4_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/NonN.Vc.Vec5.reproduced.narrowPeak.bed"
            },
            {
                "name":"NonN.Vc.Vec5",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/NonN.Vc.Vec5_treat_pileup.srt.bw",
                "color":"rgb(139,74,172)",
            },
            {	type: "annotation",
                format: "bed",
                name:"NonN.Vc.Vec5_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/NonN.Vc.Vlmc.reproduced.narrowPeak.bed"
            },
            {
                "name":"NonN.Vc.Vlmc",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/NonN.Vc.Vlmc_treat_pileup.srt.bw",
                "color":"rgb(160,57,152)",
            },
            {	type: "annotation",
                format: "bed",
                name:"NonN.Vc.Vlmc_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/NonN.Vc.Vpia.reproduced.narrowPeak.bed"
            },
            {
                "name":"NonN.Vc.Vpia",
                "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/NonN.Vc.Vpia_treat_pileup.srt.bw",
                "color":"rgb(161,80,108)",
            },
            {	type: "annotation",
                format: "bed",
                name:"NonN.Vc.Vpia_bed",
                url:"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/rs1atac.merged.reproduced.narrowPeak.bed"
            },
            
            
        ]
    };

igv.createBrowser(igvDiv, options)
        .then(function (browser) {
            console.log("Created IGV browser");
    })
