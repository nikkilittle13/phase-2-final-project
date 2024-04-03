import React from "react";
import "../index.css";

function ArtistCard({ handleClick, artists }) {
return (
  <div>
    {artists.map((artist, index) => {
      return (
        <div className="container" key={artist.id}>
        <div className="card" >
          <h1>{artist.name}</h1>
          <h4>Genre: {artist.genre}</h4>
          <h3>Votes: {artist.votes}</h3>
          <button className="button" onClick={() => handleClick(index)}>Vote Now</button>
        </div>
        </div>
      )
    })}
  </div>
)
}

export default ArtistCard;