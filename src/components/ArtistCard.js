import React, { useEffect, useState } from "react";
import VoteButton from "./VoteButton";

function ArtistCard() {
  const [artists, setArtists] = useState([]);

useEffect(() => {
  fetch("http://localhost:3000/artists")
  .then(res => res.json())
  .then(data => setArtists(data))
}, [])


return (
  <div>
    {artists.map(artist => {
      return (
        <div key={artist.id}>
          <h1>{artist.name}</h1>
          <h4>Genre: {artist.genre}</h4>
          <h3>Votes: {artist.votes}</h3>
          <VoteButton />
        </div>
      )
    })}
  </div>
)
}

export default ArtistCard;