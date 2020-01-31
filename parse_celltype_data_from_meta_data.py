import pandas as pd
file_url="./data/rs1atac.cells.meta.txt"
df = pd.read_csv(file_url, sep='\t')
print("logUMI Max: "+ str(df['logUMI'].max()))
print("TSSE Max: "+ str(df['tsse'].max()))

datapoints_to_keep=5000
with open("./data/cells.json") as f:
    names = f.readlines()[0]
names=names.split('symbol\":\"')
names=[n.split('\",')[0] for n in names]
names.pop(0)
prefix=".\\data\\QC\\"
print(df.shape)
for name in names:
    temp=df[df['cluster']==name]
    print(len(temp))
    if(len(temp)>datapoints_to_keep):
        temp=temp.sample(n=datapoints_to_keep)
    file_name=prefix+name+'.tsv'
    #print(temp)
    temp.to_csv(file_name, columns=['tsse','logUMI'], sep='\t', header=['tsse','logUMI'], index=False)
