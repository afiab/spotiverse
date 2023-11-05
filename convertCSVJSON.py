import pandas as pd
df = pd.read_csv (r'C:\Users\afiab\SoftDev\spotiverse\universal_top_spotify_songs.csv')
df.to_json (r'C:\Users\afiab\SoftDev\spotiverse\universal_top_spotify_songs.json')