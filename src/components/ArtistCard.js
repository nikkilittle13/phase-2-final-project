import React from "react";

function ArtistCard({ artists, handleClick }) {
return (
  <div>
    {artists.map((artist, index) => {
      return (
        <div key={artist.id}>
          <h1>{artist.name}</h1>
          <h4>Genre: {artist.genre}</h4>
          <h3>Votes: {artist.votes}</h3>
          <button onClick={() => handleClick(index)}>Vote Now</button>
        </div>
      )
    })}
  </div>
)
}

export default ArtistCard;