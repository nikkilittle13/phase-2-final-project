import React from "react";
import "../index.css";

function ArtistCard({ handleClick, artists }) {
return (
  <div>
    {artists.map((artist, index) => {
      return (
        <div className="container" key={artist.id}>
        <div>
          <h1 className="title-artist">{artist.name}</h1>
          <h4 className="artist-genre">Genre: {artist.genre}</h4>
          <h3 className="votes">Votes: {artist.votes}</h3>
          <button className="button" onClick={() => handleClick(index)}>Vote Now</button>
        </div>
        </div>
      )
    })}
  </div>
)
}

export default ArtistCard;