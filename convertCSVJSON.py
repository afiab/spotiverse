import pandas as pd
import json
df = pd.read_csv (r'C:\Users\afiab\SoftDev\spotiverse\universal_top_spotify_songs.csv')
# clist = "{"
songs = {}
for idx, row in df.iterrows():
    songs[row["name"]] = {
        "country":row["country"],
        "artists":row["artists"],
        "popularity":row["popularity"]
    }
    # clist+=("{"+row["name"]+":["+row["country"]+","+row["artists"]+","+str(row["popularity"])+"]}")
# clist+="}"
# print(clist);
# df.to_json (r'C:\Users\afiab\SoftDev\spotiverse\universal_top_spotify_songs.json', indent=4)
# json_output = json.dumps(songs, indent=4)

with open(r"C:\Users\afiab\SoftDev\spotiverse\universal_top_spotify_songs.json","w") as f:
    json.dump(songs,f, indent=4)