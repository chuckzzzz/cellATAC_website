with open("./celltype_html/template.html") as f:
    content = f.readlines()
with open("./data/cells.json") as f:
    names = f.readlines()[0]
names=names.split('symbol\":\"')
names=[n.split('\",')[0] for n in names]
names.pop(0)

#loop through each names and replace them in the list and create a new list 
#convert this list of lists to a file 
for line in content:
    if("TEMPLATE" in line):
        target_line_index=content.index(line)
        content.pop(target_line_index)

for name in names:
    cur_file_name="./celltype_html/"+name+".html"
    #Still not right
    cur_title="        <h2 id=\"L3_title\">"+ name+"</h2>"
    content.insert(target_line_index, cur_title)
    #print(cur_title)
    with open(cur_file_name, 'w') as f:
        for item in content:
            f.write("%s"%item)
    print(content[target_line_index])
    content.pop(target_line_index)

