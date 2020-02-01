file_url='./data/cemba.full.cellMeta.tsv'
output_url='./data/unique_names.tsv'
with open(file_url) as fp:
    content=fp.readlines()
content=[c.strip('\n') for c in content]
unique_names=list(set([name.split('\t')[3] for name in content]))
print(len(unique_names))
with open(output_url, 'w') as f:
    for name in unique_names:
        f.write(name+'\t')
