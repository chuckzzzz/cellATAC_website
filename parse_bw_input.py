with open('./data/bigwig.txt') as f:
    content=f.readlines()
content=[c.split("\"")[1] for c in content]

with open('./rs1atac.cellLabels.summary') as f:
    color=f.readlines()
#color: "rgb(0, 0, 150)",
color.pop(0)
color=[c.split('\t')[6].strip('\n') for c in color]
with open('./data/bedfiles.txt') as f:
    bed_files=f.readlines()
bed_files.pop(0)
bed_files=[b.split('\t')[1] for b in bed_files]
bed_files=[b for b in bed_files if "narrowPeak.bed" in b]
bed_files.pop(0)

prefix="http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/"
prefix_bed="http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/"
with open('bigwig_input.txt', 'w') as f:
    for i in range(len(content)):
        cur_file=content[i]
        cur_color=color[i]
        r=int('0x'+cur_color[1:3],0)
        g=int('0x'+cur_color[3:5],0)
        b=int('0x'+cur_color[5:],0)
        cur_file=cur_file.split('/')
        cur_file_name=cur_file[-1]
        cur_name="".join(cur_file[-1].split('_')[0])
        f.write('{')
        f.write('\n\t\"name\":\"{}\",\n\t\"url\":\"{}\",'.format(cur_name,prefix+cur_file_name))
        f.write('\n\t\"color\":\"rgb({},{},{})\",'.format(r,g,b))
        #f.write('\n\t\"min\":\"10\",\n')
        f.write('\n},\n')
        f.write('{')
        f.write("\ttype: \"annotation\",\n\tformat: \"bed\",\n\tname:\"{}\",\n\turl:\"{}\"\n".format(cur_name+'_bed',prefix_bed+bed_files[i]))
        f.write('},\n')


            # // { type: "annotation",
            # // format: "bed",
            # //     "name":"test_bed",
            # // "url":"http://renlab.sdsc.edu/yangli/CEMBA/01.joint/rs1atac/cluster.tracks/bed/GABA.CRc.CRc.reproduced.narrowPeak.bed"

            # // },