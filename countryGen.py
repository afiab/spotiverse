import pandas as pd
df = pd.read_csv (r'C:\Users\afiab\SoftDev\spotiverse\universal_top_spotify_songs.csv')
# clist = "{"
print("countries=",end="[")
countries = []
for idx, row in df.iterrows():
    if idx%50 == 0:
        print("\""+str(row["country"])+"\"",end=",")
    # clist+=("{"+row["name"]+":["+row["country"]+","+row["artists"]+","+str(row["popularity"])+"]}")
# clist+="}"
# print(clist);
# df.to_json (r'C:\Users\afiab\SoftDev\spotiverse\universal_top_spotify_songs.json', indent=4)
# json_output = json.dumps(songs, indent=4)
print("]")
