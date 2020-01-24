with open("./celltype_html/Glutamate.IT.L23.html") as f:
    content=f.readlines()
content=[c for c in content if c!="\n"]
print(content)
with open("./template.html", "w") as f:
    for c in content:
        f.write(c)