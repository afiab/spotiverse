// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQDcLJsFKI1LevF7e5Hu4npLHvgrm9M_GoqFakg5dYXRPuQVjBwLjV3WoCliKazJIt4uQNtof6qWlLPTspKCX_9zI8ER2RuuP1J5rF9yAp5Hfwxk4poGJut7ZeyAtqB6WQlxJ3uVqvSWlRNEn5_1OXysPXEtx3mrwfAhjbqgFt3a6dTQ80FH6PTA_78S8nM6_t7qnk8IfMp1gZGGcLT76sjhqNWReWsEULVOJYz9hBOd1qLOPPKqMBv7Oc0JEUajABWVLBWITlKbVkbSDz3u';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=short_term&limit=25', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);