import React from "react";
import "../index.css";

function AlbumCard({ handleClick, albums }) {
  return (
    <div>
      {albums.map((album, index) => {
        return (
          <div className="container" key={album.id}>
          <div className="card">
            <h1>{album.title}</h1>
            <h4>Artist: {album.artist}</h4>
            <h3>Votes: {album.votes}</h3>
            <button className="button" onClick={() => handleClick(index)}>Vote Now</button>
          </div>
          </div>
        );
      })}
    </div>
  );
}

export default AlbumCard;