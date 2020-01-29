import pandas as pd
file_url="./data/rs1atac.cells.meta.txt"
df = pd.read_csv(file_url, sep='\t')
with open("./data/cells.json") as f:
    names = f.readlines()[0]
names=names.split('symbol\":\"')
names=[n.split('\",')[0] for n in names]
names.pop(0)
prefix=".\\data\\QC\\"
print(df.shape)
for name in names:
    temp=df[df['cluster']==name]
    file_name=prefix+name+'.tsv'
    print(file_name)
    temp.to_csv(file_name, columns=['tsse','logUMI'], sep='\t', header=['tsse','logUMI'], index=False)
